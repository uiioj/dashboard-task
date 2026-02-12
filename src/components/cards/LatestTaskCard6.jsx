import CardLayout from "./CardLayout";
import CardItem from "../CardItem";
import { FaRegTrashCan } from "react-icons/fa6";

function Card6() {
  return (
    <>
      <CardLayout title="Latest Task" className="">
        <div>
          {/**الأولى */}
          <CardItem
            title="Record One New Video"
            descrption="Record Python Create Exe Project"
            bgColor="white"
            box={
              <button className="cursor-pointer hover:text-[#f44336] transition-colors duration-500">
                <FaRegTrashCan />
              </button>
            }
          ></CardItem>

          <div className="h-px bg-gray-200 mx-4"></div>

          {/**الثانية */}
          <CardItem
            title="Write Article"
            descrption="Write Low Level vs High Level Languages"
            bgColor="white"
            box={
              <button className="cursor-pointer hover:text-[#f44336] transition-colors duration-500">
                <FaRegTrashCan />
              </button>
            }
          ></CardItem>

          <div className="h-px bg-gray-200 mx-4"></div>

          {/**الثالثة */}
          <CardItem
            title="Finish Project"
            descrption="Publish Academy Programming Project"
            bgColor="white"
            box={
              <button className="cursor-pointer hover:text-[#f44336] transition-colors duration-500">
                <FaRegTrashCan />
              </button>
            }
          ></CardItem>

          <div className="h-px bg-gray-200 mx-4"></div>

          {/**الرابعة */}
          <CardItem
            title="Attend The Meeting"
            descrption="Attend The Project Business Analysis Meeting"
            bgColor="white"
            box={
              <button className="cursor-pointer hover:text-[#fcc7c3] transition-colors duration-500">
                <FaRegTrashCan />
              </button>
            }
            textStyle="line-through text-gray-400"
          ></CardItem>

          <div className="h-px bg-gray-200 mx-4"></div>

          {/**الخامسة */}
          <CardItem
            title="Write Article"
            descrption="Write Low Level vs High Level Languages"
            bgColor="white"
            box={
              <button className="cursor-pointer hover:text-[#f44336] transition-colors duration-500">
                <FaRegTrashCan />
              </button>
            }
          ></CardItem>
        </div>
      </CardLayout>
    </>
  );
}

export default Card6;
