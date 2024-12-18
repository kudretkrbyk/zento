import { IoFlashSharp } from "react-icons/io5";
import { useGetCategories } from "../hooks/useGetCategories";

export default function TrendingTopics() {
  const { categories, error, isLoading, isError } = useGetCategories();
  if (isLoading) return <div>Loading...</div>;

  if (isError) {
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
            className=" w-full  flex flex-col items-center justify-center gap-1   "
          >
            <div className="w-20 h-20  rounded-full bg-none hover:bg-[#ff6480] duration-500  flex flex-col items-center justify-center gap-10">
              {" "}
              <img
                src={e.kategori_fotograf}
                alt="Blog Görsel"
                className="w-16 h-16 object-cover rounded-full   "
              />
            </div>

            <span>{e.kategori_adi} </span>
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
