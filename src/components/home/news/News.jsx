
import { FiArrowUpRight } from 'react-icons/fi'
import './News.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function News() {



    const [news, setNews] = useState([])

    const fetchArticles = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-07-13&sortBy=publishedAt&apiKey=4643ecf8b43e4b428f4c0c73f1570bb8');
            const articlesData = response.data.articles.filter(article => article.title && article.content && article.urlToImage)
                .slice(0, 3);
            setNews(articlesData);
        } catch (error) {
            console.error('Error fetching the articles:', error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);


    return (
        <>
            <div className="newsgradient">
                <div className="  flex justify-center w-[full]0 mx-auto  h-auto xl:pt-[110px] pt-[50px] xl:pb-[80px] lg:pb-[60px] pb-[40px] text-center    2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">

                    <div className="xl:max-w-2xl sm:max-w-md ">
                        <h4 className="subheading xl:pb-[30px] lg:pb-[25px] sm:pb-[15px]  pb-[5px]"> NEWS & ARTICLES </h4>
                        <h1 className="heading xl:pb-[18px] lg:pb-[10px] pb-[8px] ">Unveiling Digital Excellences</h1>
                        <div className="flex justify-center ">
                            <p className=" text-[#EAE5E5] paragraph ">View the latest blogs, press releases, and stories on our development experiences focusing on digital technologies and leading market trends.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  place-content-center   gap-10  pb-[30px] text-[white] 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">

                    {news.map((item, index) => (
                        <div data-aos="fade-down" key={index + 1}>
                            <div className="hover:-translate-y-4 duration-500 mx-auto grid grid-rows-[90%_auto]  text-center  rounded-lg  xl:p-[15px] p-[7px] border-solid border border-[#003CC4] hover:shadow-[0px_0px_20.06px_3px_#21194F]  xl:h-[73vh] lg:h-[60vh] md:h-[73vh] h-[60vh]">
                                <div className="text-start ">
                                    <img src={item.urlToImage} alt="news1" className="rounded-md xl:h-[52%]  lg:h-[42%] md:h-[52%] sm:h-[40%] h-[52%]   w-full" />
                                    <h3 className="pt-[10px] text-[12px] md:text-[16px] lg:text-[15px] xl:text-[18px] xl:font-medium md:font-medium ">{item.title.length > 110 ?
                                        `${item.title.substring(0, 110)}...` : item.title}</h3>
                                    <h5 className="lg:py-[10px] py-[5px] text-[9px] md:text-[13px] xl:text-[15px]  text-[#FCB71B]">August 22, 2023 - No Comments</h5>
                                    <p className=" text-[9px] sm:text-[11px] md:text-[13px] lg:text-[11px] xl:text-[13px]   lg:leading-5">{item.content.length > 200 ?
                                        `${item.content.substring(0, 200)}` : item.content}</p>
                                </div>


                                <div className=" place-self-start  pt-[10px]">
                                    <button
                                        className="hover:bg-[#FCB61D] text-right duration-300  bg-transparent border  border-[#003CC4] hover:border-[#FCB61D]   text-[10px] lg:text-[15px] lg:px-[25px] px-[5px] rounded lg:py-[10px] py-[3px]  flex justify-center items-center lg:gap-x-3 gap-x-1">
                                        Read More <FiArrowUpRight className=" lg:mt-[1px] lg:text-[20px] text-[16px] " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <hr className="border-0 w-full h-[1px] bg-[#0036B0] block sm:hidden  " />
        </>
    )
}

export default News