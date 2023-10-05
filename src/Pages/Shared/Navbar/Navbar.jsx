import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex items-center   ">
            <div className="flex justify-center gap-5   mx-auto ">
            <NavLink to='/'
            style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#0B73DC" : "#706F6F",
                };
              }}
            >Home</NavLink>
            <NavLink to='/about'
            style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#0B73DC" : "#706F6F",
                };
              }}
            >About</NavLink>
            <NavLink to='/carrer'
            style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#0B73DC" : "#706F6F",
                };
              }}
            >Carrer</NavLink>
            </div>

            <div className=" flex justify-end mr-5 gap-[20px] ">
              <img src="/assets/user.png" alt="" className="w-[44px] h-[44px] " />
              <Link to="/login"><button className="bg-gradient-to-r from-slate-900 to-slate-700 px-[34px] py-[10px] text-white " >Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;