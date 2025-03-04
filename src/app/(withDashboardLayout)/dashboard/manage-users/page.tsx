"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader } from "lucide-react";
import { useAllUsersQuery } from "@/redux/features/auth/authApi";
import { TUser } from "@/types/common";
import TableRows from "./components/TableRow";

const ManageUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const { data: AllUsers } = useAllUsersQuery({
    searchQuery,
    selectedRole,
  });
  

 
  return (
    <div className="w-full mx-auto">
      <h1 className="font-medium">Welcome Back, User Name!</h1>
      <p className="pb-6">Manage Users</p>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded-md w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded-md w-full md:w-1/4"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </select>
      </div>
      <Table>
        <TableHeader className="font-medium bg-[#FA7E34] rounded-md">
          <TableRow>
            <TableHead className="w-[300px] text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Role</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {AllUsers?.result?.length > 0 ? (
            AllUsers?.result?.map((user: TUser) => (
              <TableRows key={user.id} user={user}></TableRows>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                <Loader size={80} className="animate-spin mx-auto  text-red-500" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsers;
