import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const {
    COUNTY,
    No_of_Waterpans_Developed,
    Number_of_Earth_Dams_Developed,
    Number_of_Boreholes_Developed,
    Number_of_shallow_wells_Developed,
    Number_of_subsurface_Dams_Developed,
    Irrigated_Land_Developed,
    Rangeland_Pastureland_Rehabilitated,
    Number_of_Health_and_eloped_Rehabilitated,
    Number_of_Hay_stores_sheds_Constructed,
    Number_of_Veterinary_aboratories_Equipped,
    Access_Roads_Rehabilitated,
  } = await req.json();

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: Counties, error } = await supabase
    .from("Counties")
    .select("*")
    .eq("county", `${COUNTY}`);

  if (Counties) {
   
    let { data: Projects, error } = await supabase
      .from("Projects")
      .select("*")
      .eq("county_id", `${Counties[0]?.id}`);

    if (Projects?.length > 0) {
      
      const { data:updatedtedProjects, error } = await supabase
      .from('Projects')
      .update([
        {
          // county_id :Counties[0]?.id,
          no_of_Waterpans_Developed:parseFloat(No_of_Waterpans_Developed) + parseFloat(Projects[0]?.no_of_Waterpans_Developed),
          number_of_Earth_Dams_Developed:parseFloat(Number_of_Earth_Dams_Developed) + parseFloat(Projects[0]?.number_of_Earth_Dams_Developed),
          number_of_Boreholes_Developed:parseFloat(Number_of_Boreholes_Developed) + parseFloat(Projects[0]?.number_of_Boreholes_Developed),
          number_of_shallow_wells_Developed:parseFloat(Number_of_shallow_wells_Developed) + parseFloat(Projects[0]?.number_of_shallow_wells_Developed),
          number_of_subsurface_Dams_Developed:parseFloat(Number_of_subsurface_Dams_Developed) + parseFloat(Projects[0]?.number_of_subsurface_Dams_Developed),
          irrigated_Land_Developed:parseFloat(Irrigated_Land_Developed) + parseFloat(Projects[0]?.irrigated_Land_Developed),
          rangeland_Pastureland_Rehabilitated:parseFloat(Rangeland_Pastureland_Rehabilitated) + parseFloat(Projects[0]?.rangeland_Pastureland_Rehabilitated),
          number_of_Health_and_eloped_Rehabilitated:parseFloat(Number_of_Health_and_eloped_Rehabilitated) + parseFloat(Projects[0]?.number_of_Health_and_eloped_Rehabilitated),
          number_of_Hay_stores_sheds_Constructed:parseFloat(Number_of_Hay_stores_sheds_Constructed) + parseFloat(Projects[0]?.number_of_Hay_stores_sheds_Constructed),
          number_of_Veterinary_aboratories_Equipped:parseFloat(Number_of_Veterinary_aboratories_Equipped) + parseFloat(Projects[0]?.number_of_Veterinary_aboratories_Equipped),
          access_Roads_Rehabilitated:parseFloat(Access_Roads_Rehabilitated) + parseFloat(Projects[0]?.access_Roads_Rehabilitated),
        },
      ])
      .eq("id", `${Projects[0]?.id}`)
      .select("*")
      if(error){
        return NextResponse.json({
          status: 400,
          message: "error during update",
        });
      }
      return NextResponse.json({
        status: 200,
        message: updatedtedProjects,
      });
    } else {
      const { data:insertedProjects, error } = await supabase
      .from('Projects')
      .insert([
        {
          county_id :Counties[0]?.id,
          no_of_Waterpans_Developed:No_of_Waterpans_Developed,
          number_of_Earth_Dams_Developed:Number_of_Earth_Dams_Developed,
          number_of_Boreholes_Developed:Number_of_Boreholes_Developed,
          number_of_shallow_wells_Developed:Number_of_shallow_wells_Developed,
          number_of_subsurface_Dams_Developed:Number_of_subsurface_Dams_Developed,
          irrigated_Land_Developed:Irrigated_Land_Developed,
          rangeland_Pastureland_Rehabilitated:Rangeland_Pastureland_Rehabilitated,
          number_of_Health_and_eloped_Rehabilitated:Number_of_Health_and_eloped_Rehabilitated,
          number_of_Hay_stores_sheds_Constructed:Number_of_Hay_stores_sheds_Constructed,
          number_of_Veterinary_aboratories_Equipped:Number_of_Veterinary_aboratories_Equipped,
          access_Roads_Rehabilitated:Access_Roads_Rehabilitated,
        },
      ])
      .select("*")
      if(error){
        return NextResponse.json({
          status: 400,
          message: error,
        });
      }
      return NextResponse.json({
        status: 200,
        data: insertedProjects,
      });
    }
  }

 
}

// const p =  {
//   _id: 336249367,
//   'formhub/uuid': 'd86e0f65c41047118c55962e5dbb062a',
//   start: '2024-05-06T10:27:11.546+03:00',
//   end: '2024-05-06T10:27:48.664+03:00',
//   today: '2024-05-06',
//   username: 'brefonskenya24',
//   deviceid: 'ee.kobotoolbox.org:w4zvePfclapywn81',
//   phonenumber: 'phonenumber not found',
//   COUNTY: 'marsabit',
//   No_of_Waterpans_Developed: '10',
//   Number_of_Earth_Dams_Developed: '3',
//   Number_of_Boreholes_Developed: '3',
//   Number_of_shallow_wells_Developed: '4',
//   Number_of_subsurface_Dams_Developed: '5',
//   Irrigated_Land_Developed: '5',
//   Rangeland_Pastureland_Rehabilitated: '6',
//   Number_of_Health_and_eloped_Rehabilitated: '6',
//   Number_of_Hay_stores_sheds_Constructed: '6',
//   Number_of_Veterinary_aboratories_Equipped: '6',
//   Access_Roads_Rehabilitated: '6',
//   __version__: 'v3YCJ3WWfLcP4jUvTxfsxZ',
//   'meta/instanceID': 'uuid:1e26beb1-ca0a-431d-bbe9-5d04e8bec497',
//   _xform_id_string: 'a76GCeCnRuBtuCjVn3wFJK',
//   _uuid: '1e26beb1-ca0a-431d-bbe9-5d04e8bec497',
//   _attachments: [],
//   _status: 'submitted_via_web',
//   _geolocation: [ null, null ],
//   _submission_time: '2024-05-06T07:27:50',
//   _tags: [],
//   _notes: [],
//   _validation_status: {},
//   _submitted_by: 'brefonskenya24'
// }
