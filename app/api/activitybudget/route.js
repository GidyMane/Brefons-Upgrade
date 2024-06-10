import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
  const { query } = url.parse(req.url, true);
  const { sub_component_id, date } = query;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: Activity_budget, error } = await supabase
    .from("Activity_budget")
    .select("*")
    .eq("sub_component_id", sub_component_id)
    .eq("date", date);

  function calculateTotalBudget(activities) {
    return activities?.reduce((total, activity) => total + activity?.budget, 0);
  }

  const totalBudget = calculateTotalBudget(Activity_budget);

  // const contracts = data?.flatMap((dt) => dt?.contracts);
  if (error) {
    return NextResponse.json({ error }, { status: 401 });
  } else {
    return NextResponse.json({ Activity_budget, totalBudget }, { status: 200 });
  }
}

export async function POST(req, res) {
  const { code, activity, budget, date, sub_component_id, amount_spend } =
    await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("Activity_budget")
    .insert([
      {
        code: code,
        activity: activity,
        budget: parseFloat(budget),
        date: date,
        sub_component_id: sub_component_id,
        amount_spend: amount_spend,
      },
    ])
    .select("*");

  return NextResponse.json({ data }, { status: 200 });
}
