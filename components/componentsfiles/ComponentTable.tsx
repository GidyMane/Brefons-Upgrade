"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  ColumnFiltersState,
  SortingState,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DeleteIcon, EditIcon, EyeIcon, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { DataTablePagination } from "./Pagination";
import {
  setSubComponentView,
  toggleSubComponent,
} from "../../Redux/Slices/subcomponents";
import { toggleEditComponent } from "../../Redux/Slices/ComponentSlice";

import { useDispatch } from "react-redux";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  //states
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // redux state

  const dispatch = useDispatch();

  //   row actions
  const actions = [
    // ...
    {
      id: "actions",
      cell: ({ row }: { row: any }) => {
        const component = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="space-x-4 gap-2 cursor-pointer  flex"
                onClick={() => {
                  dispatch(setSubComponentView(row?.original?.id));
                }}
              >
                <EyeIcon className="w-4 h-4 text-green-500 cursor-pointer transition-all duration-175" />{" "}
                View Subcomponent
              </DropdownMenuItem>
              <DropdownMenuItem className="space-x-4 gap-2 cursor-pointer flex">
                <DeleteIcon className="w-4 h-4 text-red-600 cursor-pointer transition-all duration-175" />{" "}
                delete
              </DropdownMenuItem>
              <DropdownMenuItem
                className="space-x-4 gap-2 cursor-pointer  flex"
                onClick={() => {
                  dispatch(toggleEditComponent());
                }}
              >
                <EditIcon className="w-4 h-4 text-blue-300 cursor-pointer transition-all duration-175" />{" "}
                edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    // ...
  ];

  columns = [...columns, ...actions];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter All columns..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="p-2 font-lg max-w-[300px] shadow border border-green-600 bg-white text-gray-950  border-block"
          //   className="max-w-sm border-primary"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-green-600 rounded-md text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="text-white" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="text-white" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel()?.rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row?.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
