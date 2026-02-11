import CardLayout from "./CardLayout";
import avatar from "../images/avatar.png";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";

function Card11() {
  return (
    <>
      <CardLayout title="Latest Post">
        <div>
          {/**div for avatar and name */}
          <div className="flex items-center gap-2 ">
            <img src={avatar} alt="avatar" className="h-10 w-10 mx-2" />
            <div>
              <div className="font-bold">Osama Elzero</div>
              <div className=" text-sm text-[#9d9fa0] font-semibold">
                About 3 Hours Ago
              </div>
            </div>
          </div>

          {/**الخط */}
          <div className="h-px bg-gray-200 m-4"></div>

          {/**div for paragragh */}
          <div className="font-semibold m-4">
            You can fool all of the people some of the time, and some of the
            people all of the time, but you can't fool all of the people all of
            the time.
          </div>

          {/**الخط */}
          <div className="h-px bg-gray-200 m-4"></div>

          {/**div for likes and comments */}
          <div className="flex justify-between m-4 text-[#9d9fa0] text-sm ">
            <div className="flex items-center justify-center gap-1">
              <FaRegHeart />
              <div>1.8K</div>
            </div>

            <div className="flex items-center justify-center gap-1">
              <FaRegComments />
              <div>500</div>
            </div>
          </div>
        </div>
      </CardLayout>
    </>
  );
}

export default Card11;
