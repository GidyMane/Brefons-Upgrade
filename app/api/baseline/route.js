import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
  const { query } = url.parse(req.url, true);
  const { subcategory_id,county_id,subindicator_id } = query;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });


  let { data: baseline, error } = await supabase
  .from('baseline')
  .select('baseline,mtr_target,final_target')
  .eq("subcategory_id",subcategory_id)
  .eq("county_id",county_id)
  .eq("subindicator_id",subindicator_id)
          
  return NextResponse.json({ baseline }, { status: 200 });
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