import CardLayout from "./CardLayout";
import LatestNewsLayout from "../LatestNewsLayout";

import news_01 from "../../images/news-01.png";
import news_02 from "../../images/news-02.png";
import news_03 from "../../images/news-03.png";
import news_04 from "../../images/news-04.png";

function LatestNewsCard5() {
  return (
    <>
      <CardLayout title="Latest News">
        {/**الأولى */}
        <LatestNewsLayout
          image={news_01}
          title="Created SASS Section"
          descrption="New SASS Examples & Tutorials"
          box="3 Days Ago"
        ></LatestNewsLayout>

        <div className="h-px bg-gray-200 m-4"></div>
        {/**الثانية */}
        <LatestNewsLayout
          image={news_02}
          title="Changed The Design"
          descrption="A Brand New Website Design"
          box="5 Days Ago"
        ></LatestNewsLayout>

        <div className="h-px bg-gray-200 m-4"></div>

        {/**الثالثة */}
        <LatestNewsLayout
          image={news_03}
          title="Team Increased"
          descrption="3 Developers Joined The Team"
          box="7 Days Ago"
        ></LatestNewsLayout>

        <div className="h-px bg-gray-200 m-4"></div>

        {/**الرابعة */}
        <LatestNewsLayout
          image={news_04}
          title="Added Payment Gateway"
          descrption="Many New Payment Gateways Added"
          box="9 Days Ago"
        ></LatestNewsLayout>
      </CardLayout>
    </>
  );
}

export default LatestNewsCard5;
