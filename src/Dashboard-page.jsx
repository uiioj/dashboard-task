import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import Card from "./Cards/Card";

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
              <div className="flex-col m-3">
                <h1 className="font-semibold text-4xl ">Dashboard</h1>
                {/**الخط اللي تحته*/}
                <div className="w-20 bg-white rounded-full h-0.5 my-3">
                  <div
                    className="bg-black h-0.5 rounded-full "
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>

              {/**Cards div*/}
              <div className="grid grid-cols-3"></div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
