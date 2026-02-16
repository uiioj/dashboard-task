import CardLayout from "./CardLayout";
import CardItem from "../CardItem";

import pdf from "../../images/pdf.svg";
import avi from "../../images/avi.svg";
import psd from "../../images/psd.svg";
import zip from "../../images/zip.svg";
import dll from "../../images/dll.svg";
import eps from "../../images/eps.svg";

function LatestUploadsCard8() {
  return (
    <>
      <CardLayout title="Latest Uploads">
        {/**الأولى */}
        <CardItem
          image={pdf}
          title="My-file.pdf"
          descrption="Elzero"
          box="2.9mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**الثانية */}
        <CardItem
          image={avi}
          title="My-Video-File.avi"
          descrption="Admin"
          box="4.9mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**الثالثة */}
        <CardItem
          image={psd}
          title="My-Psd-File.pdf"
          descrption="Osama"
          box="4.5mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**الرابعة */}
        <CardItem
          image={zip}
          title="My-Zip-File.pdf"
          descrption="User"
          box="8.9mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**الخامسة */}
        <CardItem
          image={dll}
          title="My-DLL-File.pdf"
          descrption="Admin"
          box="4.9mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**السادسة */}
        <CardItem
          image={eps}
          title="My-Eps-File.pdf"
          descrption="Designer"
          box="8.9mb"
        ></CardItem>
      </CardLayout>
    </>
  );
}

export default LatestUploadsCard8;
