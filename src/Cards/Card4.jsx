import CardLayout from "./CardLayout";
import { FaRegListAlt } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiChatDeleteLine } from "react-icons/ri";

function Card4() {
  return (
    <>
      <CardLayout
        title="Tickets Statistics"
        text="Everything About Support Tickets"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6 mx-3">
          {/**الأول */}
          <div className="border border-gray-300 rounded-xl flex flex-col items-center p-5 m-2">
            <FaRegListAlt className="text-[#f59e0b]  text-3xl m-1" />
            <div className="font-bold m-1 text-2xl">2500</div>
            <div className="text-[#9a9a9a] m-1 text-sm">Total</div>
          </div>

          {/**الثاني */}
          <div className="border border-gray-300 rounded-xl flex flex-col items-center p-5 m-2">
            <BiLoaderCircle className="text-[#0075ff]  text-3xl m-1" />
            <div className="font-bold m-1 text-2xl">500</div>
            <div className="text-[#9a9a9a] m-1 text-sm">Pending</div>
          </div>

          {/**الثالث */}
          <div className="border border-gray-300 rounded-xl flex flex-col items-center p-5 m-2">
            <FaRegCheckCircle className="text-[#22c55e]  text-3xl m-1" />
            <div className="font-bold m-1 text-2xl">1900</div>
            <div className="text-[#9a9a9a] m-1 text-sm">Closed</div>
          </div>

          {/**الرابع */}

          <div className="border border-gray-300 rounded-xl flex flex-col items-center p-5 m-2">
            <RiChatDeleteLine className="text-[#f44336]   text-3xl m-1" />
            <div className="font-bold m-1 text-2xl">100</div>
            <div className="text-[#9a9a9a] m-1 text-sm">Deleted</div>
          </div>
        </div>
      </CardLayout>
    </>
  );
}

export default Card4;
