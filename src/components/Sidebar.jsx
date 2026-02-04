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
        className=" w-[200px] h-screen bg-white shadow
       text-center p-5 "
      >
        {/* dev for "Elzero" */}
        <div className="font-bold">Elzero</div>

        <span className="font-bold flex justify-center">
          ــــــــــــــــــــــــ
        </span>
        {/* div for "Index buttons" */}
        <IndexButtons text="Dashboard" icon={<MdOutlineDashboard />} />
        <IndexButtons text="Settings" icon={<IoMdSettings />} />
        <IndexButtons text="Profile" icon={<IoPersonOutline />} />
        <IndexButtons text="Projects" icon={<FaShareAlt />} />
        <IndexButtons text="Courses" icon={<FaGraduationCap />} />
        <IndexButtons text="Friends" icon={<BsPersonCircle />} />
        <IndexButtons text="Files" icon={<FaRegFile />} />
        <IndexButtons text="Plans" icon={<FaRegCreditCard />} />
      </div>
    </>
  );
}

export default Sidebar;
