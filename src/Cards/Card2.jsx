import CardLayout from "./CardLayout";

function Card2() {
  return (
    <>
      <CardLayout title="Quick Draft" text="Write A Draft For Your Ideas ">
        <form>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Title"
              className="bg-[#eeeeee] rounded-lg p-2 m-3 mx-5 text-[15px]"
            />
            <textarea
              placeholder="Your Thought"
              className=" bg-[#eeeeee] rounded-lg p-2 m-3 mx-5 h-50 text-[15px]"
            />
          </div>
          <div className="flex justify-end">
            <input
              className="bg-[#2176f8] hover:bg-[#166fcb] text-white
              rounded-lg  px-3 py-1 mx-5 my-3
              cursor-pointer"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </CardLayout>
    </>
  );
}

export default Card2;
