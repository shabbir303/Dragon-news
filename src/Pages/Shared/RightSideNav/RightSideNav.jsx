

const RightSideNav = () => {
    return (
        <div>
            <div className="flex flex-col border-[1px] rounded-xl p-4 ">
            <h2 className="text-[20px] font-[600] text-[#403F3F] mb-4 " >Login With</h2>
            <button  className="btn btn-outline btn-info mb-2"><img className="w-[40px] h-[30px]" src="/assets/google-logo.png" alt="" srcset="" /> Login With google</button>
            <button  className="btn btn-outline btn-info"> <img className="w-[40px] h-[30px]" src="/assets/facebook-logo.png" alt="" /> Login With facebook</button>
            </div>

            <div className="mt-[30px]">
                <h1 className="text-[20px] font-[600] text-[#403F3F] mb-4 pl-[20px] " >Find Us On</h1>
                <h1 className="flex gap-3 items-center border-[1px] p-[17px] text-[16px] font-[500] text-[#706F6F] " ><img src="/assets/Facebook.png" alt="" /> Facebook</h1>
                <h1 className="flex gap-3 items-center border-b-[1px] border-x-[1px] p-[17px] text-[16px] font-[500] text-[#706F6F] "><img src="/assets/Twitter.png" alt="" /> Twitter</h1>
                <h1 className="flex gap-3 items-center border-b-[1px] border-x-[1px] p-[17px] text-[16px] font-[500] text-[#706F6F] "><img src="/assets/Instagram.png" alt="" /> Instagram</h1>
            </div>

            <div className="mt-[30px] bg-[#F3F3F3] flex flex-col items-center ">
                <h1 className="text-[20px] font-[600] text-[#403F3F] mb-[20px] pl-[20px] pt-[10px] " >Q-Zone</h1>
                <img className="mb-[20px] p-[20px] " src="/assets/qZone1.png" alt="" />
                <img className="mb-[20px] p-[20px] " src="/assets/qZone2.png" alt="" />
                <img className="mb-[20px] p-[20px] " src="/assets/qZone3.png" alt="" />
            </div>

            <div className="mt-[20px] mb-[20px] pb-[20px]" style={{backgroundImage:'url(https://i.ibb.co/HF9SZb7/bg.png)' }} >
                    <p className="text-[30px] font-[700] pt-[65px] px-[39px] pb-[10px] text-center text-white" >Create an <br /> Amazing <br /> Newspaper</p>
                    <p className="px-[39px] text-center pb-[20px] text-white " >Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="flex justify-center items-center mx-auto text-center px-[20px] py-[10px] text-white bg-gradient-to-r from-emerald-500 to-emerald-900 mb-[30px] " >Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;