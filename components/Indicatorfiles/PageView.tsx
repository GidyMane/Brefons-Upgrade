"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DataTable } from "./IndicatorTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  indicatorTableSlice,
  toggleAddIndicatorTable,
  toggleEditIndicatorTable,
} from "../../Redux/Slices/IndicatorTableSlice";
import { indicatorSlice } from "../../Redux/Slices/IndicatorSlice";
import SubIndicatorView from "../subIndicatorfiles/SubIndicator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AddIndicator from "./AddIndicator";
import EditIndicator from "./EditIndicator";
import { columns } from "./columns";
import axios from "axios";

export type Component = {
  id: string;
  ComponentName: string;
  ComponentCode: string;
};

const IndicatorView = () => {
  const [component, setcomponent] = useState([]);
  const [logframe, setlogframe] = useState([]);
  const [comp, setComp] = useState("");
  const isSubIndicator = useSelector(
    (state: RootState) => state.indicatorSlice.isSub
  );
  const isAdd = useSelector((state: RootState) => state.indicatorSlice.isAdd);
  const isEdit = useSelector(
    (state: RootState) => state.indicatorSlice.isEditable
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getComponents = async () => {
      await axios
        .get(`/api/components`)
        .then((component) => {
          setcomponent(component?.data?.Components);
        })
        .catch((error) => {});
    };

    getComponents();
  }, []);

  useEffect(() => {
    const getLogframe = async () => {
      await axios
        .post(`/api/logframe`, {
          compnts: comp,
        })
        .then((component) => {
          setlogframe(component?.data?.logframe);
        })
        .catch((error) => {});
    };
    getLogframe();
  }, [comp]);
  return (
    <div className="mt-4 bg-white rounded-md p-4 flex flex-col gap-2">
      {!isSubIndicator ? (
        <>
          {/* <div className='my-4'>
                        <h2 className='tracking-tight text-xl leading-tight text-balance font-bold'>Manage Indicators</h2>
                        <p className='text-muted-foreground'>Component name: </p>
                    </div> */}
          <div className="flex flex-col gap-4 w-max-sm">
            {/* <p className='text-balance tracking-tight leading-tight text-muted-foreground'>
                            Select a component that you wish to display its indicators
                        </p> */}

            <div className=" my-4">
              <label
                htmlFor="HeadlineAct"
                className="block text-sm font-medium text-gray-900"
              >
                {" "}
                {/* Components{" "} */}
              </label>

              <select
                className="bg-gray-50 w-[300px] text-wrap border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block  p-2.5"
                value={comp}
              
                onChange={(e) => setComp(e.target.value)}
              >
                <option value="">Select component</option>
                {component?.map((cmpnt: Component) => (
                  <option key={cmpnt?.id} value={cmpnt?.id}>
                    {cmpnt?.ComponentName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="flex  gap-2 my-2 justify-between items-center">
              <h2 className="text-xl tracking-tight leading-tight text-balance mt-4">
                View indicators
              </h2>
              <Button
                variant="outline"
                className="hover:bg-green-800 bg-green-600 text-white"
                onClick={() => dispatch(toggleAddIndicatorTable())}
              >
                Add Indicator
              </Button>
            </div>

            {/* add indicator */}
            <Sheet
              open={isAdd}
              onOpenChange={() => {
                dispatch(toggleAddIndicatorTable());
              }}
            >
              <SheetContent className="z-[110] overflow-y-scroll bg-white text-gray-950">
                <SheetHeader>
                  <SheetTitle>Add your indicator</SheetTitle>
                  <SheetDescription>
                    <AddIndicator />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            {/* edit indicator */}
            <Sheet
              open={isEdit}
              onOpenChange={() => {
                dispatch(toggleEditIndicatorTable());
              }}
            >
              <SheetContent className="z-[110] bg-white text-gray-950">
                <SheetHeader>
                  <SheetTitle>Edit your indicator</SheetTitle>
                  <SheetDescription>
                    <EditIndicator />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            {/* table comes here */}

            <DataTable columns={columns} data={logframe} />
          </div>
        </>
      ) : (
        <>
          <SubIndicatorView />
        </>
      )}
    </div>
  );
};

export default IndicatorView;
