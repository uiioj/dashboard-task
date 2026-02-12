import CardLayout from "./CardLayout";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

function Card12() {
  return (
    <>
      <CardLayout title="Social Media Stats">
        <div className="mx-4 mb-6 gap-4 flex justify-between flex-col">
          {/**تويتر */}
          <div className="bg-[#d2ecfc] flex justify-between">
            <div className="flex items-center gap-2 text-[#1da1f2]">
              <FaTwitter className="bg-[#1da1f2] text-5xl text-white border-8 border-[#1da1f2]" />
              90K Followers
            </div>

            <button
              className="bg-[#1da1f2] hover:bg-[#1da0f2ea] text-white text-sm
              rounded-lg px-3 py-1 mx-3 my-2
              cursor-pointer"
            >
              Follow
            </button>
          </div>

          {/**فيسبوك */}
          <div className="bg-[#d1e4fc] flex justify-between">
            <div className="flex items-center gap-2 text-[#1877f2]">
              <FaFacebookF className="bg-[#1877f2] text-5xl text-white border-8 border-[#1877f2]" />
              2M Like
            </div>

            <button
              className="bg-[#1877f2] hover:bg-[#1876f2e8] text-white text-sm
              rounded-lg px-3 py-1 mx-3 my-2
              cursor-pointer"
            >
              Like
            </button>
          </div>

          {/**يوتيوب */}
          <div className="bg-[#ffcccc] flex justify-between">
            <div className="flex items-center gap-2 text-[#ff0000]">
              <FaYoutube className="bg-[#ff0000] text-5xl text-white border-7 border-[#ff0000]" />
              1M Subs
            </div>

            <button
              className="bg-[#ff0000] hover:bg-[#ff0000d7] text-white text-sm
              rounded-lg px-3 py-1 mx-3 my-2
              cursor-pointer"
            >
              Subscribe
            </button>
          </div>

          {/**لينكد ان*/}
          <div className="bg-[#cce4f0] flex justify-between">
            <div className="flex items-center gap-2 text-[#0077b5]">
              <ImLinkedin className="bg-[#0077b5] text-5xl text-white border-9 border-[#0077b5]" />
              70K Followers
            </div>

            <button
              className="bg-[#0077b5] hover:bg-[#0076b5ea] text-white text-sm
              rounded-lg px-3 py-1 mx-3 my-2
              cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </CardLayout>
    </>
  );
}

export default Card12;
