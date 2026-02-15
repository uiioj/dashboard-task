import Layout from "./Layout";
import WelcomeCard1 from "./cards/WelcomeCard1";
import QuickDraftCard2 from "./cards/QuickDraftCard2";
import YearlyTargetsCard3 from "./cards/YearlyTargetsCard3";
import YearlyTargetsCard4 from "./cards/YearlyTargetsCard4";
import LatestNewsCard5 from "./cards/LatestNewsCard5";
import LatestTaskCard6 from "./cards/LatestTaskCard6";
import TopSearchItemsCard7 from "./cards/TopSearchItemsCard7";
import LatestUploadsCard8 from "./cards/LatestUploadsCard8";
import LastProjectProgressCard9 from "./cards/LastProjectProgressCard9";
import RemindersCard10 from "./cards/RemindersCard10";
import LatestPostCard11 from "./cards/LatestPostCard11";
import SocialMediaStatsCard12 from "./cards/SocialMediaStatsCard12";
import ProjectsCard13 from "./cards/ProjectsCard13";

function HomePage2() {
  return (
    <>
      <Layout>
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
            <WelcomeCard1 />
            <QuickDraftCard2 />
            <YearlyTargetsCard3 />
            <YearlyTargetsCard4 />
            <LatestNewsCard5 />
            <LatestTaskCard6 />
            <TopSearchItemsCard7 />
            <LatestUploadsCard8 />
            <LastProjectProgressCard9 />
            <RemindersCard10 />
            <LatestPostCard11 />
            <SocialMediaStatsCard12 />

            <div className="col-span-1 md:col-span-2">
              <ProjectsCard13 />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomePage2;
