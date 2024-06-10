import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const { compnts } = await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });



  let { data: Cou, error: Errs } = await supabase
    .from("Components")
    .select(
      "*,Sub_components(id,component_name,component_code,Types(type),Indicators(*,Types(type),sub_indicator(id,indicator_name,indictor_code,Types(type),Category(code,category),Activities(id,Counties(*))))))"
    )
    .eq("id", compnts);

  const result = Cou?.flatMap((component) =>
    component?.Sub_components?.flatMap((subComponent) =>
      subComponent?.Indicators?.flatMap((indicator) =>
        indicator?.sub_indicator?.map((subIndicator) => ({
          component_name: component?.ComponentName,
          componentid: component?.id,
          componentdata: {
            sub_component_id: subComponent?.id,
            sub_component_code: subComponent?.component_code,
            indicator_id: indicator?.id,
            sub_indicator_name: subIndicator?.indicator_name,
            sub_indicator_id: subIndicator?.id,
            sub_indicator_code: subIndicator?.indictor_code,
            types: subIndicator?.Types?.type,
            Category: subIndicator?.Category?.category,
            county: subIndicator?.Activities?.flatMap(
              (act) => act?.Counties
            )?.map((cnty) => cnty?.county),
          },
        }))
      )
    )
  );

  let filteredata = [];

  result?.map((rts) => {
    if (filteredata?.length === 0) {
      filteredata?.push({
        component_name: rts?.component_name,
        componentid: rts?.componentid,
        componentdata: [rts?.componentdata],
      });
    } else {
      filteredata?.map((mtp) => {
        if (mtp?.component_name === rts?.component_name) {
          mtp?.componentdata?.push(rts?.componentdata);
        } else {
          filteredata?.push({
            component_name: rts?.component_name,
            componentid: rts?.componentid,
            componentdata: [rts?.componentdata],
          });
        }
      });
    }
  });

  const filterdataa = filteredata?.flatMap((e) => e?.componentdata);

  return NextResponse.json({ logframe: filterdataa }, { status: 200 });
}

// {
//   component_name:"",
//   grouped_data:[
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1",
//       "sub_indicator_name": " Agricultural productivity  (Crop)",
//       "sub_indicator_code": "1.1.a",
//       "types": "Outcome",
//       "Category": "Crop Productivity",
//       "county": []
//     },
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1",
//       "sub_indicator_name": " Agricultural productivity   (Livestock)",
//       "sub_indicator_code": "1.1.b",
//       "types": "Outcome",
//       "Category": "Livestock Productivity",
//       "county": [
//         "Garissa",
//         "Baringo"
//       ]
//     },
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1",
//       "sub_indicator_name": "Water mobilisation infrastructure sensitive to gender (small earth dams, boreholes, covered water pans, shallow wells, water distribution systems) constructed or rehabilitated ",
//       "sub_indicator_code": "1.1.1",
//       "types": "Output",
//       "Category": " Water infrastructure developed",
//       "county": []
//     },
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1",
//       "sub_indicator_name": "Irrigation Development/rehabilitation",
//       "sub_indicator_code": "1.1.2",
//       "types": "Output",
//       "Category": "  land developed",
//       "county": []
//     },
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1",
//       "sub_indicator_name": " Rangeland/Pasture development/rehabilitation",
//       "sub_indicator_code": "1.1.3",
//       "types": "Output",
//       "Category": "Rangeland/Pasture",
//       "county": []
//     },
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1",
//       "sub_indicator_name": " Animal feed, health, and market access infrastructure constructed/rehabilitated",
//       "sub_indicator_code": "1.1.4",
//       "types": "Output",
//       "Category": "Health and Market Access Infrastructure ",
//       "county": []
//     },
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1",
//       "sub_indicator_name": " IGAD regional clusters with operationalised cross-border MOUs to better control transboundary animal diseases and zoonoses ",
//       "sub_indicator_code": "1.1.5",
//       "types": "Output",
//       "county": []
//     },
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1",
//       "sub_indicator_name": "People benefitting from improved access to cross-border, pastoral natural resources (pasture, water, and transhumance routes, structures) ",
//       "sub_indicator_code": "1.2.a",
//       "types": "Outcome",
//       "Category": "Resource Access",
//       "county": []
//     },
//     {
//       "component_name": "Strengthening the resilience of Agro-Pastoral production systems",
//       "sub_component_code": "1.2",
//       "sub_indicator_name": " Pastoral and Agropastoral lands under sustainable land management",
//       "sub_indicator_code": "1.2.1.a",
//       "types": "Output",
//       "county": []
//     }

//   ]
// }
