import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

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
                <h1 className="font-semibold text-2xl ">Dashboard</h1>
                <progress
                  value="30"
                  max="100"
                  className="w-20 h-0.5 bg-white accent-black"
                />
              </div>

              {/**Cards div*/}
              <div className="grid grid-cols-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
