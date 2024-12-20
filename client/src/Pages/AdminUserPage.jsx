import { useGetUsers } from "../hooks/useGetUsers";
import { useDeleteUser } from "../hooks/useDeleteUser";
import { useAuth } from "../context/AuthContext";

export default function AdminUserPage() {
  const { user } = useAuth(); // Admin kontrolü
  const { users, isLoading, error } = useGetUsers(); // Kullanıcıları getir
  const {
    deleteUser,
    isLoading: deleting,
    error: deleteError,
  } = useDeleteUser(); // Kullanıcıyı sil

  if (!user || user.role !== "admin") {
    return <div>Unauthorized Access</div>; // Sadece admin erişebilir
  }

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {deleteError && <p className="text-red-500">{deleteError}</p>}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Photo</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 p-2">{user.isim}</td>
              <td className="border border-gray-300 p-2">
                <img
                  src={user.fotograf}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  disabled={deleting}
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
