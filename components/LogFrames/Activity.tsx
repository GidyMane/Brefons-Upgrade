"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "./DataTable";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TableData from "./TableData";

interface ComponentsProp {
  id: "string";
  ComponentName: "string";
}

const Activity = ({
  data,
  filtere,
  setUnits,
  setAgencies,
  setPeriods,
  setComponent,
}: {
  data: any;
  filtere: any;
  setUnits: any;
  setAgencies: any;
  setPeriods: any;
  setComponent: any;
}) => {


  const dispatch = useDispatch();
  const [units, setUnit] = useState("");
  return (
    <div className=" space-y-6 w-full">
      <div>
        <p className="text-gray-500 tracking-tight leading-tight">Filter By:</p>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-2 items-start">
        <div className="flex justify-evenly gap-2 ">
          <div className="">
            <div>
              <select
                name="HeadlineAct"
                id="HeadlineAct"
                className="mt-1.5 p-1.5 bg-blue-100  w-full focus:ring-green-600 ring-green-600 rounded-lg border-gray-300 text-gray-950 sm:text-sm"
                onChange={e => setUnits(e.target.value)}
              >
                <option value="">All units</option>
                {filtere?.UnitOfMeasurement?.map((unit: string, idx:number) => (
                  <option value={unit} key={idx}>{unit}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1.5  bg-blue-100 p-1.5 w-full focus:ring-green-600 ring-green-600 rounded-lg border-gray-300 text-gray-950 sm:text-sm"
              onChange={e => setAgencies(e.target.value)}
            >
              <option value="">All agencies</option>
              {filtere?.Agency?.map((agencies: string, idx:number) => (
                <option value={agencies} key={idx}>{agencies}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1.5 p-1.5 bg-blue-100  w-full focus:ring-green-600 ring-green-600 rounded-lg border-gray-300 text-gray-950 sm:text-sm"
              onChange={e => setPeriods(e.target.value)}
            >
              <option value="">All Periods</option>
              {filtere?.Periods?.map((value: string, idx:number) => (
                <option value={value} key={idx}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="relative">
            <div>
              <select
                name="HeadlineAct"
                id="HeadlineAct"
                className="mt-1.5 p-1.5  w-full focus:ring-green-600 ring-green-600 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                onChange={e => setComponent(e.target.value)}
              >
                <option value="">Select Component</option>
                {filtere?.components?.map((value: ComponentsProp, idx:number) => (
                  <option value={value?.id} key={idx}>{value?.ComponentName}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 p-2 ">
        {/* <DataTable columns={columns} data={data} /> */}
        <TableData data={data}/>
      </div>
    </div>
  );
};

export default Activity;
