import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Card1 from "./cards/WelcomeCard1";
import Card2 from "./cards/QuickDraftCard2";
import Card3 from "./cards/YearlyTargetsCard3";
import Card4 from "./cards/YearlyTargetsCard4";
import Card5 from "./cards/LatestNewsCard5";
import Card6 from "./cards/LatestTaskCard6";
import Card7 from "./cards/TopSearchItemsCard7";
import Card8 from "./cards/LatestUploadsCard8";
import Card9 from "./cards/LastProjectProgressCard9";
import Card10 from "./cards/RemindersCard10";
import Card11 from "./cards/LatestPostCard11";
import Card12 from "./cards/SocialMediaStatsCard12";
import Card13 from "./cards/ProjectsCard13";

function Dashboard() {
  return (
    <>
      <div className="bg-[#f1f5f9] min-h-screen">
        <div className="flex">
          <Sidebar />

          {/**div حاطة فيه بار البحث وبقية الصفحة عشان ماينزلوا تحت السايد بار */}
          <div className="flex-1">
            <Searchbar />

            {/**بقية الصفحة  */}
            <div>
              {/**العنوان */}
              <div className="flex-col m-5">
                <h1 className="font-semibold text-4xl ">Dashboard</h1>
                {/**الخط اللي تحته*/}
                <div className="w-35 bg-white rounded-full h-0.5 my-3">
                  <div
                    className="bg-black h-0.5 rounded-full "
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              {/**Cards div*/}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <Card2 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
                <Card6 />
                <Card7 />
                <Card8 />
                <Card9 />
                <Card10 />
                <Card11 />
                <Card12 />

                <div className="col-span-1 md:col-span-2">
                  <Card13 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
