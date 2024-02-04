import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
export default function layout() {
  return (
    <main className=" bg-gradient-to-r from-blue-700 to-blue-950  w-[100%]">
      <NavBar/>
      <Outlet />
      <Footer />
    </main>
  );
}
