const propert = ({ data }) => {
  return (
    <div className="w-[340px] h-[400px] 2xl:w-[400px] 2xl:h-[440px] text-white bg-purple-950 rounded-xl my-10 relative text-[14px] m-auto shadow-black shadow-2xl">
      <div className="img m-auto h-[220px] 2xl:h-[244px] w-[89%] 2xl:w-[89%] py-[22px] rounded-xl relative">
        <img
          src={data.img}
          alt=""
          className="w-[100%] h-[180px] 2xl:h-[210px] rounded-xl shadow-black shadow-2xl "
        />
        <div className="name absolute bottom-4 2xl:bottom-3 px-5 pt-1 pb-3 l text-2xl font-medium text-yellow-500 backdrop-brightness-75 w-[100%] rounded-b-xl ">
          {data.name}
        </div>
      </div>
      <div className="details grid grid-cols-2 pt-[12px] m-auto w-[85%]  gap-3">
        <div className="investmant ">
          <div className="data text-teal-500 font-bold text-base 2xl:text-lg">{data.investmment} lakhs</div>
          <div className="text text-sm 2xl:text-base">MIN INVESTMENT</div>
        </div>
        <div className="area">
          <div className="data text-teal-500 font-bold text-base 2xl:text-lg">{data.area}</div>
          <div className="text text-sm 2xl:text-base">MIN AREA</div>
        </div>
        <div className="rentalwyield">
          <div className="data text-teal-500 font-bold text-base 2xl:text-lg">{data.rentalwyield}</div>
          <div className="text text-sm 2xl:text-base">RENTAL YIELD</div>
        </div>
        <div className="location">
          <div className="data text-teal-500 font-bold text-base 2xl:text-lg">{data.location}</div>
          <div className="text text-sm 2xl:text-base ">LOCATION </div>
        </div>
      </div>
      <div className="absolute  right-8 2xl:right-7 pt-[6px] 2xl:pt-[2px] text-2xl text-yellow-500 underline underline-offset-4 ">contact</div>
    </div>
  );
};

export default propert;
