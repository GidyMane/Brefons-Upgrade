import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const { county_id, component_idss } = await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: Counties, error: er } = await supabase
    .from("Counties")
    .select(
      "*,Activities(id,sub_indicator(id,indicator_name,Category(id,category,Sub_category(id,sub_category)),Indicators(id,IndicatorName,Sub_components(id,component_name,Components(id,ComponentName)))))"
    )
    .eq("id", county_id);

  const getBaseline = async (countyid, subcategoryid, subindicatorid) => {
    let { data: baseline, error } = await supabase
      .from("baseline")
      .select("baseline,final_target,mtr_target")
      .eq("subcategory_id", subcategoryid)
      .eq("county_id", countyid)
      .eq("subindicator_id", subindicatorid);
    return baseline[0];
  };

  const data = Counties?.flatMap((ctgry) =>
    ctgry?.Activities?.flatMap((sub_ind) =>
      sub_ind?.sub_indicator?.Category?.Sub_category?.map((sub_cat) => ({
        component_name:
          sub_ind?.sub_indicator?.Indicators?.Sub_components?.Components
            ?.ComponentName,
        component_id:
          sub_ind?.sub_indicator?.Indicators?.Sub_components?.Components?.id,
        // sub_indicator_id : sub_ind?.sub_indicator?.id,
        data: [
          {
            sub_indicator_id: sub_ind?.sub_indicator?.id,
            sub_indicator_name: sub_ind?.sub_indicator?.indicator_name,
            sub_component_name:
              sub_ind?.sub_indicator?.Indicators?.Sub_components
                ?.component_name,
            ...sub_ind?.sub_indicator?.Category,
          },
        ],
      }))
    )
  );

  const removeduplicates = [];

  data?.forEach((dat) => {
    // Check if `dat` is already in `removeduplicates`
    const exists = removeduplicates.some(
      (filterdata) =>
        filterdata?.data[0]?.id?.toString() === dat?.data[0]?.id?.toString()
    );

    // If it doesn't exist, push it to `removeduplicates`
    if (!exists) {
      removeduplicates.push(dat);
    }
  });

  function combineComponentsById(dataArray) {
    const combined = {};

    dataArray?.forEach((item) => {
      const { component_id, component_name, data } = item;

      if (!combined[component_id]) {
        combined[component_id] = {
          component_name,
          component_id,
          data: [],
        };
      }

      combined[component_id].data.push(...data);
    });

    return Object.values(combined);
  }

  const combinedData = combineComponentsById(removeduplicates);

  const filderds = combinedData?.filter(
    (data) => data?.component_id?.toString() === component_idss?.toString()
  );

  function combineBySubComponentName(dataArray) {
    const combined = {};

    dataArray?.forEach((item) => {
      item?.data?.forEach((dataItem) => {
        const { sub_component_name } = dataItem;

        if (!combined[sub_component_name]) {
          combined[sub_component_name] = {
            sub_component_name,
            data: [],
          };
        }

        combined[sub_component_name].data.push(dataItem);
      });
    });

    return Object.values(combined);
  }

  const combinedSubComponent = combineBySubComponentName(filderds);

  const addBaselineToSubCategories = async (data) => {
    // Iterate over each sub-component in the data
    for (const subComponent of data) {
      // Iterate over each item in the sub-component's data array
      for (const item of subComponent?.data) {
        // Check if the item has a Sub_category array
        if (Array.isArray(item?.Sub_category)) {
          // Iterate over each sub-category
          for (const subCategory of item.Sub_category) {
            // Fetch the baseline data asynchronously and update the baseline property
            // { baseline, final_target, mtr_target }
            const baselineData = await getBaseline(
              county_id,
              subCategory.id,
              item.sub_indicator_id
            );
            if (baselineData) {
              // const { baseline, final_target, mtr_target } = baselineData;
              subCategory.baseline = baselineData?.baseline
                ? baselineData?.baseline
                : 0;
              subCategory.mtr = baselineData?.mtr_target
                ? baselineData?.mtr_target
                : 0;
              subCategory.final_target = baselineData?.final_target
                ? baselineData?.final_target
                : 0;
            }
          }
        }
      }
    }

    // Return the updated data array
    return data;
  };

  const popo = await addBaselineToSubCategories(combinedSubComponent)
    .then((updatedData) => {
      return updatedData;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return NextResponse.json({ combinedSubComponent: popo }, { status: 200 });
}
