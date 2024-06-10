"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BarChart from "@/components/DashBoardCharts/BarChart";
import LineChart from "@/components/DashBoardCharts/Linechart";
import StackedBarChart from "@/components/DashBoardCharts/stackedchart";
import RadarChart from "@/components/DashBoardCharts/GroupedBarChart";
import GroupedBarChart from "@/components/DashBoardCharts/GroupedBarChart";
import CropProductivityChart from "@/components/DashBoardCharts/CropProductivity";
import LivestockProductivityCards from "@/components/DashBoardCharts/livestock";
import LivestockProductivityChart from "@/components/DashBoardCharts/livestock";
import axios from "axios";
import { useSession } from "next-auth/react";

const OutCome1 = (comp_id: any) => {
  const [baselineEnteredValues, setbaselineEnteredValues] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchBaseline = async () => {
      //   setLoading(true);
      await axios
        .post(`/api/baseline/category`, {
          county_id: session?.user?.county,
          component_idss: comp_id?.comp_id?.toString(),
        })
        .then((response) => {
          console.log(
            "setbaselineEnteredValues ",
            response?.data?.combinedSubComponent
          );
          setbaselineEnteredValues(response?.data?.combinedSubComponent);
        })
        .catch((error) => {});
    };

    fetchBaseline();
  }, [comp_id]);
  return (
    <div className="pb-16">
      {baselineEnteredValues?.map((baseline: any, indx) => (
        <div key={indx} className="md:grid md:grid-cols-1 flex flex-col gap-4">
          <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
            <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">
              {baseline?.sub_component_name}
            </h2>
            {baseline?.data?.map((indctor: any) => (
              <div key={indctor?.id} className="w-full">
                <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">
                  {indctor?.sub_indicator_name}
                </p>

                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-full flex flex-row gap-4 flex-wrap">
                  {indctor?.Sub_category?.map((sbcatgory: any) => (
                    <div
                      key={sbcatgory?.id}
                      className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6"
                    >
                      <p className="text-sm text-gray-900">
                        {sbcatgory?.baseline}
                      </p>
                      <h3 className="font-semibold text-balance w-full">
                        {sbcatgory?.sub_category}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutCome1;

{
  /* <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">
              OUTCOME INDICATOR 1.1: Agricultural productivity Crops
            </p>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-full flex flex-row gap-4 flex-wrap">
              <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                <div className="rounded-full p-3 bg-gray-100">
                  <Image
                    src={"/water.png"}
                    className="shrink-0"
                    width={20}
                    height={20}
                    alt="water pan"
                  />
                </div>
                <p className="text-sm text-gray-900">500 Tons/Ha</p>
                <h3 className="font-semibold text-balance w-full">Maize</h3>
              </div>
            </div>  */
}
