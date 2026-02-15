import avatar from "../../images/avatar.png";
import welcome from "../../images/welcome.png";

function WelcomeCard1() {
  return (
    <>
      <div className="bg-white rounded-2xl flex flex-col m-5 relative ">
        <div className="bg-[#eeeeee] md:justify-between">
          {/**عنوان الكارد والنص اللي تحت */}
          <h1 className="p-2 pb-9 m-2 font-bold text-2xl ">
            Welcome
            <div className="font-normal text-[#9a9a9a] text-sm mt-2 ">
              Elzero
            </div>
          </h1>

          <img
            src={welcome}
            className="absolute right-5 top-4 h-25 w-40 hidden md:block"
          />
        </div>

        <img
          src={avatar}
          className="absolute left-50 top-22 rounded-full border-4 h-16 w-16 border-white md:left-5"
        />

        <hr className="text-gray-200 mt-12" />

        <div className=" m-3 md:flex md:justify-around">
          {/**الاول */}
          <div className="flex justify-center items-center flex-col m-2">
            <div className="font-semibold">Osama Elzero</div>
            <div className=" text-[#9a9a9a] text-sm m-2">Developer</div>
          </div>

          {/**الثاني */}
          <div className="flex justify-center items-center flex-col m-2">
            <div className="font-semibold">80</div>
            <div className=" text-[#9a9a9a] text-sm m-2">Projects</div>
          </div>

          {/**الثالث */}
          <div className="flex justify-center items-center flex-col m-2">
            <div className="font-semibold">$8500</div>
            <div className=" text-[#9a9a9a] text-sm m-2">Earned</div>
          </div>
        </div>

        <hr className="text-gray-200 md:mb- " />

        <div className="flex justify-end">
          <input
            className="bg-[#2176f8] hover:bg-[#166fcb] text-white
              rounded-lg  px-3 py-0.5 mx-5 my-3
              cursor-pointer"
            type="submit"
            value="Profile"
          />
        </div>
      </div>
    </>
  );
}

export default WelcomeCard1;
