function CardItem({ image, title, descrption, box, bgColor, textStyle = "" }) {
  return (
    <>
      <div className="text-xs md:text-sm lg:text-lg">
        <div className="flex md:flex-row justify-between  mx-1 my-2">
          <img src={image} className="h-10 md:h-13 px-4 rounded " />

          <div className="text-black  flex-1 justify-center text-xs md:text-sm lg:text-[16px]">
            <div className={`font-bold  ${textStyle}`}>{title}</div>
            <div className={`text-[#adaeaf]  ${textStyle}`}>{descrption}</div>
          </div>

          <div
            className={`bg-[#eeeeee] text-xs lg:text-[15px] ${textStyle}
          rounded md:flex md:items-center px-2 mx-3 my-3 `}
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
