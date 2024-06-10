import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: Components, error } = await supabase
    .from("Components")
    .select("*");

  return NextResponse.json({ Components }, { status: 200 });
}

export async function POST(req, res) {
  const { ComponentName, ComponentCode } = await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("Components")
    .insert([{ ComponentName: ComponentName, ComponentCode: ComponentCode }])
    .select();

  return NextResponse.json({ data }, { status: 200 });
}

export async function PUT(req, res) {
  const { ComponentName, ComponentCode,id } = await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("Components")
    .insert([{ ComponentName: ComponentName, ComponentCode: ComponentCode }])
    .eq("id", id)
    .select('*');

  return NextResponse.json({ data }, { status: 200 });
}