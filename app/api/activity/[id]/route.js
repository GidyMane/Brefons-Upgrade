import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";

// export async function GET(req, { params }) {
//   try {
//     const { id } = params;

//     return NextResponse.json({ id }, { status: 200 });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
export async function DELETE(req, { params }) {
  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    const { id } = params;
       const { error } = await supabase
      .from("IndicatorActivity")
      .delete()
      .eq("id", `${id}`);

    if (error) {
      return NextResponse.json({ message: "error" }, { status: 400 });
    } else {
      return NextResponse.json(
        { message: "the collection has been deleted" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    const { id } = params;
    const {
      ActivityName,
      UnitOfMeasurement,
      Description,
      Source,
      Agency,
      Value,
      period,
    } = await req.json();

    const { data, error } = await supabase
      .from("IndicatorActivity")
      .update({
        ActivityName: ActivityName,
        UnitOfMeasurement: UnitOfMeasurement,
        Description: Description,
        Source: Source,
        Agency: Agency,
        Value: Value,
        period: period,
      })
      .eq("id", `${id}`)
      .select();
    if (error) {
      return NextResponse.json(
        { message: "error during activity update" },
        { status: 401 }
      );
    } else {
      return NextResponse.json({ data }, { status: 200 });
    }
    return NextResponse.json({ id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
