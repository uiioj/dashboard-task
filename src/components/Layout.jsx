import { Children } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <div className="bg-[#f1f5f9] min-h-screen">
        <div className="flex">
          <Sidebar />

          {/**div حاطة فيه بار البحث وبقية الصفحة عشان ماينزلوا تحت السايد بار */}
          <div className="flex-1">
            <Searchbar />

            {/**بقية الصفحة  */}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
