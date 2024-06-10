import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: user, error: usererror } = await supabase
    .from("user")
    .select("*,roles(name),User_level(levels),Counties(county)");

  const results = user?.map((users) => ({
    username: users?.user_name,
    user_email: users?.user_email,
    disabled:
      users?.disabled === null || users?.disabled === false ? false : true,
    user_group: users?.roles?.name,
    station: users?.Counties?.county,
    User_level: users?.User_level?.levels,
    last_login: users?.last_login,
    id: users?.id,
  }));

  return NextResponse.json({ user: results }, { status: 200 });
}
