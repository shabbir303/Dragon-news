import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';

const MiddleNav = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('/data/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);
    console.log(news)
    return (
        <div className="">
            <h1 className="text-[20px] font-[600] text-[#403F3F] ">Dragon News Home</h1>
            <div className=" ">
                {
                    news.map(singleNews =>
                        <NavLink key={singleNews.id} >
                            <div className="border-[1px] my-[20px] p-[10px] rounded-xl">
                                <div className="flex items-center justify-between p-[15px] bg-[#F3F3F3]  ">

                                    <div className="flex justify-start items-center gap-3">
                                        <img className="w-[40px] h-[40px] rounded-xl  " src={singleNews.author.img} alt="" />
                                        <div>
                                            <h1 className="text-[16px] font-[600] mb-[3px]"> {singleNews.author.name} </h1>
                                            <h1 className="text-[14px] font-[400] text-[#706F6F] ">{moment().format()} </h1>
                                        </div>


                                    </div>
                                    <div className="flex justify-end gap-3">
                                        <img src="/assets/save.png" alt="" />
                                        <img src="/assets/share.png" alt="" />
                                    </div>
                                </div>

                                <div className="border-b-[2px] my-[15px]">
                                    <p className="text-[20px] font-[700] mb-[15px] " >{singleNews.title} </p>
                                    <img className="mb-[32px] w-full " src={singleNews.image_url} alt="" />
                                    <p className="text-[16] font-[400] text-[#706F6F] mb-[20px] ">{singleNews.details} </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[10px]">
                                        <div className="rating">
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-[#FF8C47]" />
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-[#FF8C47]" />
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-[#FF8C47]" />
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-[#FF8C47]" />
                                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-[#FF8C47]" />
                                        </div>
                                        <h1 className="text-[16px] font-[500] text-[#706F6F] ">{singleNews.rating.number} </h1>
                                    </div>
                                    <div className="flex items-center gap-2 p-[10px]  ">
                                        <img src="/assets/eye.png" alt="" />
                                        <h1>{singleNews.total_view} </h1>
                                    </div>
                                </div>
                            </div>

                        </NavLink>
                    )

                }
            </div>
        </div>
    );
};

export default MiddleNav;