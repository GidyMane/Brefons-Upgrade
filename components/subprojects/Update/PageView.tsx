"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/Redux/Store";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/shadcn/ui/button";
import UpdateContract from "./UpdateContract";
import { columns } from "./columns";
import { UpdateDataTable } from "./UpdateTable";
import { toggleEditUpdateSubProject } from "@/Redux/Slices/SubProjectSlice";
import axios from "axios";

const UpdatePageView = () => {
  const dispatch = useDispatch();
  const isEdit:any = useSelector(
    (state: RootState) => state.subProject.isEditUpdate
  );
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const getContracts = async () => {
      await axios
        .get(`/api/contracts/updatescontracts`)
        .then((component) => {
          setContracts(component?.data?.contracts);
        })
              .catch((error) => {});
    };

    getContracts();
  }, []);

  return (
    <div>
      <h2 className="my-2 tracking-tight leading-tight text-balance text-xl md:text-2xl dark:text-gray-950 mx-4">
        {" "}
        Update Contract
      </h2>

      <div>
        <Sheet
          open={isEdit}
          // onOpenChange={() => {
          //   dispatch(toggleEditUpdateSubProject());
          // }}
        >
          <SheetContent className="z-[110] bg-white text-gray-950 overflow-y-scroll">
            <SheetHeader>
              <SheetTitle>Update Contract</SheetTitle>
              <SheetDescription>
                <UpdateContract />
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
          <p className="w-auto md:w-[500px] tracking-wide leading-wide text-balance text-muted-foreground">
            To update a contract , search for a contract by any column , slide
            to the right and hit the three dot caret options
          </p>
        </div>
      </div>

      <div className="my-6 lg:w-[1000px] w-auto">
        <UpdateDataTable columns={columns} data={contracts} />
      </div>
    </div>
  );
};
export default UpdatePageView;
