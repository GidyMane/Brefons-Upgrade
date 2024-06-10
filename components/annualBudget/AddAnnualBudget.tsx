"use client";
import { Button } from "@/shadcn/ui/button";
import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { generateCode } from "@/lib/utils";

const AddAnnualBudget = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(event.target.value);
    if (!isNaN(year)) {
      setSelectedYear(year);
    }
  };
  const [subComponent, setSubComponent] = useState([]);
  const [comp, setComp] = useState("");
  let datae = `${selectedYear}/${
    selectedYear + 1 > 2025 ? 2025 : selectedYear + 1
  }`;

  const [code, setCode] = useState(generateCode(datae.toString()));
  const [activity, setActivity] = useState("");
  const [amountBudgeted, setAmountBudgeted] = useState("");
  const [amount_spend, setAmount_spend] = useState("");

  useEffect(() => {
    const fetchBaseline = async () => {
      //   setLoading(true); // Show loader when fetching data
      await axios
        .get(`/api/components/subcomponent`)
        .then((response) => {
          setSubComponent(response?.data?.Sub_components);
        })
        .catch((error) => {});
      //   setLoading(false); // Hide loader after data is fetched
    };

    fetchBaseline();
  }, []);

  //  const p = generateCode(datae.toString())
  //  console.log("generated ",p)

  const addBugdet = async (e: any) => {
    e.preventDefault();
    if (
      code?.trim()?.length === 0 ||
      activity?.trim()?.length === 0 ||
      amountBudgeted?.length === 0 ||
      comp?.trim()?.length === 0||
      amount_spend?.length ===0
    ) {
    } else {
      await axios
        .post(`/api/activitybudget`, {
          code,
          activity,
          budget: amountBudgeted,
          date: datae,
          sub_component_id: comp,
          amount_spend: amount_spend
        })
        .then((response) => {})
        .catch((error) => {});
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-start items-center">
      <form className="grid md:grid-cols-2 gap-4 my-6">
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

        <div className="col-span-1 ">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Sub Component
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 "
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
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Amount Spend{" "}
          </label>

          <input
            type="number"
            value={amount_spend}
            onChange ={e => setAmount_spend(e.target.value)}
            className="bg-gray-50 border  text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
            
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Activity{" "}
          </label>

          <textarea
            id="message"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 "
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        <div className="col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Amount budgetted{" "}
          </label>

          <input
            type="number"
            value={amountBudgeted}
            onChange={(e) => setAmountBudgeted(e.target.value)}
            className="bg-gray-50 border text-gray-900 border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
          />
        </div>

        <div className="col-span-2">
          <Button
            className="w-full bg-green-600 text-white tracking-tight leading-tight"
            variant={"outline"}
            onClick={(e) => addBugdet(e)}
          >
            Add Budget
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAnnualBudget;
