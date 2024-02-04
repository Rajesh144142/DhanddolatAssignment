import { Link } from "react-router-dom";
import Property from "./property";
import { BiSolidLeftArrow } from "react-icons/bi";
import ListofProperties from "../../components/propertyList/propertylist";
import { GrNext } from "react-icons/gr";
const homePageProperties = () => {
  return (
    <div className="relative h-[730px] overflow-hidden">
      <div className="w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-purple-600 to-indigo-800 absolute top-[-70px] left-[-80px] shadow-xl shadow-blue-900"></div>
      <div className="w-[50px] h-[50px] rounded-[50%] bg-gradient-to-r from-blue-800 to-indigo-800 absolute left-[20px] top-28 shadow-xl shadow-blue-900"></div>
      <div
        id="propeties"
        className=" m-auto h-[700px] flex flex-col justify-center items-center w-[90%] z-50 opacity-85"
      >
        <Link
          to="/properties"
          className="Properties flex gap-1 items-center text-2xl text-yellow-400 cursor-pointer"
        >
          <div className="icon ">
            <BiSolidLeftArrow />
          </div>
          <div className="text">PROPERTIES</div>
        </Link>
        <div className="flex items-center  justify-between gap-3">
          <div className="listofProperties  gap-3  hidden xl:flex">
            {ListofProperties.slice(0, 3).map((value, index) => (
              <Property data={value} key={index} />
            ))}
          </div>
          <div className="listofProperties  gap-3  flex xl:hidden">
            {ListofProperties.slice(0, 2).map((value, index) => (
              <Property data={value} key={index} />
            ))}
          </div>
          <div className="text-4xl text-white">
            <GrNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePageProperties;
