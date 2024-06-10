import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, { params }) {
  const { id } = params;
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data:contracts, error } = await supabase
    .from("contracts")
    .select(
      "*"
    )
    .eq("id", id);

  // const contracts = data?.flatMap((dt) => dt?.contracts);
  if (error) {
    
    return NextResponse.json({ error }, { status: 401 });
  } else {
    return NextResponse.json({ contracts }, { status: 200 });
  }
}
// export async function DELETE(req, { params }) {
//   // try {
//   //   dbConnect();
//   //   const { id } = params;
//   //   await BlogsModel.findByIdAndDelete(id);
//   //   return NextResponse.json(
//   //     { message: "the collection has been deleted" },
//   //     { status: 200 }
//   //   );
//   // } catch (error) {
//   //   return NextResponse.json(
//   //     { error: "Internal server error" },
//   //     { status: 500 }
//   //   );
//   // }
// }

// export async function PUT(req, { params }) {
//   const {
//     code,
//     activity,
//     budgetedAmount,
//     description,
//     category,
//     contractor,
//     contractAmount,
//     startDate,
//     female,
//     male,
//     longg,
//     latitude,
//     status,
//     remarks,
//     county_id,
//   } = await req.json();

//   const { id } = params;
//   const cookieStore = cookies();
//   const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

//   const { data, error } = await supabase
//     .from("contracts")
//     .update([
//       {
//         code: code,
//         activity: activity,
//         budget_amount: parseFloat(budgetedAmount),
//         contract_description: description,
//         category: category,
//         contractor: contractor,
//         contract_amount: parseFloat(contractAmount),
//         start_date: startDate,
//         female: parseInt(female),
//         male: parseInt(male),
//         longitude: longg,
//         latitude: latitude,
//         status: status,
//         remarks: remarks,
//       },
//     ])
//     .eq("id", "")
//     .select(
//       "id,code,activity,budget_amount,contract_description,category,contractor,contract_amount,start_date,female,male,longitude,latitude,status,remarks"
//     );

//   if (error) {
//         return NextResponse.json({ error }, { status: 401 });
//   } else {
//     return NextResponse.json({ data }, { status: 200 });
//   }
// }
