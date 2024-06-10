"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import Loader from "./loader"; // Import the Loader component
import { useSession } from "next-auth/react";

// Define the data structure
interface Activity {
  id: number;
  activity: string;
  totalBudget: number;
  q1Spent: number;
  q2Spent: number;
  q3Spent: number;
  q4Spent: number;
  totalSpent: number;
  remarks: string;
}

interface SubComponent {
  id: number;
  sub_component_name: string;
  activities: Activity[];
}

const AnnualActivitiesExpenditure: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [components, setComponents] = useState<any[]>([]);
  const [selectedComponent, setSelectedComponent] = useState("");
  const [expenditureData, setExpenditureData] = useState<SubComponent[]>([]);

  const [loading, setLoading] = useState<boolean>(false); // State to control loader visibility

  let datae = `${selectedYear}/${
    selectedYear + 1 > 2025 ? 2025 : selectedYear + 1
  }`;
  const { data: session } = useSession();

  useEffect(() => {
    const fetchComponents = async () => {
      setLoading(true); // Show loader when fetching data
      try {
        const response = await axios.get(`/api/components`);
        setComponents(response?.data?.Components);
      } catch (error) {
        console.error(error);
      }
      setLoading(false); // Hide loader after data is fetched
    };

    fetchComponents();
  }, []);

  useEffect(() => {
    const fetchExpenditureData = async () => {
      if (selectedComponent) {
        setLoading(true); // Show loader when fetching data

        await axios
          .post(`/api/annualexpenditure`, {
            county_id: session?.user?.county,
            component_idss: selectedComponent,
            date: datae,
          })
          .then((response) => {
            setExpenditureData(response?.data?.combinedSubComponent);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
          });

        // Hide loader after data is fetched
      }
    };

    fetchExpenditureData();
  }, [selectedComponent, selectedYear]);

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(event.target.value);
    if (!isNaN(year)) {
      setSelectedYear(year);
    }
  };

  const handleChange = (
    e: any,
    subComponentIndex: number,
    activityIndex: number
  ) => {
    e.preventDefault();

    let data = [...expenditureData];
    // data[subComponentIndex].activities[activityIndex][e.target.name] = e.target.value;
    // setExpenditureData(data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true); // Show loader when submitting data

    let data = [...expenditureData];

    try {
      const response = await axios.post(
        `/api/annualexpenditure/setexpenditure`,
        {
          county_id: session?.user?.county,
          expenditure: data,
          date: datae,
        }
      );
      // setExpenditureData(response?.data?.combinedSubComponent);
    } catch (error) {
      console.error(error);
    }
    setLoading(false); // Hide loader after data is submitted
  };

  return (
    <div className="container mx-auto p-4 bg-green-50 relative">
      {loading && <Loader />}
      <h1 className="text-xl font-bold mb-4">Annual Activities Expenditure</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="component-select"
        >
          Select Sub-Component:
        </label>
        <select
          id="component-select"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-green-100"
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
        >
          <option value="">[Select Sub-Component]</option>
          {components.map((component: any) => (
            <option key={component?.id} value={component?.id}>
              {component?.ComponentName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="year-input"
        >
          Select Year:
        </label>
        <input
          id="year-input"
          type="number"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-green-100"
          value={selectedYear}
          onChange={handleYearChange}
          min="2016"
          max="2024"
        />
      </div>

      {expenditureData.length > 0 ? (
        <div>
          {expenditureData.map((subComponent, subComponentIndex) => (
            <div key={subComponentIndex} className="mb-6">
              <h2 className="text-lg font-bold mb-2">
                Sub-component: {subComponent?.sub_component_name}
              </h2>
              <table className="min-w-full bg-white mb-4">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b bg-green-600">#</th>
                    <th className="py-2 px-4 border-b bg-green-600">ID</th>
                    <th className="py-2 px-4 border-b bg-green-600">
                      Activity
                    </th>
                    <th className="py-2 px-4 border-b bg-green-600">
                      Total Budget
                    </th>
                    <th className="py-2 px-4 border-b bg-green-600">
                      Q1 Spent
                    </th>
                    <th className="py-2 px-4 border-b bg-green-600">
                      Q2 Spent
                    </th>
                    <th className="py-2 px-4 border-b bg-green-600">
                      Q3 Spent
                    </th>
                    <th className="py-2 px-4 border-b bg-green-600">
                      Q4 Spent
                    </th>
                    <th className="py-2 px-4 border-b bg-green-600">
                      Total Spent
                    </th>
                    <th className="py-2 px-4 border-b bg-green-600">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {subComponent.activities.map((activity, activityIndex) => (
                    <tr key={activity.id}>
                      <td className="py-2 px-4 border-b bg-gray-200">
                        {activityIndex + 1}
                      </td>
                      <td className="py-2 px-4 border-b bg-gray-200">
                        {activity.id}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {activity.activity}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="number"
                          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={activity.totalBudget}
                          onChange={(e) =>
                            handleChange(e, subComponentIndex, activityIndex)
                          }
                          name="totalBudget"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="number"
                          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={activity.q1Spent}
                          onChange={(e) =>
                            handleChange(e, subComponentIndex, activityIndex)
                          }
                          name="q1Spent"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="number"
                          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={activity.q2Spent}
                          onChange={(e) =>
                            handleChange(e, subComponentIndex, activityIndex)
                          }
                          name="q2Spent"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="number"
                          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={activity.q3Spent}
                          onChange={(e) =>
                            handleChange(e, subComponentIndex, activityIndex)
                          }
                          name="q3Spent"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="number"
                          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={activity.q4Spent}
                          onChange={(e) =>
                            handleChange(e, subComponentIndex, activityIndex)
                          }
                          name="q4Spent"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="number"
                          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={activity.totalSpent}
                          onChange={(e) =>
                            handleChange(e, subComponentIndex, activityIndex)
                          }
                          name="totalSpent"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input
                          type="text"
                          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={activity.remarks}
                          onChange={(e) =>
                            handleChange(e, subComponentIndex, activityIndex)
                          }
                          name="remarks"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) =>
                    handleSubmit(e)
                  }
                >
                  Save Changes
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No data to display</p>
      )}
    </div>
  );
};

export default AnnualActivitiesExpenditure;
