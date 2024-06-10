import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
  const { query } = url.parse(req.url, true);
  const { component_id } = query;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: Sub_components, error } = await supabase
    .from("Sub_components")
    .select("*,Types(type)")
    .eq("component_id", component_id);
  const filteredSub_components = Sub_components?.map((sbcmpnts) => ({
    id: sbcmpnts?.id,
    component_id: sbcmpnts?.component_id,
    component_name: sbcmpnts?.component_name,
    type: sbcmpnts?.Types?.type,
    component_code: sbcmpnts?.component_code,
  }));

  return NextResponse.json({ Sub_components:filteredSub_components }, { status: 200 });
}

// export async function POST(req, res) {
//   const { ComponentName, ComponentCode } = await req.json();
//   const cookieStore = cookies();
//   const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

// const { data, error } = await supabase
// .from('Components')
// .insert([
//   { ComponentName: ComponentName,ComponentCode:ComponentCode },

// ])
// .select()

//   return NextResponse.json({ data }, { status: 200 });
// }
