import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, { params }) {
  const { id } = params;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("Counties")
    .select(
      "*,contracts(*)"
    )
    .eq("id", id);

  const contracts = data?.flatMap((dt) => dt?.contracts);
  if (error) {
    
    return NextResponse.json({ error }, { status: 401 });
  } else {
    return NextResponse.json({ contracts }, { status: 200 });
  }
}
export async function DELETE(req, { params }) {
  // try {
  //   dbConnect();
  //   const { id } = params;
  //   await BlogsModel.findByIdAndDelete(id);
  //   return NextResponse.json(
  //     { message: "the collection has been deleted" },
  //     { status: 200 }
  //   );
  // } catch (error) {
  //   return NextResponse.json(
  //     { error: "Internal server error" },
  //     { status: 500 }
  //   );
  // }
}

export async function PUT(req, { params }) {
  const {
    code,
    activity,
    budgetedAmount,
    description,
    category,
    contractor,
    contractAmount,
    startDate,
    female,
    male,
    longg,
    latitude,
    status,
    remarks,
    completion_percentage,
    constituency,
    ward
    
  } = await req.json();

  const { id } = params;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("contracts")
    .update([
      {
        code: code,
        activity: activity,
        budget_amount: parseFloat(budgetedAmount),
        contract_description: description,
        category: category,
        contractor: contractor,
        contract_amount: parseFloat(contractAmount),
        start_date: startDate,
        female: parseInt(female),
        male: parseInt(male),
        longitude: longg,
        latitude: latitude,
        status: status,
        remarks: remarks,
        completionPercentage: parseInt(completion_percentage),
        constituency,
        ward
      },
    ])
    .eq("id", id)
    .select(
      "*"
    );

  if (error) {
        return NextResponse.json({ error }, { status: 401 });
  } else {
    return NextResponse.json({ data }, { status: 200 });
  }
}
