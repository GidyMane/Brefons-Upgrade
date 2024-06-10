"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import Loader from './loader'; // Import the Loader component
import { useSession } from "next-auth/react";

// Define the data structure
interface SubCategory {
  sub_category: string;
  baseline: number;
  mtr: number;
  final_target: number;
}

interface Indicator {
  sub_indicator_id: number;
  sub_indicator_name: string;
  Sub_category: SubCategory[];
}

interface SubComponent {
  id: number;
  sub_component_name: string;
  data: Indicator[];
}



const Pageview2: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [component, setComponent] = useState<any[]>([]);
  const [comp, setComp] = useState("");
  const [baselineEnteredValues, setbaselineEnteredValues] = useState<any[]>([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [editedData, setEditedData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true); // State to control loader visibility

  let datae = `${selectedYear}/${selectedYear + 1 > 2025 ? 2025 : selectedYear + 1}`
  const {data:session} = useSession()

  useEffect(() => {
    const fetchBaseline = async () => {
      setLoading(true); // Show loader when fetching data
      await axios
        .post(`/api/annualtarget`, {
          county_id: session?.user?.county ,
          component_idss: comp,
          date:datae
        })
        .then((response) => {
       
          setbaselineEnteredValues(response?.data?.combinedSubComponent);
        })
        .catch((error) => {
         
        });
      setLoading(false); // Hide loader after data is fetched
    };

    fetchBaseline();
  }, [comp,selectedYear]);

  useEffect(() => {
    const fetchComponents = async () => {
      setLoading(true); // Show loader when fetching data
      await axios
        .get(`/api/components`)
        .then((response) => {
          setComponent(response?.data?.Components);
        })
        .catch((error) => {
         
        });
      setLoading(false); // Hide loader after data is fetched
    };

    fetchComponents();
  }, []);

  const handleCancel = (subComponentIndex: number) => {
    if (selectedComponent) {
      setEditedData(JSON.parse(JSON.stringify(selectedComponent)));
    }
  };

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(event.target.value);
    if (!isNaN(year)) {
      setSelectedYear(year);
    }
  };

 
  const handleChange = (
    e: any,
    topGlobalIndex: any,
    globalIndex: any,
    localIndex: any
  ) => {
    e.preventDefault();

    let data = [...baselineEnteredValues];
    data[topGlobalIndex].data[globalIndex].Sub_category[localIndex][
      e.target.name
    ] = e.target.value;
    setbaselineEnteredValues(data);
    
  };

  const handleSubmit = async (
    e: any,
    topGlobalIndex: any,
    globalIndex: any
  ) => {
    e.preventDefault();
    setLoading(true); // Show loader when submitting data
    let data = [...baselineEnteredValues];

    await axios
      .post(`/api/annualtarget/settargets`, {
        county_id: session?.user?.county ,
        baseline: data,
        date:datae
      })
      .then((response) => {
        // setBaseline(response?.data?.combinedSubComponent);
        // setbaselineEnteredValues(response?.data?.combinedSubComponent);
      })
      .catch((error) => {
        
      });
    setLoading(false); // Hide loader after data is submitted
  };

  return (
    <div className="container mx-auto p-4 bg-green-50 relative">
      {loading && <Loader />}
      <h1 className="text-xl font-bold mb-4">Annual Targets</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="component-select"
        >
          Select Component:
        </label>
        <select
          id="component-select"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-green-100"
          value={comp}
          onChange={(e) => setComp(e.target.value)}
        >
          <option value="">[Select Component]</option>
          {component.map((component: any) => (
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
              
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="dependent-year-input"
                      >
                        Dependent Year:
                      </label>
                      <input
                        id="dependent-year-input"
                        type="number"
                        className="shadow border read-only:bg-green-600 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                        value={selectedYear + 1 > 2025 ? 2025 : selectedYear + 1}
                        readOnly
                      />
                    </div>
              
                    {baselineEnteredValues?.length > 0 ? (
                      <div>
                        {baselineEnteredValues?.map(
                          (subComponent: any, subComponentIndex: any) => (
                            <div key={subComponentIndex} className="mb-6">
                              <h2 className="text-lg font-bold mb-2">
                                Sub-component: {subComponent?.sub_component_name}
                              </h2>
                              {subComponent?.data?.map(
                                (indicator: any, indicatorIndex: any) => (
                                  <div key={indicator?.sub_indicator_id} className="mb-4">
                                    <h3 className="font-semibold mb-2">
                                      Indicator: {indicator?.sub_indicator_name}
                                    </h3>
                                    <table className="min-w-full bg-white mb-4">
                                      <thead>
                                        <tr>
                                          <th className="py-2 px-4 border-b bg-green-600" >
                                            Disaggregated By
                                          </th>
                                          <th className="py-2 px-4 border-b bg-green-600">{`${datae} Target`}</th>
                                          <th className="py-2 px-4 border-b bg-green-600">Youth</th>
                                          <th className="py-2 px-4 border-b bg-green-600">Remarks</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {indicator?.Sub_category?.map(
                                          (type: any, typeIndex: any) => {
                                            // addFields();
                                            return (
                                              <tr key={typeIndex}>
                                                <td className="py-2 px-4 border-b bg-gray-200">
                                                  {type?.sub_category}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                  <input
                                                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={type?.target}
                                                    onChange={(e) =>
                                                      handleChange(
                                                        e,
                                                        subComponentIndex,
                                                        indicatorIndex,
                                                        typeIndex
                                                      )
                                                    }
                                                    name="target"
                                                  />
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                  <input
                                                    type="number"
                                                    disabled
                                                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={type?.mtr}
                                                    onChange={(e) =>
                                                      handleChange(
                                                        e,
                                                        subComponentIndex,
                                                        indicatorIndex,
                                                        typeIndex
                                                      )
                                                    }
                                                    name="mtr"
                                                  />
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                  <input
                                                    
                                                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={type?.remarks}
                                                    onChange={(e) =>
                                                      handleChange(
                                                        e,
                                                        subComponentIndex,
                                                        indicatorIndex,
                                                        typeIndex
                                                      )
                                                    }
                                                    name="remarks"
                                                  />
                                                </td>
                                              </tr>
                                            );
                                          }
                                        )}
                                      </tbody>
                                    </table>
                                    <div className="flex justify-end space-x-2">
                                      <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={(e) =>
                                          handleSubmit(e, subComponentIndex, indicatorIndex)
                                        }
                                      >
                                        Save Changes
                                      </button>
                                      <button
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleCancel(subComponentIndex)}
                                      >
                                        Cancel Changes
                                      </button>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <p className="text-gray-500">No data to display</p>
                    )}
                  </div>
                );
              };
              
              export default Pageview2;
              
