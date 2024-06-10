import { DataTableColumnHeader } from "@/components/LogFrames/ColumnHeader";
import { ColumnDef } from "@tanstack/react-table";

export type SubProjectsUpdate = {
  id: string,
  type: null,
  remarks: string,
  total_paid: number,
  contract_no: string,
  variation_cost: number,
  contract_amount: number,
  contract_description: string,
  county:string
  end_date:string
}
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "Ksh",
    }).format(amount);
  };

  export const columns: ColumnDef<SubProjectsUpdate>[] = [
    // Existing columns...
    {
      accessorKey: "county",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="County" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {row.original.county}
        </p>
      ),
    },
    {
      accessorKey: "contract_description",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Contract Name" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {row.original.contract_description}
        </p>
      ),
    },
    {
      accessorKey: "contract_no",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Contract No" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {row.original.contract_no}
        </p>
      ),
    },
    {
      accessorKey: "contract_amount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Contract Cost" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {formatCurrency(row.original.contract_amount)}
        </p>
      ),
    },
    {
      accessorKey: "variation_cost",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Variation Cost" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {formatCurrency(row.original.variation_cost)}
        </p>
      ),
    },
    {
      accessorKey: "type",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Type" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {row.original.type}
        </p>
      ),
    },
    {
      accessorKey: "end_date",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Est End Date" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {new Date(row.original.end_date).toLocaleDateString()}
        </p>
      ),
    },
    {
      accessorKey: "total_paid",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total Paid" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {formatCurrency(row.original.total_paid)}
        </p>
      ),
    },
    {
      accessorKey: "remarks",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Remarks" />
      ),
      cell: ({ row }) => (
        <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
          {row.original.remarks}
        </p>
      ),
    },
  ];
  
  // Example dummy data
  // export const subprojectsupdate: SubProjectsUpdate[] = [
  //   {
  //     id: 1,
  //     remarks: "Project is on schedule and progressing as planned.",
  //     county: "Example County",
  //     contractName: "Project ABC",
  //     contractNo: "ABC-123",
  //     contractCost: 10000.0,
  //     variationCost: 2000.0,
  //     type: "Construction",
  //     estEndDate: "2023-12-31",
  //     totalPaid: 7000.0
  //   },
  //   {
  //     id: 2,
   
  //     remarks: "Development has been stalled due to unexpected technical issues.",
  //     county: "Another County",
  //     contractName: "Project XYZ",
  //     contractNo: "XYZ-456",
  //     contractCost: 15000.0,
  //     variationCost: 3000.0,
  //     type: "Software",
  //     estEndDate: "2023-11-30",
  //     totalPaid: 12000.0
  //   },
  //   {
  //     id: 3,
      
      
     
  //     county: "Test County",
  //     contractName: "Project Test",
  //     contractNo: "TEST-789",
  //     contractCost: 8000.0,
  //     variationCost: 1000.0,
  //     type: "Quality Assurance",
  //     estEndDate: "2023-10-15",
  //     totalPaid: 5000.0,
  //     remarks: "Testing is ongoing with no major issues reported.",
  //   }
  // ];
  
  