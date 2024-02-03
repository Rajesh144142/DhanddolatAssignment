import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
export default function layout() {
  return (
    <main className=" bg-purple-800  w-[100%]">
      <NavBar/>
      <Outlet />
      <Footer />
    </main>
  );
}
