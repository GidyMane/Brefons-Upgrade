import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
  // const { query } = url.parse(req.url, true);
  // const { county, componentid, units, agencies, periods } = query;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  let { data: menu, error } = await supabase.from("menu_role_view").select("*");
  return NextResponse.json({ menu}, { status: 200 });
}


