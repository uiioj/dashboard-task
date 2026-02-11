function CardItem({ image, title, descrption, box, bgColor, textStyle = "" }) {
  return (
    <>
      <div className="">
        <div className="flex justify-between mx-1 my-4">
          <img src={image} className="h-13 px-4 rounded " />

          <div className="text-black flex flex-col flex-1 justify-center   ">
            <div className={`font-bold ${textStyle}`}>{title}</div>
            <div className={`text-[#adaeaf] text-[13px] ${textStyle}`}>
              {descrption}
            </div>
          </div>

          <div
            className={`bg-[#eeeeee] ${textStyle}
          rounded text-[14px]  flex items-center px-2 mx-3 my-3 `}
            style={{ backgroundColor: bgColor }}
          >
            {box}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
