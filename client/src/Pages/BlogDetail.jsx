import { useLocation } from "react-router-dom";

export default function BlogDetail() {
  const location = useLocation();
  const blog = location.state; // Blog bilgileri state üzerinden alındı

  if (!blog) return <div>Blog bulunamadı!</div>;

  return (
    <div className=" w-full h-full flex items-start justify-center gap-16 p-20">
      <div className="w-4/12 h-full flex flex-col items-start gap-5 text-nowrap sticky top-0 ">
        {" "}
        <div>
          <span className="text-xl font-bold">Article Information</span>
        </div>
        <div className="w-full flex flex-col bg-white gap-5 p-10 rounded shadow-lg">
          <div>
            <span className="font-bold">Category:</span>
            <span>{blog.kategori}</span>
          </div>
          <div>
            <span className="font-bold">Updated</span>
            <span>{blog.created_at} </span>
          </div>
          <div>
            <span className="font-bold">Auhtor:</span>
            <span>{blog.yazar_adi} </span>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="w-8/12 flex flex-col gap-5">
        {" "}
        <div className="w-full h-full bg-white flex flex-col gap-10 p-10 shadow-xl">
          <span className="text-center font-bold text-2xl">{blog.baslik} </span>
          <img
            className="w-full h-96 object-cover object-center rounded shadow "
            src={blog.foto1}
          ></img>
          <p>{blog.metin1} </p>
          <img
            className="w-full h-96 object-cover object-center rounded shadow "
            src={blog.foto2}
          ></img>
          <p>{blog.metin2} </p>
        </div>
        <div className="flex flex-col">
          <span>Comments</span>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
