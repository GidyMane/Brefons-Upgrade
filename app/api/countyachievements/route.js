import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const { county_id, component_idss, date } = await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: Counties, error: er } = await supabase
    .from("Counties")
    .select(
      "*,Activities(id,sub_indicator(id,indicator_name,Category(id,category,Sub_category(id,sub_category)),Indicators(id,IndicatorName,Sub_components(id,component_name,Components(id,ComponentName)))))"
    )
    .eq("id", county_id);

  let { data: county_achievements, error: err } = await supabase
    .from("Counties")
    .select(
      "*,county_achievements(id,sub_indicator(id,indicator_name,Category(id,category,Sub_category(id,sub_category)),Indicators(id,IndicatorName,Sub_components(id,component_name,Components(id,ComponentName)))))"
    )
    .eq("id", county_id)
    .filter("county_achievements.date", "eq", date);

  const renameAnnualTargetToActivities = (dataArray) => {
    return dataArray.map((item) => {
      const { county_achievements, ...rest } = item; // Destructure to separate annual_target from other properties
      return { ...rest, Activities: county_achievements }; // Create a new object with the renamed key
    });
  };

  const updatedData = renameAnnualTargetToActivities(county_achievements);
  let data;

  if (updatedData[0]?.Activities?.length === 0) {
    data = Counties?.flatMap((ctgry) =>
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
  } else {
    data = updatedData?.flatMap((ctgry) =>
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
  }

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
            let { data: progress_reporting, error } = await supabase
              .from("county_achievements")
              .select("*")
              .eq("subcategory_id", subCategory.id)
              .eq("county_id", county_id)
              .eq("subindicator_id", item.sub_indicator_id)
              .eq("date", date);

            subCategory.cumm_target =
              progress_reporting?.length === 0
                ? 0
                : progress_reporting[0]?.cumm_target;
            subCategory.Q1A =
              progress_reporting?.length === 0 ? 0 : progress_reporting[0]?.Q1A;
            subCategory.Q2A =
              progress_reporting?.length === 0 ? 0 : progress_reporting[0]?.Q2A;
            subCategory.Q3A =
              progress_reporting?.length === 0 ? 0 : progress_reporting[0]?.Q3A;
            subCategory.Q4A =
              progress_reporting?.length === 0 ? 0 : progress_reporting[0]?.Q4A;
            subCategory.date =
              progress_reporting?.length === 0
                ? 0
                : progress_reporting[0]?.date;
            subCategory.youth =
              progress_reporting?.length === 0
                ? 0
                : progress_reporting[0]?.youth;
            subCategory.remarks =
              progress_reporting?.length === 0
                ? ""
                : progress_reporting[0]?.remarks;
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

// "baseline": [{
//   "sub_component_name": " Increased Resilience of Agropastoral Production Systems ",
//   "data": [
//       {
//           "sub_indicator_id": "04624fcb-659b-458c-aeec-911c7fb5ce77",
//           "sub_indicator_name": " Agricultural productivity  (Crop)",
//           "sub_component_name": " Increased Resilience of Agropastoral Production Systems ",
//           "id": "f64c5111-30f3-482f-aca4-c853a308a199",
//           "category": "Crop Productivity",
//           "Sub_category": [
//               {
//                   "id": "7a689e68-894a-43e6-8bcc-b7939574fb36",
//                   "sub_category": "Bananas",
//                   "baseline": 70,
//                   "mtr": 100,
//                   "final_target": 1230
//               },
//               {
//                   "id": "6674b49d-315c-4f49-85ec-d944b8e58391",
//                   "sub_category": "French Beans",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "ac6bbe8c-55ef-49d5-82e5-1c8365f3e00d",
//                   "sub_category": "Water Melon",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "cab96222-2487-4e3d-8da9-ecc3e9e17229",
//                   "sub_category": "Tomatoes",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "0b9afbe2-790c-4b57-a30c-2ed5ab38af7c",
//                   "sub_category": "Maize",
//                   "baseline": 40,
//                   "mtr": 50,
//                   "final_target": 100
//               }
//           ]
//       },
//       {
//           "sub_indicator_id": "c697a3f3-0403-4797-97ff-c289084d0fd7",
//           "sub_indicator_name": " Agricultural productivity   (Livestock)",
//           "sub_component_name": " Increased Resilience of Agropastoral Production Systems ",
//           "id": "7b5e57f2-f280-4009-a2f0-afc73fac53a5",
//           "category": "Livestock Productivity",
//           "Sub_category": [
//               {
//                   "id": "2aa131ac-03e8-4cae-8d6a-b29ec39176d0",
//                   "sub_category": "Indigenous Chicken Meat",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "f8dbe64d-6391-4775-b151-9e77c0461d16",
//                   "sub_category": "Milk(Cow)",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "6c275b9f-4291-43a1-b828-d91c4851e900",
//                   "sub_category": "Milk (Goat)",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "a44cf90d-a862-4096-b4c9-9efc11eca8c1",
//                   "sub_category": " Milk (Camel)",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "afe6fe1c-a503-4360-8bda-a455458499df",
//                   "sub_category": "Camel Meat",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "c7ba6310-8e55-49eb-98ab-23b7c5e4766a",
//                   "sub_category": "Goat meat (chevon)",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "5b01594e-53b3-4726-af91-2240ca04b973",
//                   "sub_category": "Honey",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               },
//               {
//                   "id": "090a3d99-593b-47ab-85e5-b11257b3c88b",
//                   "sub_category": "Beef ",
//                   "baseline": 0,
//                   "mtr": 0,
//                   "final_target": 0
//               }
//           ]
//       }
//   ]
// }
// ]
