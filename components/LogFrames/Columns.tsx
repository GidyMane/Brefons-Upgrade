"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./ColumnHeader"
 
import { Button } from "@/components/ui/button"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Component = {
  id: string;
  componentname: string;
  componentcode:string;
}


export const columns: ColumnDef<Component>[] = [
  
  {
    accessorKey: "componentname",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Component Name" />
      ),
  },
  {
    accessorKey: "componentcode",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Component Code" />
      ),
  }
]
