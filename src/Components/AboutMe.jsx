export default function AboutMe() {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="text w-full flex flex-col items-start justify-center gap-4">
        <h1 className="title ularge fw-medium">
          Hey, I’m&nbsp;
          <span className="text-[#ff6480] font-bold">Jonathan Doe</span>
          &nbsp;👋
        </h1>
        <p>
          I’m a&nbsp;<strong>design technologist</strong>&nbsp;in Atlanta. I
          like working on the front-end of the web. This is my site,&nbsp;
          <strong>Zento</strong>&nbsp;where I blog, share and write about my
          personal projects..
        </p>
        <div className="w-full flex flex-col gap-2">
          <p>Let's Connect</p>
          <div className="bg-white border rounded flex items-center justify-between gap-2 w-full  p-1 h-10">
            <input className=""></input>
            <button className="w-2/12">Get started</button>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
}
