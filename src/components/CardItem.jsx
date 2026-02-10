function CardItem({ image, title, descrption, box }) {
  return (
    <>
      <div className="flex justify-between mx-1 my-4 ">
        <img src={image} className="h-13 px-4 rounded " />

        <div className="text-black flex md:flex-col flex-1 justify-center   ">
          <div className="font-bold">{title}</div>
          <div className="text-[#adaeaf] text-[13px]">{descrption}</div>
        </div>

        <div className="bg-[#eeeeee] rounded text-[12px] font-semibold flex items-center px-2 mx-3 my-3">
          {box}
        </div>
      </div>
    </>
  );
}

export default CardItem;
