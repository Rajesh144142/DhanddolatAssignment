import { Link } from "react-router-dom";
import Property from "./property";
import { BiSolidLeftArrow } from "react-icons/bi";
import ListofProperties from "../../components/propertyList/propertylist";
import { GrNext } from "react-icons/gr";
const homePageProperties = () => {
  return (
    <div>
      <div
        id="propeties"
        className=" m-auto h-[700px] flex flex-col justify-center items-center w-[90%]"
      >
        <Link
          to="/properties" className="Properties flex gap-1 items-center text-2xl text-yellow-400 cursor-pointer">
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
