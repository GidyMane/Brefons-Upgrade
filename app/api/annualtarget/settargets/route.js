import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";

export async function POST(req, res) {
  const { county_id, baseline,date } = await req.json();
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
            // Fetch the baseline data asynchronously and update the baseline property
            let { data: baseline, error } = await supabase
              .from("annual_target")
              .select("*")
              .eq("subcategory_id", subCategory?.id)
              .eq("county_id", county_id)
              .eq("subindicator_id", item?.sub_indicator_id)
              .eq("date",date.toString());

            if (baseline?.length !== 0) {
              const { data, error } = await supabase
                .from("annual_target")
                .update({
                  target: parseFloat(subCategory?.target),
                  remarks: subCategory?.remarks,
                })
                .eq("subcategory_id", subCategory?.id)
                .eq("county_id", county_id)
                .eq("subindicator_id", item?.sub_indicator_id)
                .eq("date",date.toString())
                .select();
            } else {
              const { data, error } = await supabase
                .from("annual_target")
                .insert({
                  target: parseFloat(subCategory?.target),
                  remarks: subCategory?.remarks,
                  subcategory_id: subCategory?.id,
                  county_id: county_id,
                  subindicator_id: item?.sub_indicator_id,
                  date:date.toString()
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
