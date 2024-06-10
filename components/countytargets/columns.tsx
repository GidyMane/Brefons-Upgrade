import { ColumnDef } from "@tanstack/react-table";
import { Indicator, SubComponent } from "./dataTypes"; // Assuming you have this file

export const columns: ColumnDef<Indicator>[] = [
    {
        accessorKey: "description",
        header: () => "Disaggregated By",
        cell: ({ row }) => (
            <div>{row.original.description}</div>
        ),
    },
    {
        accessorKey: "newTarget",
        header: () => "2023/2024 Target",
        cell: ({ row }) => (
            <input
                type="number"
                defaultValue={row.original.newTarget}
                className="border p-1"
            />
        ),
    },
    {
        accessorKey: "youthTarget",
        header: () => "Youth",
        cell: ({ row }) => (
            <input
                type="number"
                defaultValue={row.original.youthTarget}
                className="border p-1"
            />
        ),
    },
    {
        accessorKey: "remarks",
        header: () => "Target Brief/Remarks",
        cell: ({ row }) => (
            <input
                type="text"
                defaultValue={row.original.remarks}
                className="border p-1"
            />
        ),
    },
];
