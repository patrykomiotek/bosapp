import { useRef, type ChangeEventHandler } from "react";
import type { ProductDto } from "../contracts/Product.dto";
import {
  flexRender,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  // Table,
  // TableHead,
  // TableHeader,
  // TableBody,
  // TableCell,
  // TableRow,
} from "@tanstack/react-table";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

type Props = {
  products: ProductDto[];
};

const columnHelper = createColumnHelper<ProductDto>();

// const columns = [
//   {
//     header: "ID",
//     accessorKey: "id",
//   },
//   {
//     header: "Name",
//     accessorKey: "fields.name", // row => row.fields.name
//   },
//   {
//     header: "Description",
//     accessorKey: "fields.description",
//   },
//   {
//     header: "Price",
//     accessorKey: "fields.price",
//   },
// ];

export const ProductsTable = ({ products }: Props) => {
  const columns = [
    //
    columnHelper.display({
      id: "select",
      cell: (props) => (
        <span>
          <input
            type="checkbox"
            value={props.row.id}
            onChange={checkboxHandler}
          />
        </span>
      ),
    }),
    columnHelper.accessor("id", {
      header: () => <span>ID</span>,
      // cell: (info) => info.getValue(),
      cell: ({ getValue }) => getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("fields.name", {
      header: () => <span>Product Name</span>,
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("fields.description", {
      header: () => <span>Description</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("fields.price", {
      header: () => <span>Price</span>,
      cell: (info) => `$${info.getValue()}`,
    }),
    columnHelper.display({
      id: "actions",
      // cell: (props) => <span>{JSON.stringify(props.row)}</span>,
      cell: (props) => <span>Actions</span>,
    }),
  ];

  const ids = useRef<string[]>([]);
  const table = useReactTable({
    columns,
    data: products,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 20, //
      },
    },
  });

  const checkboxHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    ids.current.push(value);
  };

  const rows = table.getRowModel()?.rows || [];

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  onClick={
                    header.column.getCanSort()
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  }
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getCanSort() && (
                    <div className="flex flex-col">
                      {header.column.getIsSorted() === "asc" ? (
                        <ChevronUpIcon className="h-3 w-3" />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <ChevronDownIcon className="h-3 w-3" />
                      ) : (
                        <div className="h-3 w-3" />
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((elem) => {
            return (
              <tr key={elem.id}>
                {elem.getVisibleCells().map((cell) => (
                  <td id={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <select
        className="h-8 w-[70px] rounded border border-zinc-300 bg-transparent px-3 py-0 text-sm dark:border-zinc-700"
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
