import { IoIosArrowDown } from "react-icons/io";

const filterToggleBar = () => {
  const location = ["Noida", "Noida", "Noida"];
  return (
    <div className="w-[260px] h-[377px] m-auto rounded-xl py-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="investmentText  text-yellow-500">MIN INVESTMENT</div>
        <div className="bg-white w-[255px] h-[34px] m-auto rounded-xl flex items-center justify-between px-4">
          <span>Low to High</span>
          <span className="text-2xl">
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="investmentText text-yellow-500">AREA</div>
        <div className="bg-white w-[255px] h-[34px]  m-auto rounded-xl flex items-center justify-between px-4">
          <span>Low to High</span>
          <span className="text-2xl">
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="investmentText text-yellow-500">LOCATION</div>
        <div className=" flex justify-between text-lg  w-[255px]   m-auto">
          {location.map((value, index) => (
            <h1
              className="bg-white rounded-xl px-3 py-1    text-gray-400 hover:text-blue-900 hover:bg-cyan-400 font-semibold"
              key={index}
            >
              {value}
            </h1>
          ))}
        </div>
      </div>
      <div className="text-right pr-2 pt-5 underline text-lg text-sky-700">
        DONE
      </div>
    </div>
  );
};

export default filterToggleBar;
