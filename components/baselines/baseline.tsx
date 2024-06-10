"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from ".././loading";  // Import the Loader component
import { useSession } from "next-auth/react";

interface Indicator {
  name: string;
  types: {
    type: string;
    baseline: number;
    mtrTarget: number;
    finalTarget: number;
  }[];
}

interface SubComponent {
  name: string;
  indicators: Indicator[];
}

interface Component {
  name: string;
  subComponents: SubComponent[];
}

type NumericFields = "baseline" | "mtrTarget" | "finalTarget";

const Baseline: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [editedData, setEditedData] = useState<Component | null>(null);
  const [component, setComponent] = useState<any[]>([]);
  const [comp, setComp] = useState("");
  const [baselineEnteredValues, setbaselineEnteredValues] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);  // Loading state for fetch baseline
  const [componentsLoading, setComponentsLoading] = useState<boolean>(false);  // Loading state for fetch components

  const handleCancel = (subComponentIndex: number) => {
    if (selectedComponent) {
      setEditedData(JSON.parse(JSON.stringify(selectedComponent)));
    }
  };

  const {data:session}= useSession()

  useEffect(() => {
    console.log("sesioooon ",session?.user?.county)
    const fetchBaseline = async () => {
      setLoading(true);
      await axios
        .post(`/api/baseline/category`, {
          county_id: session?.user?.county,
          component_idss: comp,
        })
        .then((response) => {
          setbaselineEnteredValues(response?.data?.combinedSubComponent);
        })
        .catch((error) => {
         
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (comp) {
      fetchBaseline();
    }
  }, [comp]);

  useEffect(() => {
    const fetchComponents = async () => {
      setComponentsLoading(true);
      await axios
        .get(`/api/components`)
        .then((response) => {
          setComponent(response?.data?.Components);
        })
        .catch((error) => {
        
        })
        .finally(() => {
          setComponentsLoading(false);
        });
    };

    fetchComponents();
  }, []);

  const savedata = (e: any) => {
    e.preventDefault();
    
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
    let data = [...baselineEnteredValues];

    await axios
      .post(`/api/baseline/base`, {
        county_id: session?.user?.county ,
        baseline: data,
      })
      .then((response) => {
        // setbaselineEnteredValues(response?.data?.combinedSubComponent);
      })
      .catch((error) => {
      
      });
  };

  return (
    <div className="container mx-auto p-4 bg-green-50">
      <h1 className="text-xl font-bold mb-4">Project Indicators Baseline</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="component-select"
        >
          Select Component:
        </label>
        {componentsLoading ? (
          <Loader />
        ) : (
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
        )}
      </div>

      {loading ? (
        <Loader />
      ) : baselineEnteredValues?.length > 0 ? (
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
                        <thead className="bg-green-600 text-white">
                          <tr>
                            <th className="py-2 px-4 border-b">
                              Disaggregated By
                            </th>
                            <th className="py-2 px-4 border-b">Baseline</th>
                            <th className="py-2 px-4 border-b">MTR Target</th>
                            <th className="py-2 px-4 border-b">Final Target</th>
                          </tr>
                        </thead>
                        <tbody>
                          {indicator?.Sub_category?.map(
                            (type: any, typeIndex: any) => (
                              <tr key={typeIndex}>
                                <td className="py-2 px-4 border-b bg-gray-200">
                                  {type?.sub_category}
                                </td>
                                <td className="py-2 px-4 border-b">
                                  <input
                                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={type?.baseline}
                                    onChange={(e) =>
                                      handleChange(
                                        e,
                                        subComponentIndex,
                                        indicatorIndex,
                                        typeIndex
                                      )
                                    }
                                    name="baseline"
                                  />
                                </td>
                                <td className="py-2 px-4 border-b">
                                  <input
                                    type="number"
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
                                    type="number"
                                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={type?.final_target}
                                    onChange={(e) =>
                                      handleChange(
                                        e,
                                        subComponentIndex,
                                        indicatorIndex,
                                        typeIndex
                                      )
                                    }
                                    name="final_target"
                                  />
                                </td>
                              </tr>
                            )
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
        <div>No data available</div>
      )}
    </div>
  );
};

export default Baseline;
