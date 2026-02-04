import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default Layout;
