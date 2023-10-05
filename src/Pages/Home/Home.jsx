import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import MiddleNav from "../Shared/MiddleNav/MiddleNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div className="w-[85%] mx-auto " >
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

           <div className="flex  justify-center mx-auto gap-[30px] mt-[60px] " >
           <div className="w-[25%]  " ><LeftSideNav></LeftSideNav> </div>
            <div className="w-[50%]  " ><MiddleNav></MiddleNav> </div>
            <div className="w-[25%]   " ><RightSideNav></RightSideNav> </div>  
           </div>
        </div>
    );
};

export default Home;