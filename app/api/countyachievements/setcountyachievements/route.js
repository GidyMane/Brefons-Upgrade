import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";

export async function POST(req, res) {
  const { county_id, baseline, date } = await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const addBaselineToSubCategories = async (data) => {
    // Iterate over each sub-component in the data
    for (const subComponent of data) {
      // Iterate over each item in the sub-component's data array
      for (const item of subComponent?.data) {
        // Check if the item has a Sub_category array
        if (Array.isArray(item?.Sub_category)) {
          // Iterate over each sub-category
          for (const subCategory of item.Sub_category) {
            let { data: county_achievements, error } = await supabase
              .from("county_achievements")
              .select("*")
              .eq("subcategory_id", subCategory.id)
              .eq("county_id", county_id)
              .eq("subindicator_id", item.sub_indicator_id)
              .eq("date", date);

            if (county_achievements?.length !== 0) {
              const { data, error } = await supabase
                .from("county_achievements")
                .update({
                  cumm_target: parseFloat(subCategory?.cumm_target),
                  Q1A: parseFloat(subCategory?.Q1A),
                  Q2A: parseFloat(subCategory?.Q2A),
                  Q3A: parseFloat(subCategory?.Q3A),
                  Q4A: parseFloat(subCategory?.Q4A),
                  // date: subCategory?.date,
                  youth: parseInt(subCategory?.youth),
                  remarks: subCategory?.remarks,
                })
                .eq("subcategory_id", subCategory?.id)
                .eq("county_id", county_id)
                .eq("subindicator_id", item?.sub_indicator_id)
                .eq("date", date.toString())
                .select();
            } else {
              const { data, error } = await supabase
                .from("county_achievements")
                .insert({
                  cumm_target: parseFloat(subCategory?.cumm_target),
                  Q1A: parseFloat(subCategory?.Q1A),
                  Q2A: parseFloat(subCategory?.Q2A),
                  Q3A: parseFloat(subCategory?.Q3A),
                  Q4A: parseFloat(subCategory?.Q4A),
                  date: subCategory?.date,
                  youth: parseInt(subCategory?.youth),
                  remarks: subCategory?.remarks,
                  subcategory_id: subCategory?.id,
                  county_id: county_id,
                  subindicator_id: item?.sub_indicator_id,
                  date: date.toString(),
                })
                .select("*");
            }
          }
        }
      }
    }

    // Return the updated data array
    return data;
  };

  const popo = await addBaselineToSubCategories(baseline)
    .then((updatedData) => {
      return updatedData;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return NextResponse.json({ popo }, { status: 200 });
}
