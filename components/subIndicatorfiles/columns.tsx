"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../LogFrames/ColumnHeader"

// Define the shape of a subindicator
export type SubIndicator = {
  id: string
  indicatorNumber: string
  outcomeIndicator: string
  indicatorCategory: string
  indicator: string
  unitOfMeasurement: string
  frequency: string
  responsibleAgency: string
}

// Define the columns for the subindicator table
export const subIndicatorColumns: ColumnDef<SubIndicator>[] = [
  {
    accessorKey: "indicatorNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SubIndicator Number" />
    ),
  },
  {
    accessorKey: "outcomeIndicator",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SubOutcome Indicator" />
    ),
  },
  {
    accessorKey: "indicatorCategory",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SubIndicator Category" />
    ),
  },
  {
    accessorKey: "indicator",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SubIndicator" />
    ),
  },
  {
    accessorKey: "unitOfMeasurement",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit of Measurement" />
    ),
  },
  {
    accessorKey: "frequency",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Frequency" />
    ),
  },
  {
    accessorKey: "responsibleAgency",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Responsible Agency" />
    ),
  }
]

// Sample data for the subindicators
export const subIndicators: SubIndicator[] = [
  {
    id: "1-1",
    indicatorNumber: "SUB-001-1",
    outcomeIndicator: "SubOutcome 1.1",
    indicatorCategory: "SubCategory A1",
    indicator: "SubIndicator A1.1",
    unitOfMeasurement: "Percentage",
    frequency: "Annual",
    responsibleAgency: "SubAgency 1.1",
  },
  {
    id: "1-2",
    indicatorNumber: "SUB-001-2",
    outcomeIndicator: "SubOutcome 1.2",
    indicatorCategory: "SubCategory A2",
    indicator: "SubIndicator A1.2",
    unitOfMeasurement: "Percentage",
    frequency: "Annual",
    responsibleAgency: "SubAgency 1.2",
  },
  {
    id: "2-1",
    indicatorNumber: "SUB-002-1",
    outcomeIndicator: "SubOutcome 2.1",
    indicatorCategory: "SubCategory B1",
    indicator: "SubIndicator B1.1",
    unitOfMeasurement: "Number",
    frequency: "Quarterly",
    responsibleAgency: "SubAgency 2.1",
  }
]
