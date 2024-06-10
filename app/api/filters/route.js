import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: IndicatorActivity, error } = await supabase
    .from("IndicatorActivity")
    .select("UnitOfMeasurement,Agency,period");

  let { data: Components, error: Componentserror } = await supabase
    .from("Components")
    .select("id,ComponentName");

  const unitOfMeasurements = IndicatorActivity.map(
    (activity) => activity.UnitOfMeasurement
  );

  const agency = IndicatorActivity.map((activity) => activity.Agency);

  const period = IndicatorActivity.map((activity) => activity.period);

  const component = Components.map((activity) => activity);

  // Use a Set to remove duplicates
  const UnitOfMeasurement = [...new Set(unitOfMeasurements)];
  const Agency = [...new Set(agency)];
  const Periods = [...new Set(period)];
  const components = [...new Set(component)];

  return NextResponse.json(
    { UnitOfMeasurement, Agency, Periods, components },
    { status: 200 }
  );
}
