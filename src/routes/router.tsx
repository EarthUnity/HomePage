import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Guide } from "../pages/guide";
import { Staff } from "../pages/staff";
import { Page404 } from "../pages/404";
 
export const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/guide" element={<Guide/>} />
                <Route path="/staff" element={<Staff/>} />
                <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
    );
}