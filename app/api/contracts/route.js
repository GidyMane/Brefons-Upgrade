import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// export async function GET(req, res) {
//   const cookieStore = cookies();
//   const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

//   const { data, error } = await supabase
//     .from("contracts")

//     .select("*");

//   if (error) {
//     return NextResponse.json({ error }, { status: 401 });
//   } else {
//     return NextResponse.json({ data }, { status: 200 });
//   }
// }

export async function POST(req, res) {
  const {
    code,
    activity,
    budgetedAmount,
    description,
    category,
    contractor,
    contractAmount,
    startDate,
    female,
    male,
    longg,
    latitude,
    status,
    remarks,
    county_id,
    completion_percentage,
    Constituency,
    Ward,
  } = await req.json();

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("contracts")
    .insert([
      {
        county_id: county_id,
        code: code,
        activity: activity,
        budget_amount: parseFloat(budgetedAmount),
        contract_description: description,
        category: category,
        contractor: contractor,
        contract_amount: parseFloat(contractAmount),
        start_date: startDate,
        female: parseInt(female),
        male: parseInt(male),
        longitude: longg,
        latitude: latitude,
        status: status,
        remarks: remarks,
        completionPercentage: parseInt(completion_percentage),
        constituency:Constituency,
        ward:Ward
      },
    ])
    .select(
      "id,code,activity,budget_amount,contract_description,category,contractor,contract_amount,start_date,female,male,longitude,latitude,status,remarks"
    );

  if (error) {
    return NextResponse.json({ error }, { status: 401 });
  } else {
    return NextResponse.json({ data }, { status: 200 });
  }
}
