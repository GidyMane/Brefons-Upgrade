import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const {
    userPassword,
    userEmail,
    user_name,
    station,
    user_group,
    user_level,
  } = await req.json();
  const requestUrl = new URL(req.url);

  console.log("user group",user_group)

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: userdata, error: loginError } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      data: {
        user_name: user_name,
        user_station: station,
        user_mail: userEmail,
        user_group: parseInt(user_group),
        user_level: user_level,
      },
    },
  });

  if (loginError) {
    console.log("error ",loginError)
    return NextResponse.json({ loginError }, { status: 400 });
  } else if (userdata) {
    return NextResponse.json({ userdata }, { status: 200 });
  }
}
