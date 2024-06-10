import { ColumnDef } from "@tanstack/react-table";
import EditableCell from "./editablecell";
import { SubComponentHeader, IndicatorHeader } from "./customheaders";

export type Indicator = {
  id: number;
  name: string;
  unit: string;
  target2023: number;
  youth: number;
  target: number;
  remarks: string;
};

export type SubComponent = {
  id: number;
  name: string;
  indicators: Indicator[];
};

export const columns: ColumnDef<Indicator>[] = [
  {
    accessorKey: "name",
    header: "Indicator",
    cell: ({ row }) => <IndicatorHeader name={row.original.name} />,
  },
  {
    accessorKey: "unit",
    header: "Unit",
    cell: ({ row }) => <p>{row.original.unit}</p>,
  },
  {
    accessorKey: "target2023",
    header: "2023/2024 Target",
    cell: ({ row, column, getValue }) => (
      <EditableCell
        value={getValue()}
        row={row}
        column={column}
        updateData={(rowIndex, columnId, value) => {
          // handle update logic
        }}
      />
    ),
  },
  {
    accessorKey: "youth",
    header: "Youth",
    cell: ({ row, column, getValue }) => (
      <EditableCell
        value={getValue()}
        row={row}
        column={column}
        updateData={(rowIndex, columnId, value) => {
          // handle update logic
        }}
      />
    ),
  },
  {
    accessorKey: "target",
    header: "Target",
    cell: ({ row, column, getValue }) => (
      <EditableCell
        value={getValue()}
        row={row}
        column={column}
        updateData={(rowIndex, columnId, value) => {
          // handle update logic
        }}
      />
    ),
  },
  {
    accessorKey: "remarks",
    header: "Brief/Remarks",
    cell: ({ row, column, getValue }) => (
      <EditableCell
        value={getValue()}
        row={row}
        column={column}
        updateData={(rowIndex, columnId, value) => {
          // handle update logic
        }}
      />
    ),
  },
];

export const subComponents: SubComponent[] = [
  {
    id: 1,
    name: "Sub-component: 4.1: Project Management",
    indicators: [
      {
        id: 1,
        name: "Indicator: 6.1.1c: No. of activities by PSC",
        unit: "Meetings",
        target2023: 0,
        youth: 0,
        target: 0,
        remarks: "",
      },
      {
        id: 2,
        name: "Field Visits",
        unit: "Visits",
        target2023: 0,
        youth: 0,
        target: 0,
        remarks: "",
      },
      {
        id: 3,
        name: "Supervision Visits",
        unit: "Visits",
        target2023: 0,
        youth: 0,
        target: 0,
        remarks: "",
      },
    ],
  },
  // Add more sub-components and their indicators as needed
];
