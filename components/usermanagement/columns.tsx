import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { DataTableColumnHeader } from "../LogFrames/ColumnHeader";
import { formatDate } from "@/lib/UtilityFunctions";

// Define the type for user data
export type User = {
  username: string;
  user_email: string;
  disabled: boolean;
  user_group: string;
  station: string;
  User_level: string;
  last_login: string;
  id: string;
};

export const userColumns: ColumnDef<User>[] = [
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
  //   cell: ({ row }) => <p>{row.original.id}</p>,
  // },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User Name" />
    ),
    cell: ({ row }) => <p>{row.original.username}</p>,
  },
  {
    accessorKey: "user_email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <p>{row.original.user_email}</p>,
  },
  {
    accessorKey: "station",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Station" />
    ),
    cell: ({ row }) => <p>{row.original.station}</p>,
  },
  {
    accessorKey: "user_group",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User Group" />
    ),
    cell: ({ row }) => <p>{row.original.user_group}</p>,
  },
  {
    accessorKey: "User_level",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User Level" />
    ),
    cell: ({ row }) => <p>{row.original.User_level}</p>,
  },
  {
    accessorKey: "last_login",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Login" />
    ),
    cell: ({ row }) => <p>{formatDate(row.original.last_login)}</p>,
  },
];
