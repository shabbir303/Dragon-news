import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] py-3 mb-[30px] ">
            <button className='ml-[16px] px-[20px] py-[10px] text-white bg-gradient-to-r from-pink-500 to-rose-500 ' >Latest </button>
            <Marquee pauseOnHover ={true} speed = {80} className="mr-[30px] gap-[80px] ">
                <h1 className="text-[18px] font-[600] text-[#403F3F]  " >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h1>
                <h1 className="text-[18px] font-[600] text-[#403F3F]  " >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h1>
            </Marquee>
        </div>
    );
};

export default BreakingNews;