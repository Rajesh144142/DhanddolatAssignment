import { Link } from "react-router-dom";
import menuList from "./menuList/menulist";
const navBar = () => {
  return (
      <div className="flex justify-between items-center text-[1.2rem] text-white m-auto w-[82%] p-5">
        <div className="logo ">LOGO</div>
        <div className="links flex gap-10 justify-center">
          {menuList.map((manu) => (
            <Link to={manu.link} key={manu.id} smooth duration={500}>
              {manu.name}
            </Link>
          ))}
        </div>
      </div>
  );
};

export default navBar;
