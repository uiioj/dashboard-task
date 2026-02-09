import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";
import Card8 from "./Cards/Card8";
import Card9 from "./Cards/Card9";
import Card10 from "./Cards/Card10";
import Card11 from "./Cards/Card11";
import Card12 from "./Cards/Card12";
import Card13 from "./Cards/Card13";

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
