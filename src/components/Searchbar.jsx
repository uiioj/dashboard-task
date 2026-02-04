import { FaRegBell } from "react-icons/fa";

function Searchbar() {
  return (
    <>
      <div className="bg-white w-full p-2 flex justify-between">
        <input
          type="search"
          placeholder="🔍 Type A Keyword"
          className="border border-gray-300 rounded-md p-1 text-[10px]"
        />

        <div className="flex items-baseline gap-3">
          <img src="src/images/bell.png" className="h-5" />
          <img src="src/images/avatar.png" className="h-6" />
        </div>
      </div>
    </>
  );
}

export default Searchbar;
