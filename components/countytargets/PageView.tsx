"use client";

import React, { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { DataTable } from "../componentsfiles/ComponentTable";
import { columns } from "./columns";
import axios from "axios";

const PageView = () => {
  const isAdd = useSelector((state: RootState) => state.imageSlice.isAdd);
  const [comp, setComp] = useState("");
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [county, setCounty] = useState(""); // State for selected county
  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(event.target.value);
    if (!isNaN(year)) {
      setSelectedYear(year);
    }
  };
  const [subComponent, setSubComponent] = useState([]);
  const [activities, setActivities] = useState([]);
 

  let datae = `${selectedYear}/${
    selectedYear + 1 > 2025 ? 2025 : selectedYear + 1
  }`;

  // Sample list of counties
  const counties = ["Marsabit", "Baringo", "West_Pokot", "Turkana", "Garissa", "Isiolo" , "Samburu"];

  useEffect(() => {
    const fetchBaseline = async () => {
      await axios
        .get(`/api/components/subcomponent`)
        .then((response) => {
          setSubComponent(response?.data?.Sub_components);
        })
        .catch((error) => {});
    };

    fetchBaseline();
  }, []);

  return(
    <div>

      <div className="md:mt-4 mt-6 flex justify-between flex-col md:flex-row items-start gap-4">
        <div className="flex justify-start gap-4 items-start mt-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Sub Component
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 "
              value={comp}
              onChange={(e) => setComp(e.target.value)}
            >
              <option value="">[Select Component]</option>
              {subComponent?.map((component: any) => (
                <option key={component?.id} value={component?.id}>
                  {component?.component_name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex gap-4 items-center justify-center">
              <div>
                <label
                  htmlFor="year-select"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Year:{" "}
                </label>
                <input
                  id="year-input"
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  value={selectedYear}
                  onChange={handleYearChange}
                  min="2016"
                  max="2024"
                />
              </div>

              <div>
                <label
                  htmlFor="dependent-year-select"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dependent Year:{" "}
                </label>

                <input
                  id="dependent-year-input"
                  type="number"
                  className="bg-gray-50 border read-only:bg-green-600 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  value={selectedYear + 1 > 2025 ? 2025 : selectedYear + 1}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select County
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            >
              <option value="">[Select County]</option>
              {counties?.map((county, index) => (
                <option key={index} value={county}>
                  {county}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="my-4 w-full">
        <DataTable columns={columns} data={activities} />
      </div>
    </div>
  );
};

export default PageView;
