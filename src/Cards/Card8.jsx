import CardLayout from "./CardLayout";
import CardItem from "../components/CardItem";

function Card8() {
  return (
    <>
      <CardLayout title="Latest Uploads">
        {/**الأولى */}
        <CardItem
          image="src/images/pdf.svg"
          title="My-file.pdf"
          descrption="Elzero"
          box="2.9mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**الثانية */}
        <CardItem
          image="src/images/avi.svg"
          title="My-Video-File.avi"
          descrption="Admin"
          box="4.9mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**الثالثة */}
        <CardItem
          image="src/images/psd.svg"
          title="My-Psd-File.pdf"
          descrption="Osama"
          box="4.5mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**الرابعة */}
        <CardItem
          image="src/images/zip.svg"
          title="My-Zip-File.pdf"
          descrption="User"
          box="8.9mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**الخامسة */}
        <CardItem
          image="src/images/dll.svg"
          title="My-DLL-File.pdf"
          descrption="Admin"
          box="4.9mb"
        ></CardItem>

        <div className="h-px bg-gray-200 mx-4"></div>

        {/**السادسة */}
        <CardItem
          image="src/images/eps.svg"
          title="My-Eps-File.pdf"
          descrption="Designer"
          box="8.9mb"
        ></CardItem>
      </CardLayout>
    </>
  );
}

export default Card8;
