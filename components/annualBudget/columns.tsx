import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../LogFrames/ColumnHeader";

// This type is used to define the shape of our data.
export type SubComponent ={
    id: string,
    code: string,
    activity: string,
    budget: number,
    date: string,
    sub_component_id: string,
    amount_spend:number
  }

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'Ksh',
    }).format(amount);
};

export const columns: ColumnDef<SubComponent>[] = [
    {
        accessorKey: "code",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Code" />
        ),
        cell: ({ row }) => (
            <p className="text-black tracking-tight text-balance leading-tight">
                {row.original.code}
            </p>
        )
    },
    {
        accessorKey: "activity",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Activity" />
        ),
        cell: ({ row }) => (
            <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
                {row.original.activity}
            </p>
        )
    },
    {
        accessorKey: "budget",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Amount Budgeted" />
        ),
        cell: ({ row }) => (
            <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
                {formatCurrency(row.original.budget)}
            </p>
        ),
    },
    
    {
        accessorKey: "amount_spend",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Amount Spent" />
        ),
        cell: ({ row }) => (
            <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
                {formatCurrency(row.original.amount_spend)}
            </p>
        ),
    }
];



// export const subComponents: SubComponent[] = [
//     {
//         id: 1,
//         code: "SC-001",
//         activity: "Design and Planning",
//         amountBudgeted: 1000.00
//         ,amountSpent: 1000.00
//     },
//     {
//         id: 2,
//         code: "SC-002",
//         activity: "Development",
//         amountBudgeted: 2000.00
//         ,amountSpent: 1000.00
//     },
//     {
//         id: 3,
//         code: "SC-003",
//         activity: "Testing",
//         amountBudgeted: 1500.00
//         ,amountSpent: 1000.00
//     },
//     {
//         id: 4,
//         code: "SC-004",
//         activity: "Deployment",
//         amountBudgeted: 500.00
//         ,amountSpent: 1000.00
//     },
//     {
//         id: 5,
//         code: "SC-005",
//         activity: "Maintenance",
//         amountBudgeted: 800.00
//         ,amountSpent: 1000.00
//     },
// ];

