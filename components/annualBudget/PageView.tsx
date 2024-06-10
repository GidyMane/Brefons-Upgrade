"use client";
import { toggleAdd, toggleImage } from "@/Redux/Slices/ImageSlice";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/Redux/Store";
import { Skeleton } from "../ui/skeleton";
import { DataTable } from "../componentsfiles/ComponentTable";
import { columns } from "./columns";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AddAnnualBudget from "./AddAnnualBudget";
import { Button } from "@/shadcn/ui/button";
import axios from "axios";

const PageView = () => {
  const dispatch = useDispatch();
  const isAdd = useSelector((state: RootState) => state.imageSlice.isAdd);
  const [comp, setComp] = useState("");
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(event.target.value);
    if (!isNaN(year)) {
      setSelectedYear(year);
    }
  };
  const [subComponent, setSubComponent] = useState<any[]>([]);
  const [activities, setActivities] = useState([]);
  const [totalBudget, setTotalBudget] = useState("");

  let datae = `${selectedYear}/${
    selectedYear + 1 > 2025 ? 2025 : selectedYear + 1
  }`;

  useEffect(() => {
    const fetchBaseline = async () => {
      try {
        const response = await axios.get(`/api/components/subcomponent`);
        setSubComponent(response?.data?.Sub_components || []);
      } catch (error) {
        console.error("Error fetching subcomponents:", error);
      }
    };

    fetchBaseline();
  }, []);

  useEffect(() => {
    const fetchBaseline = async () => {
      try {
        const response = await axios.get(
          `/api/activitybudget?sub_component_id=${comp}&date=${datae}`
        );
        setActivities(response?.data?.Activity_budget || []);
        setTotalBudget(response?.data?.totalBudget || "0");
      } catch (error) {
        console.error("Error fetching activity budget:", error);
      }
    };

    fetchBaseline();
  }, [comp, selectedYear]);

  const formatCurrency = (amount: number) => {
    if (amount) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "Ksh",
      }).format(amount);
    } else {
      return `KSH: 0`;
    }
  };

  return (
    <div>
      <div>
        <Sheet
          open={isAdd}
          onOpenChange={() => {
            dispatch(toggleAdd());
          }}
        >
          <SheetContent className="z-[110] bg-white text-gray-950">
            <SheetHeader>
              <SheetTitle>Add your annual budget</SheetTitle>
              <SheetDescription>
                <AddAnnualBudget />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="rounded-md flex flex-col md:flex-row justify-start items-start gap-6 w-full">
        <div className="md:w-[500px] w-auto">
          <Image
            src={"/bugdet.jpg"}
            width={300}
            height={300}
            alt="budget"
            placeholder="blur"
            blurDataURL="/bugdet.jpg"
            className="border rounded-md"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground font-semibold text-xl tracking-tight leading-snug">
            Sum amount budgeted for
          </p>
          <p className="text-black my-2 text-balance text-xl">
            <span className="text-muted-foreground">Duration: </span> {datae}
          </p>
          <p className="text-green-600 text-xl text-balance tracking-wide leading-3">
            {formatCurrency(parseFloat(totalBudget))}
          </p>
          <div>
            <Button
              variant="outline"
              onClick={() => {
                dispatch(toggleAdd());
              }}
              className="bg-green-600 mt-6 text-white tracking-tight leading-tight"
            >
              Add Annual Budget
            </Button>
          </div>
        </div>
      </div>

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
        </div>
      </div>

      <div className="my-4 w-full">
        <DataTable columns={columns} data={activities} />
      </div>
    </div>
  );
};

export default PageView;
