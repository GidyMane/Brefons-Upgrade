"use client";
import React from "react";
import { DataTable } from "./ComponentTable";
import { columns } from "./columns";

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
import {
  toggleAddComponent,
  toggleEditComponent,
} from "../../Redux/Slices/ComponentSlice";
import EditComponent from "./EditComponent";
import { Button } from "../ui/button";
import AddComponent from "./Addcomponent";
import SubcomponentView from "../subcomponentfiles/Subcomponent";



const PageView = ({ data }: { data: any }) => {
  // retirev state
  const isOpen = useSelector((state: RootState) => state.components.isOpen);
  const isAdd = useSelector((state: RootState) => state.components.isAdd);
  const isView = useSelector((state: RootState) => state.subComponent.isView);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 bg-white  rounded-md p-4">
      {!isView && (
        <div className="flex justify-end items-end">
        <Button
          variant="outline"
          onClick={() => dispatch(toggleAddComponent())}
          className="hover:bg-green-800  bg-green-600 text-white"
        >
          Add Component
        </Button>
      </div>
      )}
      

      {/* edit component */}
      <Sheet
        open={isOpen}
        onOpenChange={() => {
          dispatch(toggleEditComponent());
        }}
      >
        <SheetContent className="z-[110] bg-white text-gray-950">
          <SheetHeader>
            <SheetTitle>Update your component</SheetTitle>
            <SheetDescription>
              <EditComponent />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* addcomponent */}
      <Sheet
        open={isAdd}
        onOpenChange={() => {
          dispatch(toggleAddComponent());
        }}
      >
        <SheetContent className="z-[110] bg-white text-gray-950">
          <SheetHeader>
            <SheetTitle>Add your component</SheetTitle>
            <SheetDescription>
              <AddComponent />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {isView ? (
        <SubcomponentView />
      ) : (
        <DataTable columns={columns} data={data} />

      )}

    </div>
  );
};

export default PageView;
