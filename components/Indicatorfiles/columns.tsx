"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "../LogFrames/ColumnHeader";
// Define the shape of a subindicator
export type Indicator = {
  sub_component_id: string;
  sub_component_code: string;
  indicator_id: string;
  sub_indicator_name: string;
  sub_indicator_id: string;
  sub_indicator_code: string;
  types: string;
  Category: string;
  county: any;
};

// This type is used to define the shape of our data.
// export type Indicator = {
//   component_name: string;
//   componentid: string;
//   componentdata: [SubIndicator];
// };

// Define the columns for the table
export const columns: ColumnDef<Indicator>[] = [
  {
    accessorKey: "sub_indicator_code",
    header: ({ column }) => (
       <DataTableColumnHeader column={column} title="Ind No." />
    ),
    cell:({row})=>(
  
        <p className="text-black tracking-tight text-balance leading-tight">{row.original.sub_indicator_code}</p>
    
    )
  },
  {
    accessorKey: "sub_component_code",
    header: ({ column }) => (
       <DataTableColumnHeader column={column} title="SubComp" />
    ),
    cell:({row})=>(
      
        <p className="text-black tracking-tight text-balance leading-tight">{row.original.sub_component_code}</p>
      
    )
  },
  {
    accessorKey: "sub_indicator_name",
    header: ({ column }) => (
       <DataTableColumnHeader column={column} title="IndicatorName" />
      
    ),
    cell:({row})=>(
    
        <p className="text-black tracking-tight text-balance leading-tight">{row.original.sub_indicator_name}</p>
      
    )
  },
  {
    accessorKey: "Category",
    header: ({ column }) => (
       <DataTableColumnHeader column={column} title="RptnCategory" />
    ),
    cell:({row})=>(
      
        <p className="text-black tracking-tight text-balance leading-tight">{row.original.Category}</p>
      
    )
  },
  {
    accessorKey: "county",
    header: ({ column }) => (
       <DataTableColumnHeader column={column} title="AppliesTo" />
    ),
    cell:({row})=>(
    
        <p className="text-black tracking-tight text-balance leading-tight">{row.original.county}</p>
    
    )
  },
  
  // {
  //   accessorKey: "unitOfMeasurement",
  //   header: ({ column }) => (
  //      <DataTableColumnHeader column={column} title="Unit of Measurement" />
  //   ),
  // },
  // {
  //   accessorKey: "frequency",
  //   header: ({ column }) => (
  //      <DataTableColumnHeader column={column} title="Frequency" />
  //   ),
  // },
  // {
  //   accessorKey: "responsibleAgency",
  //   header: ({ column }) => (
  //      <DataTableColumnHeader column={column} title="Responsible Agency" />
  //   ),
  // },
];

// Sample data for the indicators, including subindicators
// export const indicators: Indicator[] = [
//   {
//     id: "1",
//     indicatorNumber: "IND-001",
//     outcomeIndicator: "Outcome 1",
//     indicatorCategory: "Category A",
//     indicator: "Indicator A1",
//     unitOfMeasurement: "Percentage",
//     frequency: "Annual",
//     responsibleAgency: "Agency 1",
//     subIndicators: [
//       {
//         id: "1-1",
//         indicatorNumber: "SUB-001-1",
//         outcomeIndicator: "SubOutcome 1.1",
//         indicatorCategory: "SubCategory A1",
//         indicator: "SubIndicator A1.1",
//         unitOfMeasurement: "Percentage",
//         frequency: "Annual",
//         responsibleAgency: "SubAgency 1.1",
//       },
//       {
//         id: "1-2",
//         indicatorNumber: "SUB-001-2",
//         outcomeIndicator: "SubOutcome 1.2",
//         indicatorCategory: "SubCategory A2",
//         indicator: "SubIndicator A1.2",
//         unitOfMeasurement: "Percentage",
//         frequency: "Annual",
//         responsibleAgency: "SubAgency 1.2",
//       }
//     ]
//   },
//   {
//     id: "2",
//     indicatorNumber: "IND-002",
//     outcomeIndicator: "Outcome 2",
//     indicatorCategory: "Category B",
//     indicator: "Indicator B1",
//     unitOfMeasurement: "Number",
//     frequency: "Quarterly",
//     responsibleAgency: "Agency 2",
//     subIndicators: [
//       {
//         id: "2-1",
//         indicatorNumber: "SUB-002-1",
//         outcomeIndicator: "SubOutcome 2.1",
//         indicatorCategory: "SubCategory B1",
//         indicator: "SubIndicator B1.1",
//         unitOfMeasurement: "Number",
//         frequency: "Quarterly",
//         responsibleAgency: "SubAgency 2.1",
//       }
//     ]
//   }
// ]
