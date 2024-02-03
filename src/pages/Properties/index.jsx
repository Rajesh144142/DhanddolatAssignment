import Property from "./property";
import ListofProperties from "../../components/propertyList/propertylist";
import { BiSolidLeftArrow } from "react-icons/bi";
import { useState } from "react";
import FilterToggleBar from "../../components/FilterToggleBar/filterToggleBar";
const Properties = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="propeties" className=" m-auto w-[85%]">
      <div className="flex justify-between items-center w-[97%] m-auto ">
        <div className="Properties flex gap-1 items-center text-2xl text-yellow-400 cursor-pointer">
          <div className="icon ">
            <BiSolidLeftArrow />
          </div>
          <div className="text">PROPERTIES</div>
        </div>
        <div className="relative">
          <div
            className="filter text-xl text-white hover:underline underline-offset-4 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            FILTER
          </div>
          <div className="absolute z-50 right-0 top-9 bg-gray-400 m-auto w-[330px] rounded-xl opacity-90">
            {open && <FilterToggleBar />}
          </div>
        </div>
      </div>
      <div className="listofProperties grid grid-cols-2 xl:grid-cols-3  gap-4   ">
        {ListofProperties.map((value, index) => (
          <Property data={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
