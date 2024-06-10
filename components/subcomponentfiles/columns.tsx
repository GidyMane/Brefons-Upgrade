"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../LogFrames/ColumnHeader";

// Define the shape of a subindicator
export type subComponent = {
  id: string;
  component_id: string;
  component_name: string;
  type: string;
  component_code: string;
};

// Define the columns for the subindicator table
export const subComponentColumns: ColumnDef<subComponent>[] = [
  {
    accessorKey: "component_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Code" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.component_code}
      </p>
    ),
  },
  {
    accessorKey: "component_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sub Component Name" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.component_name}
      </p>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sub Component Category" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.type}
      </p>
    ),
  },
 
 
];


