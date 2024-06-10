"use client"

import { ColumnDef } from "@tanstack/react-table"
 
import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "../LogFrames/ColumnHeader";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Component = {
  id: string,
  ComponentName: string,
  ComponentCode: string
}


export const columns: ColumnDef<Component>[] = [
  
  {
    accessorKey: "ComponentName",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Component Name" />
      ),
      
    cell:({row})=>(
    
        <p className="text-black tracking-tight text-balance leading-tight">{row.original.ComponentName}</p>
      
    )
  },
  {
    accessorKey: "ComponentCode",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Component Code" />
      ),
      
    cell:({row})=>(
  
        <p className="text-black tracking-tight text-balance leading-tight">{row.original.ComponentCode}</p>
      )
    
  }
]



// export const components:any=[
//     {
//         id: "1",
//         componentname: "Component 1",
//         componentcode: "code 1"
//     },
//     {
//         id: "2",
//         componentname: "Component 2",
//         componentcode: "code 2"
//     }

// ]