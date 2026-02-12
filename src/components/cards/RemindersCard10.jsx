import CardLayout from "./CardLayout";
import { FaCircle } from "react-icons/fa";

function Card10() {
  return (
    <>
      <CardLayout title="Reminders">
        <div className="mx-3 mb-5">
          {/**الأول */}
          <div className="flex items-center mb-4">
            <FaCircle className="text-[#3994ff] text-lg" />
            {/**الخط*/}
            <div className="border-l-2 py-6 mr-3.5 border-[#3994ff] ml-3.5"></div>
            <div className="">
              <div className="font-bold">Check My Tasks List</div>
              <div className=" text-sm text-[#9d9fa0]">
                28/09/2022 - 12:00am
              </div>
            </div>
          </div>

          {/**الثاني */}
          <div className="flex items-center mb-4 ">
            <FaCircle className="text-[#22c55e] text-lg" />
            {/**الخط*/}
            <div className="border-l-2 py-6 mr-3.5 border-[#22c55e] ml-3.5"></div>
            <div className="">
              <div className="font-bold">Check My Projects</div>
              <div className=" text-sm text-[#9d9fa0]">
                26/10/2022 - 12:00am
              </div>
            </div>
          </div>

          {/**الثالث */}
          <div className="flex items-center mb-4 ">
            <FaCircle className="text-[#f59e0b] text-lg" />
            {/**الخط*/}
            <div className="border-l-2 py-6 mr-3.5 border-[#f59e0b] ml-3.5"></div>
            <div className="">
              <div className="font-bold">Call All My Clients</div>
              <div className=" text-sm text-[#9d9fa0]">
                05/11/2022 - 12:00am
              </div>
            </div>
          </div>

          {/**الرابع */}
          <div className="flex items-center mb-4 ">
            <FaCircle className="text-[#f44336] text-lg" />
            {/**الخط*/}
            <div className="border-l-2 py-6 mr-3.5 border-[#f44336] ml-3.5"></div>
            <div className="">
              <div className="font-bold">Finish The Development Workshop</div>
              <div className=" text-sm text-[#9d9fa0]">
                20/12/2022 - 12:00am
              </div>
            </div>
          </div>
        </div>
      </CardLayout>
    </>
  );
}

export default Card10;
