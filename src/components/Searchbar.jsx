import { FaRegBell } from "react-icons/fa";

function Searchbar() {
  return (
    <>
      <div className="bg-white w-full p-2 flex justify-between">
        <input
          type="search"
          placeholder="🔍 Type A Keyword"
          className="border border-gray-300 rounded-lg p-0.5 py-2 m-1 mx-3 text-[15px]"
        />

        <div className="flex items-center gap-3">
          <img src="src/images/bell.png" className="h-7" />
          <img src="src/images/avatar.png" className="h-8" />
        </div>
      </div>
    </>
  );
}

export default Searchbar;
