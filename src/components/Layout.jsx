import { Children } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

import { useState } from "react";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  {
    /**--------------------------------------------------------------------------------- */
  }

  return (
    <>
      <div className="bg-[#f1f5f9] min-h-screen">
        <div className="flex">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          {/**div حاطة فيه بار البحث وبقية الصفحة عشان ماينزلوا تحت السايد بار */}
          <div className="flex-1">
            <Searchbar toggleSidebar={toggleSidebar} />

            {/**بقية الصفحة  */}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
