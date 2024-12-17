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
    <div className="w-full flex flex-col items-start justify-center gap-10 p-10">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="w-full flex items-start justify-center gap-5  bg-white p-4"
        >
          <img
            src={blog.foto1}
            alt="Blog Görsel"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <div>
            {" "}
            <h2 className="text-xl font-semibold">{blog.baslik}</h2>
            <p className="text-gray-600 mb-2">Kategori: {blog.kategori}</p>
            <p className="text-gray-700">
              {blog.metin1.split(" ").slice(0, 20).join(" ")}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
