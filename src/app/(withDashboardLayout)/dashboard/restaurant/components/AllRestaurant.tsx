import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Plus } from "lucide-react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const AllRestaurants = ({
  setIsAdd,
}: {
  setIsAdd: (value: boolean) => void;
}) => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <div>
      <div className="flex justify-between pb-5 items-center">
        <h1 className="text-xl font-medium">Restaurant</h1>

        <button
          onClick={() => setIsAdd(true)}
          className="bg-[#F13300] flex items-center text-white py-1 px-2 font-medium rounded-full"
        >
          <Plus size={15} />
          Add Restaurant
        </button>
      </div>
      <Table className="border rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Review</TableHead>
            <TableHead>Loation</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell className="text-red-500">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Eye />
                <HiOutlineDotsVertical />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllRestaurants;
