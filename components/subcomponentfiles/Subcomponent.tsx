"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DataTable } from "./SubcomponentTable";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { subComponentColumns, subComponent } from "./columns";
import {
  setSubComponentView,
  toggleAddSubComponent,
  toggleSubComponent,
} from "@/Redux/Slices/subcomponents";
import EditSubComponent from "./EditSubComponent";
import axios from "axios";


const SubcomponentView = () => {
  const [subComponents, setSubComponents] = useState([]);
  const isEdit = useSelector((state: RootState) => state.subComponent.isEdit);
  const isComponentId = useSelector(
    (state: RootState) => state.subComponent.data
  );
  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(setSubComponentView({}));
  };

  useEffect(() => {
    const fetchComponents = async () => {
      await axios
        .get(`/api/components/subcomponent?component_id=${isComponentId}`)
        .then((response) => {
          setSubComponents(response?.data?.Sub_components);
        })
        .catch((error) => {});
    };

    fetchComponents();
  }, [isComponentId]);
  return (
    <div className="mt-4 bg-white rounded-md p-4 flex flex-col gap-2">
      {!isEdit ? (
        <>
          <div className="my-4 flex justify-between items-center">
            <h2 className="tracking-tight text-xl leading-tight text-balance font-bold">
              Manage SubIndicators
            </h2>
            <Button
              variant={"ghost"}
              className="hover:bg-green-400 hover:text-white text-sm tracking-tight leading-tight"
              onClick={handleBackClick}
            >
              Back to Component
            </Button>
          </div>
          <div>
            <div className="my-4 flex justify-between items-center mt-4">
              <h2 className="text-xl tracking-tight leading-tight text-balance">
                View Sub components
              </h2>
              <Button
                variant={"ghost"}
                className="bg-green-400 text-white text-sm tracking-tight leading-tight"
                onClick={() => dispatch(toggleAddSubComponent())}
              >
                Add Sub Component
              </Button>
            </div>
            {/* <h2 className="text-xl tracking-tight leading-tight text-balance mt-4">
              View Sub components
            </h2> */}
            <DataTable columns={subComponentColumns} data={subComponents} />
          </div>
        </>
      ) : (
        <Sheet
          open={isEdit}
          onOpenChange={() => {
            dispatch(toggleSubComponent());
          }}
        >
          <SheetContent className="z-[110] overflow-y-scroll">
            <SheetHeader>
              <SheetTitle>Edit your Subcomponent</SheetTitle>
              <SheetDescription>
                <EditSubComponent />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

export default SubcomponentView;
