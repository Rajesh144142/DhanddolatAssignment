import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Layout from '../layout';
import Properties from '../pages/Properties/index'
import AllPages from '../pages/AllPages/index'
import About from "../pages/About";
import Contact from "../pages/Contact";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" index element={<AllPages/>} />
            <Route path="properties" index element={<Properties />} />
            <Route path="about" index element={<About />} />
            <Route path="contact" index element={<Contact />} />
        </Route>
    )
);
export default router;