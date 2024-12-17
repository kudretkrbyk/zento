import { useGetBlogs } from "../hooks/useGetBlogs";

export default function BlogList() {
  const { blogs, error, isLoading, isError } = useGetBlogs();

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    return (
      <div className="text-red-500">
        Hata: {error.message || "Bir hata oluştu, lütfen tekrar deneyin."}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Listesi</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="border-b mb-4 pb-4">
          <h2 className="text-xl font-semibold">{blog.baslik}</h2>
          <p className="text-gray-600 mb-2">Kategori: {blog.kategori}</p>
          <img
            src={blog.foto1}
            alt="Blog Görsel"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">{blog.metin1}</p>
        </div>
      ))}
    </div>
  );
}
