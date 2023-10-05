import moment from 'moment';

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto">
            <img src="/logo.png" alt="" className="mt-[50px] mb-[30px] " />
            <h1 className="text-[18px] font-[400] text-[#706F6F] mb-[10px] ">Journalism Without Fear or Favour</h1>
            <p className="text-[#706F6F] text-[20px] font-[500] mb-[30px] " >{moment().format("dddd , MMMM D, YYYY")} </p>
        </div>
    );
};

export default Header;