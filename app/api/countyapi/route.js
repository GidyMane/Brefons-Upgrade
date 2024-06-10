import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
  const { query } = url.parse(req.url, true);
  const { county, componentid, units, agencies, periods } = query;

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  let { data: Counties, error: Errors } = await supabase
    .from("Counties")
    .select("*,Components(*,Indicators(*,IndicatorActivity(*)))");

  if (Errors) {
    return NextResponse.json({ error: "fetch error" }, { status: 500 });
  } else {
    const countysData = (county, componentid) => {
      const countys = Counties?.filter((cnty) =>
        county?.toLowerCase() === "pcu" ? cnty : cnty?.county === county
      )
        ?.flatMap((cpnt) => cpnt?.Components)
        ?.filter((tf) => {
          if (componentid && componentid?.toLowerCase() !== "undefined") {
            if (tf?.id === componentid) {
              return tf;
            }
          } else {
            return tf;
          }
        })
        ?.flatMap((c) => c?.Indicators)
        ?.flatMap((ck) => ck?.IndicatorActivity)
        ?.filter((unit) => {
          if (units && units?.toLowerCase() !== "undefined") {
            if (unit?.UnitOfMeasurement === units) {
              return unit;
            }
          } else {
            return unit;
          }
        })
        ?.filter((agency) => {
          if (agencies && agencies?.toLowerCase() !== "undefined") {
            if (agency?.Agency === agencies) {
              return agency;
            }
          } else {
            return agency;
          }
        })
        ?.filter((period) => {
          if (periods && periods?.toLowerCase() !== "undefined") {
            if (period?.period === periods) {
              return period;
            }
          } else {
            return period;
          }
        });
      return countys;
    };
    let CountyData = countysData(county, componentid);
    return NextResponse.json({ CountyData }, { status: 200 });
  }
}
