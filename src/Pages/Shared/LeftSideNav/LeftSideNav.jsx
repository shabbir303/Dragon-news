import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from 'moment';


const LeftSideNav = () => {
    const [catgories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="">
            <h2 className="text-[20px] font-[600] text-[#403F3F] " >All Caterogy</h2>

            <div className="my-[15px] ">
                {
                    catgories.map(category => <NavLink to={`${category.id}`}
                        key={category.id} className="block text-[20px] font-[500] text-[#9F9F9F] my-[10px] px-[20px] py-[5px] "
                        style={({ isActive, isPending }) => {
                            return {
                                background: isActive ? "#E7E7E7" : "",

                            };
                        }}
                    >{category.name}</NavLink>)
                }
            </div>

            <div className="mt-[10px]">
                <img src="/assets/1.png" alt="" className="w-full" />
                <p className="text-[20px] font-[600] mt-[20px]  " >Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex items-center justify-between gap-3 mt-5 text- []">
                    <h1 className="text-[#403F3F] ">Sports</h1>
                    <div className="flex justify-center items-center gap-1 "><img src="/assets/calendar.png" alt="" />
                        <h1 className="text-[#9F9F9F]">{moment().format(" MMMM D, YYYY")} </h1></div>
                </div>
            </div>


            <div className="mt-[10px]">
                <img src="/assets/2.png" alt="" className="w-full" />
                <p className="text-[20px] font-[600] mt-[20px]  " >Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex items-center justify-between gap-3 mt-5 text- []">
                    <h1 className="text-[#403F3F] ">Sports</h1>
                    <div className="flex justify-center items-center gap-1 "><img src="/assets/calendar.png" alt="" />
                        <h1 className="text-[#9F9F9F]">{moment().format(" MMMM D, YYYY")} </h1></div>
                </div>
            </div>


            <div className="mt-[10px]">
                <img src="/assets/3.png" alt="" className="w-full" />
                <p className="text-[20px] font-[600] mt-[20px]  " >Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className="flex items-center justify-between gap-3 mt-5 text- []">
                    <h1 className="text-[#403F3F] ">Sports</h1>
                    <div className="flex justify-center items-center gap-1 "><img src="/assets/calendar.png" alt="" />
                        <h1 className="text-[#9F9F9F]">{moment().format(" MMMM D, YYYY")} </h1></div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;