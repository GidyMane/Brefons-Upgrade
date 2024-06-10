import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const { userPassword, userEmail } = await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  let { data: userdata, error: loginError } =
    await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });

  if (loginError) {
    // wronUser();

    return NextResponse.json({
      status: 400,
      userdata: "wrng user or pass",
    });
  } else {
    let { data: signeduser, error: userError } = await supabase
      .from("user")
      .select("*")
      .eq("id", userdata.user.id);
    if (userError) {
      return NextResponse.json({
        status: 400,
        userdata: "user error",
      });
    } else {
      if (signeduser[0]?.disabled) {
        await supabase.auth.signOut();
        // notAuthorized();

        return NextResponse.json({
          status: 400,
          userdata: "not authorized",
        });
      } else {
        let { data: Counties, error } = await supabase
          .from("Counties")
          .select("*")
          .eq("id", signeduser[0]?.station);

        let { data: roles, error: errr } = await supabase
          .from("roles")
          .select("*")
          .eq("id", signeduser[0]?.user_group);

        let { data: User_level, error:errors } = await supabase
          .from("User_level")
          .select("*")
          .eq("id", signeduser[0]?.user_level) ;

        const urds = {
          username: signeduser[0]?.user_name,
          user_email: signeduser[0]?.user_email,
          user_group: roles[0]?.name,
          user_level: User_level[0]?.levels,
          station: Counties[0]?.county,
          county_id: Counties[0]?.id,
        };

        return NextResponse.json({
          status: 200,
          userdata: urds,
        });
      }
    }
  }
}