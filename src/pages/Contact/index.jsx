const Contact = () => {
  return (
    <div id="contact" className="h-[710px] flex justify-center items-center shadow-2xl shadow-black" >
      <div className="w-[600px] h-[500px]  flex justify-center rounded-xl gap-5 items-center flex-col bg-blue-950 shadow-2xl shadow-black">
        <div className="flex text-4xl  gap-3 font-semibold text-white">
          <h1 className="text-yellow-500">CONNECT</h1>
          <h1>WITH US</h1>
        </div>
        <div className="text-yellow-500">PLEASE FILL THIS FORM!!</div>
        <div className="w-[410px] flex flex-col   gap-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className=" pl-5 w-[410px] p-2 rounded-xl outline-none"
            />
          </div>
          <div className="flex gap-4">
            <div className="">
              <input
                type="text"
                placeholder="91+"
                className="pl-5 p-2 rounded-xl w-[75px] outline-none"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Contact Number"
                className=" p-2 pl-5 rounded-xl w-[320px] outline-none"
              />
            </div>
          </div>
          <div className=" ">
            <input
              type="text"
              placeholder="Any Comments?"
              className="w-[410px] pl-5 p-2 rounded-xl outline-none"
            />
          </div>
          <div className="underline text-blue-500 text-right text-xl font-medium">
            SUBMIT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
