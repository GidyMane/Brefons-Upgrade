"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/Redux/Store";
import { Skeleton } from "../ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/shadcn/ui/button";
import { columns } from "./columns";
import AddSubProject from "./AddSubProject";
import {
  toggleEditSubProject,
  toggleSubProject,
} from "@/Redux/Slices/SubProjectSlice";
import { DataTable } from "./DataTable";
import EditSubProject from "./EditSubProject";

const PageView = () => {
  const dispatch = useDispatch();
  const isAdd = useSelector((state: RootState) => state.subProject.isAdd);
  const isEdit = useSelector((state: RootState) => state.subProject.isEdit);
  const [comp, setComp] = useState("");
  const [component, setComponent] = useState<any[]>([]);
  const [county, setCounty] = useState<any[]>([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchComponents = async () => {
      await axios
        .get(`/api/countyapi/counties`)
        .then((response) => {
        
          setCounty(response?.data?.Counties);
        })
        .catch((error) => {
          
        });
    };

    fetchComponents();
  }, []);

  useEffect(() => {
    const fetchComponents = async () => {
      await axios
        .get(`/api/contracts/${comp}`)
        .then((response) => {
          setComponent(response?.data?.contracts);
        })
        .catch((error) => {});
    };

    fetchComponents();
  }, [comp]);

  return (
    <div>
      <h2 className="my-2 tracking-tight leading-tight text-balance text-xl md:text-2xl dark:text-gray-950 mx-4">
        {" "}
        Contract Register
      </h2>

      <div>
        {/* addsub project */}
        <Sheet
          open={isAdd}
          onOpenChange={() => {
            dispatch(toggleSubProject());
          }}
        >
          <SheetContent className="z-[110] bg-white text-gray-950 overflow-y-scroll">
            <SheetHeader>
              <SheetTitle>Add New Contract</SheetTitle>
              <SheetDescription>
                <AddSubProject />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Sheet
          open={isEdit}
          onOpenChange={() => {
            dispatch(toggleEditSubProject());
          }}
        >
          <SheetContent className="z-[110] bg-white text-gray-950 overflow-y-scroll">
            <SheetHeader>
              <SheetTitle>Update Contract</SheetTitle>
              <SheetDescription>
                <EditSubProject />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="rounded-md flex flex-col md:flex-row justify-start items-start gap-6 w-full">
        <div className="md:w-[500px] md:h-[300px] h-auto w-auto overflow-hidden">
          <Image
            src={"/contract.jpg"}
            width={300}
            height={300}
            alt="budget"
            placeholder="blur"
            blurDataURL="/contract.jpg"
            className="border rounded-md w-full"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="w-auto md:w-[300px] tracking-wide leading-wide text-balance text-muted-foreground">
            Ensure to pick a specific county from the dropdown below to view
            contracts registered under it
          </p>
          <div>
            <Button
              variant="outline"
              onClick={() => {
                dispatch(toggleSubProject());
              }}
              className="bg-green-600 mt-6 text-white tracking-tight leading-tight"
            >
              Register Contract
            </Button>
          </div>
        </div>
      </div>

      <div className="md:mt-4 mt-6 flex justify-between flex-col md:flex-row items-start gap-4">
        <div className="flex justify-start gap-4 items-start mt-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select County
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 "
              defaultValue={comp}
              onChange={(e) => setComp(e.target.value)}
            >
              <option value="">Select County</option>
              {county.map((component: {id:string; county:string}) => (
                <option key={component.id} value={component.id}>
                  {component.county}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="my-6 lg:w-[1000px] w-auto">
        <DataTable columns={columns} data={component} />
      </div>
    </div>
  );
};
export default PageView;
