import { useState } from "react";
import { useGetBlogs } from "../hooks/useGetBlogs";
import { useNavigate } from "react-router-dom"; // Yönlendirme için import

export default function BlogList() {
  const { blogs, error, isLoading, isError } = useGetBlogs();
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa numarası
  const blogsPerPage = 5; // Sayfa başına gösterilecek blog sayısı
  const navigate = useNavigate(); // Yönlendirme hook'u

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    return (
      <div className="text-red-500">
        Hata: {error.message || "Bir hata oluştu, lütfen tekrar deneyin."}
      </div>
    );
  }

  // Sayfalama için veriyi bölme
  const indexOfLastBlog = currentPage * blogsPerPage; // Sayfadaki son blogun indeksi
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage; // Sayfadaki ilk blogun indeksi
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog); // Görüntülenecek bloglar

  // Sayfa değiştirme fonksiyonu
  const nextPage = () => {
    if (indexOfLastBlog < blogs.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-10 p-10">
      {currentBlogs.map((blog) => (
        <div
          key={blog.id}
          className="w-full h-full flex items-start justify-center gap-5 bg-white p-4 relative shadow-lg rounded-lg"
        >
          <img
            src={blog.foto1}
            alt="Blog Görsel"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <div className="absolute left-4 top-7 bg-white px-5 hover:px-8 duration-700 h-8 rounded-r-full flex items-center justify-start shadow-md">
            {blog.kategori}
          </div>

          <div className="w-full h-48 flex flex-col gap-5 items-start justify-around">
            <h2
              className="text-xl font-semibold hover:underline hover:cursor-pointer"
              onClick={() => navigate(`/blogs/${blog.id}`)} // Tıklandığında yönlendir
            >
              {blog.baslik}
            </h2>
            <p className="text-gray-700">
              {blog.metin1.split(" ").slice(0, 20).join(" ")}...
            </p>{" "}
            <div className="w-full flex items-center justify-end gap-2">
              <img
                src={blog.yazar_foto}
                alt={`${blog.yazar_adi} Fotoğraf`}
                className="w-5 h-5 object-cover rounded-full"
              />
              <span> {blog.yazar_adi}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Sayfalama Butonları */}
      <div className="flex justify-center gap-5 mt-5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous Page
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastBlog >= blogs.length}
          className={`px-4 py-2 rounded  ${
            indexOfLastBlog >= blogs.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
