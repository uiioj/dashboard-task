function IndexButtons({ text = "text", icon }) {
  return (
    <>
      <button
        className="hover:bg-[#f6f6f6] active:bg-gray-200 rounded-lg 
      px-5 py-1 my-2 gap-2 cursor-pointer
      flex items-center"
      >
        {icon}
        {text}
      </button>
    </>
  );
}

export default IndexButtons;
