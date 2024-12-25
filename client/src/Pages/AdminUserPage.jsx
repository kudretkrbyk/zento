import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../features/users/usersSlice";

export default function AdminUserPage() {
  const dispatch = useDispatch();
  const { users, error, isLoading } = useSelector((state) => state.users);
  console.log("AdminUserPage - users:", users);
  useEffect(() => {
    dispatch(fetchUsers()); // Blogları RTK üzerinden getir
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  if (!users) {
    return <div>No users found.</div>;
  }

  return (
    <div className="w-full p-10">
      <h1 className="text-2xl font-bold mb-4">Admin Users</h1>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <div className="flex items-center gap-4">
              <img
                src={user.fotograf}
                alt={user.isim}
                className="w-10 h-10 rounded-full"
              />
              <span>{user.isim}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
