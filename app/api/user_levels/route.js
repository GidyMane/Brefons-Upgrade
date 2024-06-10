import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
 
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: user_group, error } = await supabase
  .from('roles')
  .select('*')
          
  
let { data: user_levels, error:err } = await supabase
.from('User_level')
.select('*')
        

  return NextResponse.json({user_group, user_levels}, { status: 200 });
}
