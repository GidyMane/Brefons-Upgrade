import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, { params }) {
  // const { id } = params;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("Counties")
    .select("*,contracts(*)");
  // .eq("id", id);

  const contracts = data
    ?.flatMap((dt) => (dt?.contracts?.length === 0 ? [] : dt))
    ?.flatMap((county) =>
      county?.contracts?.flatMap((rept) => ({
        ...rept,
        county: county?.county,
      }))
    );

  // let { data: contracts, error } = await supabase.from("contracts").select("*");

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
    contract_name,
    contract_cost,
    type,
    variation_cost,
    end_date,
    remarks,
    total_paid,
  } = await req.json();

  const { id } = params;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  console.log("contract_cost ",contract_cost)

  const { data, error } = await supabase
    .from("contracts")
    .update([
      {
        contract_description: contract_name,
        contract_no: code,
        contract_amount: parseFloat(contract_cost),
        variation_cost: parseFloat(variation_cost),
        type: type,
        total_paid: parseFloat(total_paid),
        remarks: remarks,
        end_date: end_date,
      },
    ])
    .eq("id", id)
    .select("*");

  if (error) {
    console.log("error ", error);
    return NextResponse.json({ error }, { status: 401 });
  } else {
    return NextResponse.json({ data }, { status: 200 });
  }
}
