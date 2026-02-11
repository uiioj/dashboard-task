import CardLayout from "./CardLayout";
import { FaCircle } from "react-icons/fa";

function Card9() {
  return (
    <>
      <CardLayout title="Last Project Progress">
        <div className="mx-3 mb-5">
          {/**اخلي البطاقة العاشرة نفس هذا */}
          <div className="flex flex-col">
            {/**الدائرة الزرقاء 1 */}
            <div className="flex items-center gap-4 font-semibold">
              <div
                className=" border-2 border-[#3994ff]
            flex items-center justify-center
             w-8 h-8 rounded-full"
              >
                <FaCircle className="text-[#3994ff] text-2xl" />
              </div>
              <div>Got The Project</div>
            </div>
            {/**الخط*/}
            <div className="border-l-2 p-2 border-[#3994ff] ml-3.5"></div>

            {/** 2الدائرة الزرقاء */}
            <div className="flex items-center gap-4 font-semibold">
              <div
                className=" border-2 border-[#3994ff]
            flex items-center justify-center
             w-8 h-8 rounded-full"
              >
                <FaCircle className="text-[#3994ff] text-2xl" />
              </div>
              <div>Started The Project</div>
            </div>

            {/**الخط*/}
            <div className="border-l-2 p-2 border-[#3994ff] ml-3.5"></div>

            {/** 3 الدائرة الزرقاء */}
            <div className="flex items-center gap-4 font-semibold">
              <div
                className=" border-2 border-[#3994ff]
            flex items-center justify-center
             w-8 h-8 rounded-full"
              >
                <FaCircle className="text-[#3994ff] text-2xl" />
              </div>
              <div>The Project About To Finish</div>
            </div>
            {/**الخط*/}
            <div className="border-l-2 p-2 border-[#3994ff] ml-3.5"></div>

            {/**4 الدائرة الزرقاء */}
            <div className="flex items-center gap-4 font-semibold">
              <div
                className=" border-2 border-[#3994ff]
            flex items-center justify-center
             w-8 h-8 rounded-full"
              >
                <FaCircle className="text-[#3994ff] text-2xl animate-pulse" />
              </div>
              <div>Test The Project</div>
            </div>
            {/**الخط*/}
            <div className="border-l-2 p-2 border-[#3994ff] ml-3.5"></div>

            {/** 5 الدائرة الزرقاء */}
            <div className="flex items-center gap-4 font-semibold">
              <div
                className=" border-2 border-[#3994ff]
            flex items-center justify-center
             w-8 h-8 rounded-full"
              ></div>
              <div>Finish The Project & Get Money</div>
            </div>
          </div>
        </div>
      </CardLayout>
    </>
  );
}

export default Card9;
