import { Outlet } from "react-router-dom";

import Navbar from "./Pages/Shared/Navbar/Navbar";


const Root = () => {
    return (
       <>
         
       <Outlet></Outlet>
       </>
    );
};

export default Root;