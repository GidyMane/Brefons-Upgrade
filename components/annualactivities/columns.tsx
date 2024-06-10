import { ColumnDef } from "@tanstack/react-table";
import EditableCell from "./editablecell";
import { SubComponentHeader, IndicatorHeader } from "./customheaders";

export type Indicator = {
  id: number;
  name: string;
  unit: string;
  target2023: number;
  q1a: number;
  q2a: number;
  q3a: number;
  q4a: number;
  total: number;
  youth: number;
  remarks: string;
  percentage: number;
  files: File | null; 
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
    accessorKey: "q1a",
    header: "Q1A",
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
    accessorKey: "q2a",
    header: "Q2A",
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
    accessorKey: "q3a",
    header: "Q3A",
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
    accessorKey: "q4a",
    header: "Q4A",
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
    accessorKey: "total",
    header: "Total",
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
    accessorKey: "percentage",
    header: "%",
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
  {
    accessorKey: "files",
    header: "Files",
    cell: ({ row, column, getValue }) => (
      <EditableCell
        value={getValue()}
        row={row}
        column={column}
        updateData={(rowIndex, columnId, value) => {
          // handle file upload logic
        }}
        type="file"
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
        q1a: 0,
        q2a: 0,
        q3a: 0,
        q4a: 0,
        total: 0,
        youth: 0,
        remarks: "",
        percentage: 0,
        files: null,
      },
      {
        id: 2,
        name: "Field Visits",
        unit: "Visits",
        target2023: 0,
        q1a: 0,
        q2a: 0,
        q3a: 0,
        q4a: 0,
        total: 0,
        youth: 0,
        remarks: "",
        percentage: 0,
        files: null,
      },
      {
        id: 3,
        name: "Supervision Visits",
        unit: "Visits",
        target2023: 0,
        q1a: 0,
        q2a: 0,
        q3a: 0,
        q4a: 0,
        total: 0,
        youth: 0,
        remarks: "",
        percentage: 0,
        files: null,
      },
    ],
  },
 
];
