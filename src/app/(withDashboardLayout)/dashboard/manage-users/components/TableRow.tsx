import { TableCell, TableRow } from "@/components/ui/table";
import { useUpdateUserStatusMutation } from "@/redux/features/auth/authApi";
import { TUser } from "@/types/common";
import { Key, Loader, Trash } from "lucide-react";
import { useState } from "react";

const TableRows = ({ user }: { user: TUser }) => {
  const [updateUser] = useUpdateUserStatusMutation();
  const [loadingUsers, setLoadingUsers] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleUpdateUser = async (userId: string) => {
    setLoadingUsers((prev) => ({ ...prev, [userId]: true }));
    try {
      await updateUser(userId).unwrap();
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoadingUsers((prev) => ({ ...prev, [userId]: false }));
    }
  };
  return (
    <TableRow key={user.id}>
      <TableCell>{user.userName}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell
        className={user.status === "ACTIVE" ? "text-green-600" : "text-red-600"}
      >
        {user.status}
      </TableCell>
      <TableCell className="flex items-center gap-3">
        {loadingUsers[user.id] ? (
          <Loader className="animate-spin text-gray-500" />
        ) : user.status === "ACTIVE" ? (
          <Trash
            onClick={() => handleUpdateUser(user.id)}
            className="cursor-pointer text-red-500"
          />
        ) : (
          <Key
            onClick={() => handleUpdateUser(user.id)}
            className="cursor-pointer text-green-500"
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default TableRows;
