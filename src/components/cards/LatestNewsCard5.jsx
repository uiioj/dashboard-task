import CardLayout from "./CardLayout";
import LatestNewsLayout from "../LatestNewsLayout";

function LatestNewsCard5() {
  return (
    <>
      <CardLayout title="Latest News">
        {/**الأولى */}
        <LatestNewsLayout
          image="src/images/news-01.png"
          title="Created SASS Section"
          descrption="New SASS Examples & Tutorials"
          box="3 Days Ago"
        ></LatestNewsLayout>

        <div className="h-px bg-gray-200 m-4"></div>
        {/**الثانية */}
        <LatestNewsLayout
          image="src/images/news-02.png"
          title="Changed The Design"
          descrption="A Brand New Website Design"
          box="5 Days Ago"
        ></LatestNewsLayout>

        <div className="h-px bg-gray-200 m-4"></div>

        {/**الثالثة */}
        <LatestNewsLayout
          image="src/images/news-03.png"
          title="Team Increased"
          descrption="3 Developers Joined The Team"
          box="7 Days Ago"
        ></LatestNewsLayout>

        <div className="h-px bg-gray-200 m-4"></div>

        {/**الرابعة */}
        <LatestNewsLayout
          image="src/images/news-04.png"
          title="Added Payment Gateway"
          descrption="Many New Payment Gateways Added"
          box="9 Days Ago"
        ></LatestNewsLayout>
      </CardLayout>
    </>
  );
}

export default LatestNewsCard5;
