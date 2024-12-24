import { useGetUsers } from "../hooks/useGetUsers";

export default function AdminUserPage() {
  const { users, error, isLoading } = useGetUsers();
  console.log("AdminUserPage - users:", users);

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
