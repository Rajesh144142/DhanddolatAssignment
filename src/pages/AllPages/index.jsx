import About from "../About/index";
import Contact from "../Contact/index";
import HomePageProperties from "../Properties/homePageProperties";
import Home from "../Home/index";

const allPages = () => {
  return (
    <div className="">
      <Home />
      <About />
      <HomePageProperties />
      <Contact />
    </div>
  );
};

export default allPages;
