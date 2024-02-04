const Home = () => {
  return (
    <div className="relative  h-[500px] xl:h-[680px]  overflow-hidden">
      <div className="w-[1000px] h-[1000px] xl:w-[1300px] xl:h-[1300px] absolute rounded-[50%] bg-gradient-to-r from-blue-500 via-blue-700 to-sky-950 top-[150px] right-[-250px] shadow-blue-900 shadow-2xl z-40  "></div>
      <div className="flex gap-4 h-[500px] xl:h-[680px] justify-between  m-auto w-[80%] items-center  ">
        <div className="flex flex-col gap-5 z-50">
          <div className="w-[320px]  h-[200px] lg:w-[360px] xl:w-[490px] lg:h-[290px] bg-blue-950  rounded-xl flex justify-center flex-col shadow-black shadow-2xl opacity-85">
            <div className="flex justify-center flex-col items-center gap-3 ">
              <h1 className="text-3xl lg:text-4xl xl:text-6xl text-white">
                DISCOVER
              </h1>
              <h2 className="text-xl lg:text-2xl xl:text-3xl text-white">
                Investment Opportunities
              </h2>
              <button className="w-[80%] lg:w-[68%] rounded-xl m-auto py-1 text-lg lg:text-2xl text-center text-black bg-yellow-500 ">
                Click here
              </button>
            </div>
          </div>
          <div className=" w-[320px] lg:w-[360px] xl:w-[490px] h-[100px] bg-blue-950  rounded-xl flex justify-between text-white items-center px-6 shadow-black shadow-2xl gap-3 opacity-85">
            <span className="flex items-center flex-col gap-[3px] ">
              <img
                src="Growth-Transparent-Image.png"
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[40px]"
              />
              <div className="text-xs xl:text-base">GROWTH</div>
            </span>
            <span className="flex items-center flex-col gap-[3px]">
              <img
                src="pngwing.com (4).png"
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[40px]"
              />
              <div className="text-xs xl:text-base">ASSISTANCE</div>
            </span>
            <span className="flex items-center flex-col gap-[3px]">
              <img
                src="pngwing.com (2).png"
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[40px]"
              />
              <div className=" text-xs xl:text-base">INVESTMENT</div>
            </span>{" "}
            <span className="flex items-center flex-col gap-[3px]">
              <img
                src="pngwing.com (3).png"
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[40px]"
              />
              <div className="text-xs xl:text-base">PROPERTY</div>
            </span>
          </div>
        </div>
        <div className="w-[360px] h-[360px] lg:h-[450px] lg:w-[450px] xl:w-[480px] xl:h-[480px] rounded-xl shadow-black shadow-2xl z-50">
          <img
            className="w-[360px] h-[360px] lg:h-[450px] lg:w-[450px] xl:w-[480px] xl:h-[480px] rounded-xl"
            src="https://images.pexels.com/photos/19408674/pexels-photo-19408674/free-photo-of-the-view-of-the-water-and-clock-tower-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
