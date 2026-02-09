import IndexButtons from "./IndexButtons";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegFile } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";

function Sidebar() {
  return (
    <>
      {/* big dev */}
      <div
        className=" w-25 md:w-50  min-h-screen bg-white shadow-2xl
       text-center p-5 "
      >
        {/* dev for "Elzero" */}
        <div className="font-bold text-xl">Elzero</div>

        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="border-t border-black border w-5 md:w-8"></div>
            <span className="text-black text-xl">●</span>
            <div className="border-t border-black border w-5 md:w-8"></div>
          </div>
        </div>
        {/* div for "Index buttons" */}
        <div className="mt-5 flex flex-col w-full">
          <IndexButtons text="Dashboard" icon={<MdOutlineDashboard />} />

          <IndexButtons text="Settings" icon={<IoMdSettings />} />

          <IndexButtons text="Profile" icon={<IoPersonOutline />} />

          <IndexButtons text="Projects" icon={<FaShareAlt />} />

          <IndexButtons text="Courses" icon={<FaGraduationCap />} />

          <IndexButtons text="Friends" icon={<BsPersonCircle />} />

          <IndexButtons text="Files" icon={<FaRegFile />} />

          <IndexButtons text="Plans" icon={<FaRegCreditCard />} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
