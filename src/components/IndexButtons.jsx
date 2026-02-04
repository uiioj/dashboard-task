function IndexButtons({ text = "text", icon }) {
  return (
    <>
      <button
        className="hover:bg-red-300 active:bg-gray-200 rounded-lg 
      px-3 py-1 my-2 gap-2 cursor-pointer
      flex items-center"
      >
        {icon}
        {text}
      </button>
    </>
  );
}

export default IndexButtons;
