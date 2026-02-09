function CardLayout({ title, text, children }) {
  return (
    <>
      <div className="bg-white rounded-2xl flex flex-col m-5">
        {/**عنوان الكارد والنص اللي تحت */}
        <h1 className="p-2 m-2 font-bold text-2xl">
          {title}
          <div className="font-normal text-[#9a9a9a] text-sm mt-2">{text}</div>
        </h1>

        {/**المحتوى المختلف لكل كارد */}
        <div>{children}</div>
      </div>
    </>
  );
}

export default CardLayout;
