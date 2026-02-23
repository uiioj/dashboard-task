import { IoMenu } from "react-icons/io5";
import bell from "../images/bell.png";
import avatar from "../images/avatar.png";

function Searchbar({ toggleSidebar }) {
  return (
    <>
      <div className="bg-white w-full p-2 flex justify-between ">
        <div className="flex items-center">
          <IoMenu
            className="md:hidden cursor-pointer text-2xl"
            onClick={toggleSidebar}
          />

          <input
            type="search"
            placeholder="🔍 Type A Keyword"
            className="border border-gray-300 rounded-lg p-0.5 py-2 m-1 mx-3 text-[15px]"
          />
        </div>

        <div className="flex items-center gap-3">
          <img src={bell} className="h-7" />
          <img src={avatar} className="h-8" />
        </div>
      </div>
    </>
  );
}

export default Searchbar;
