import CardLayout from "./CardLayout";
import CardItem from "../components/CardItem";

function Card7() {
  return (
    <>
      <CardLayout title="Top Search Items">
        <div className=" flex justify-between ">
          <div className="text-[#adaeaf] mx-9">Keyword</div>
          <div className="text-[#adaeaf] mx-4 ">Search Count </div>
        </div>
        <CardItem
          title="Programming"
          box="220"
          textStyle="font-normal "
        ></CardItem>
        <CardItem
          title="JavaScript"
          box="180"
          textStyle="font-normal "
        ></CardItem>
        <CardItem title="PHP" box="160" textStyle="font-normal "></CardItem>
        <CardItem title="Code" box="145" textStyle="font-normal"></CardItem>
        <CardItem title="Design" box="110" textStyle="font-normal "></CardItem>
        <CardItem title="Design" box="95" textStyle="font-normal "></CardItem>
      </CardLayout>
    </>
  );
}

export default Card7;
