function YearlyTarget({
  image,
  title,
  amount,
  bgColor,
  progressColor,
  progressWidth,
  numOfProgress,
}) {
  return (
    <>
      <div className="flex justify-start px-5">
        <img src={image} className="h-20 px-4 my-3" />
        <div className="text-[#adaeaf] py-4 flex flex-col flex-1 ml-3 ">
          <div>{title}</div>
          <div className="text-black font-bold">{amount}</div>

          {/**هذا دف الكامل */}
          <div
            className="relative h-1 mt-1"
            style={{ backgroundColor: bgColor }}
          >
            {/**هذا دف النسبة */}
            <div
              className="absolute left-0 top-0 h-full"
              style={{
                backgroundColor: progressColor,
                width: progressWidth,
              }}
            >
              {/**هذا دف الايقونة الطالعة */}
              <div
                className="absolute -right-3 -top-7  text-white text-xs px-1 py-0.5 rounded-sm
          "
                style={{ backgroundColor: progressColor }}
              >
                {numOfProgress}

                {/**هذا دف المثلث اللي تحت */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
                  style={{ borderTopColor: progressColor }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YearlyTarget;
