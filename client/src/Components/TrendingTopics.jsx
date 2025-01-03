import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";

import { IoFlashSharp } from "react-icons/io5";

export default function TrendingTopics() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  ); // Redux state
  useEffect(() => {
    dispatch(fetchCategories()); // Blogları RTK üzerinden getir
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  if (error) {
    return (
      <div className="text-red-500">
        Hata: {error.message || "Bir hata oluştu, lütfen tekrar deneyin."}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-24 gap-5">
      <div className="flex items-center justify-center gap-2">
        <IoFlashSharp className="size-5 text-[#ff6480]" />
        <h2 className="title bordered medium textcenter">Trending Topics</h2>
      </div>
      <div className="bg-white w-3/4 h-30 rounded-full p-10 flex items-center justify-between gap-3">
        {categories.map((e, index) => (
          <div
            key={index}
            className=" w-full  flex flex-col items-center justify-center gap-1 relative   "
          >
            <div className="w-20 h-20  rounded-full bg-none hover:bg-[#ff6480] duration-500  flex flex-col items-center justify-center gap-10 ">
              {" "}
              <img
                src={e.kategori_fotograf}
                alt="Blog Görsel"
                className="w-16 h-16 object-cover rounded-full   "
              />
            </div>

            <span>{e.kategori_adi} </span>
            <span className="absolute top-0 left-20 bg-pink-300 rounded-full w-5 h-5 flex items-center justify-center text-white">
              {e.blog_count}{" "}
            </span>
          </div>
        ))}
        <div className="flex items-end justify-center gap-4">
          <span>or...</span>
          <button className="text-nowrap p-2 rounded">Explore All</button>
        </div>
      </div>
    </div>
  );
}
