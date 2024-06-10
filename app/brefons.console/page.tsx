import Dashboard from "@/components/DashBoard/dashboard";
import React from "react";
// import supabase from "@/supabase";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import Image from "next/image" ;

import { createRouteHandlerClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Components from "@/components/Home/Components";
import CropProductivityChart from "@/components/DashBoardCharts/CropProductivity";
import LivestockProductivityChart from "@/components/DashBoardCharts/livestock";
import BarChart from "@/components/DashBoardCharts/BarChart";
import LineChart from "@/components/DashBoardCharts/Linechart";
import StackedBarChart from "@/components/DashBoardCharts/stackedchart";
import Chart from "@/components/DashBoardCharts/chart";
// import ViewActivity from "@/components/LogFrames/viewactivity";


export const revalidate = 0;

const page: React.FC = async () => {
  const supabase = createRouteHandlerClient({ cookies });

  let { data: Projects, error: Projects_error } = await supabase
    .from("Projects")
    .select("*");

  const fiter = (projo: any) => {
    const filteredData = projo?.map(({ id, created_at, county_id, ...other }: any) => other)?.reduce((accumulator: any, currentValue: any) => {
      for (const key in currentValue) {
        if (accumulator.hasOwnProperty(key)) {
          accumulator[key] += currentValue[key];
        } else {
          accumulator[key] = currentValue[key];
        }
      }
      return accumulator;
    }, {})

    return filteredData
  };

  let projects = fiter(Projects)

  const p = {
    id: "5306ecf8-db8c-4bd8-ad6a-b1c40cdbe95f",
    created_at: "2024-05-06T09:47:17.759856+00:00",
    no_of_Waterpans_Developed: 5,
    number_of_Earth_Dams_Developed: 6,
    county_id: "a536c6a5-5956-47f7-a595-641d2e87088d",
    number_of_Boreholes_Developed: 9,
    number_of_shallow_wells_Developed: 9,
    number_of_subsurface_Dams_Developed: 7,
    irrigated_Land_Developed: 7,
    rangeland_Pastureland_Rehabilitated: 8,
    number_of_Health_and_eloped_Rehabilitated: 9,
    number_of_Hay_stores_sheds_Constructed: 2,
    number_of_Veterinary_aboratories_Equipped: 5,
    access_Roads_Rehabilitated: 6,
  };

  return (
    <div className="w-full pb-16">
      <MaxWidthWrapper>
        <Components />
        
      </MaxWidthWrapper>
      
    </div>
  );
};

export default page;
