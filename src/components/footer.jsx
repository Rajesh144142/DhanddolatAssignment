import { IoMail } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const footer = () => {
  return (
    <div className="bg-blue-950 shadow-inner shadow-blue-900 ">
      <div className="flex justify-around items-center h-[400px] ">
        <div className="logo text-2xl text-white">LOGO</div>
        <div className="contect flex flex-col gap-8 ">
          <div className="flex items-center gap-2">
            <div className="item rounded-[50%] bg-purple-500 text-white w-[30px] h-[30px]  flex justify-center items-center ">
              <IoMail />
            </div>
            <div className="item font-light text-white text-lg">MAIL ID</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="item rounded-[50%] bg-purple-500 w-[30px] h-[30px] flex justify-center items-center text-white">
              <AiFillPhone />
            </div>
            <div className="item font-light text-white text-lg">
              Contact no.
            </div>
          </div>
        </div>
        <div className="menu flex flex-col gap-4 font-light text-white text-lg ">
          <h1>Home</h1>
          <h1>ABOUT US</h1>
          <h1>PROPERTIES</h1>
          <h1>CONTACT</h1>
        </div>
        <div className="whatsapp flex flex-col gap-3 justify-center items-center">
          <h1 className="text-lg font-normal text-white">
            DIRECTLY CONTACT US ON
          </h1>
          <div className="flex items-center gap-2  rounded-3xl w-[200px] bg-purple-600  py-3 justify-center shadow-black shadow-2xl">
            <div className="whatsappImg w-[30px] h-[30px] rounded-[50%] p-1 bg-green-500 flex justify-center items-center text-white text-xl">
              <FaWhatsapp />
            </div>
            <h1 className="text-xl text-blue-800 drop-shadow-2xl font-normal">
              WHATS APP
            </h1>
          </div>
        </div>
      </div>
      <div className="  flex  flex-col text-center border-t-[1px] border-white font-light text-xl text-white h-[150px] justify-center items-center">
        <span className="flex gap-1 items-center">
          <span className="w-[25px] h-[25px] justify-center flex items-center pb-1 border-[1px] border-white rounded-[50%]">
            c
          </span>
          <span>
            2024 ALL RIGHTS RESERVED | POWERED BY{" "}
            <span className="text-yellow-400">PROPERTY VISTA</span>
          </span>
        </span>
        <span>DISCLAIMER</span>
      </div>
    </div>
  );
};

export default footer;
