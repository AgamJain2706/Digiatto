import { FaPenNib, FaRegEye } from "react-icons/fa6"
import { MdAccessTimeFilled } from "react-icons/md"
import { FiArrowUpRight } from "react-icons/fi"
import blogdetailimg from "../../assets/dynamicassets/blogtopic.jpeg"
import quotation from "../../assets/publicassets/quotation.png"
import harold from "../../assets/homeassets/Harold Rose.png"
import news1 from "../../assets/homeassets/news1.png"
import news2 from "../../assets/homeassets/news2.png"
import news3 from "../../assets/homeassets/news3.png"
import Dropform from "../../components/common/Dropform"
import tabsData from "./Blogsdetails.json"
import { useState } from "react"
function Blogdetails() {

    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    return (
        <>
            <section>

                <div className="aboutgrad lg:px-[70px] sm:px-[30px] md:px-[35px] px-[15px] pt-[100px]  sm:pt-[180px]  xl:pt-[220px]  pb-[150px] sm:pb-[250px] lg:pb-[370px] xl:pb-[500px] 2xl:pb-[400px]  ">
                    <div data-aos="zoom-out-down" data-aos-duration="1500 ">
                        <div className="relative  text-center text-white grid mx-auto  xl:gap-10 lg:gap-8 sm:gap-5 gap-3">


                            <h1 className="topMainHeading  ">This Long-Awaited Technology May Finally Change the World </h1>

                            <div className="flex xl:gap-10 lg:gap-7 sm:gap-4 gap-3 mx-auto  sm:max-w-[75%] max-w-[95%]">
                                <div className="flex xl:gap-2 gap-1">
                                    <MdAccessTimeFilled className="xl:text-[32px] lg:text-[28px] md:text-[22px] text-[18px] self-center  " />

                                    <h1 className="self-center xl:text-[25px] lg:text-[17px] md:text-[10px] text-[5px]">Published On: April 24, 2024</h1>
                                </div>
                                <div className="flex xl:gap-2 gap-1">
                                    <FaPenNib className="xl:text-[32px] lg:text-[28px]  md:text-[22px] text-[18px] self-center " />
                                    <h1 className="self-center xl:text-[25px] lg:text-[17px] md:text-[10px] text-[5px]">Author: Harold Rose</h1>
                                </div>
                                <div className="flex xl:gap-2 gap-1">
                                    <FaRegEye className="xl:text-[32px] lg:text-[28px]  md:text-[22px] text-[18px] self-center " />
                                    <h1 className="self-center xl:text-[25px] lg:text-[17px] md:text-[10px] text-[5px]">Views: 1.4K</h1>
                                </div>
                            </div>


                            <img src={blogdetailimg} alt="" className="w-full absolute 2xl:h-[650px] xl:h-[600px] md:h-[320px]  lg:h-[450px] sm:h-[280px]  h-[180px] 2xl:top-[160%] xl:top-[150%] lg:top-[140%] sm:top-[150%] top-[120%] place-self-center  rounded-md mx-auto " />

                        </div>
                    </div>
                </div>
                <hr className='shadow-[0px_0px_10.06px_2px_#1f0aa2]  border border-solid border-[#003CC4]' />
                <div className=" aboutgrad lg:px-[70px] sm:px-[30px] md:px-[35px] px-[15px] pt-[80px] md:pt-[200px] sm:pt-[150px] lg:pt-[220px] 2xl:pt-[480px] xl:pt-[280px]  pb-[50px]  ">


                    <div className="w-full  grid lg:grid-cols-[30%_auto] lg:gap-10 gap-5">
                        <div className="bg-[#01143E]">
                            <div className="grid  text-start  2xl:p-5 xl:p-4 sm:p-3 p-2 gap-4 bg-[#0b1937] ">
                                <h5 className=" text-start  text-[22px]">Table of Content</h5>
                                <hr className="bg-[#FDB61B] border-0 h-[0.5px]" />
                                <ul className="pl-5 " >
                                    {tabsData.map((tab) => (
                                        <li key={tab.id}
                                            className={`list-decimal  place-self-start py-1 2xl:text-[18px] xl:text-[16px] lg:text-[14px] sm:text-[13px] border-none cursor-pointer ${tab.id === activeTab ? 'text-[#FCB71B] ' : 'opacity-70'}`} onClick={() => handleTabClick(tab.id)}> {tab.title} </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className=" ">
                            {tabsData
                                .filter((tab) => tab.id === activeTab)
                                .map((tab) => (
                                    <div key={tab.id} className="">
                                        {tab.content}
                                        <div className="xl:pt-[80px] md:pt-[50px] pt-[30px] xl:pb-[40px] md:pb-[25px] pb-[15px] relative grid grid-cols-[3%_2%_auto] gap-2">
                                            <div>   </div>
                                            <img src={quotation} alt="" className="xl:h-[18vh] md:h-[13vh] h-[10vh]  absolute top-0 left-0 opacity-15" />
                                            <div className="bg-[#FCB61A]  w-[2px] ">

                                            </div>
                                            <div className="grid gap-5  xl:py-5 py-1">
                                                <h2 className="2xl:text-[23px] md:text-[17px] sm:text-[14px] text-[12px] 2xl:leading-10 xl:leading-8 sm:leading-6 leading-4">Est quis sit phasellus proin proin fringilla eu quis. Placerat praesent blandit urna eu pellentesque dictum. Aliquam duis quam interdum quis. Urna, rutrum aenean lacus phasellus. Ipsum, ac porttitor lacus orci, cras lacus, quis leo.</h2>
                                                <div className="flex xl:gap-3 sm:gap-2 gap-1 ">
                                                    <div className="rounded-full xl:w-[50px] lg:w-[45px] md:w-[38px] sm:w-[30px] w-[25px]    xl:h-[50px] lg:h-[45px] md:h-[38px] sm:h-[30px] h-[25px] ">
                                                        <img className="rounded-full h-[100%] w-[100%] " src={harold} alt="" />
                                                    </div>
                                                    <div className="self-center">
                                                        <p className="xl:text-[20px] lg:text-[16px] sm:text-[14px] text-[12px] text-[#FCB71B]">Harold Rose</p>
                                                        <p className="xl:text-[14px] lg:text-[12px] sm:text-[10px] text-[8px] ">CEO of Ipsum Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border-0 xl:mt-8 mt-3  h-[2px] bg-[#FCB61A]   " />

                                        <div className="flex xl:pt-[30px]     2xl:gap-10 gap-3 pb-[50px] pt-[20px]">
                                            <p className="self-center xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]">Related Tags :</p>

                                            <button
                                                className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                                                #lifestyle
                                            </button>
                                            <button
                                                className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                                                #lifestyle
                                            </button>
                                            <button
                                                className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                                                #lifestyle
                                            </button>



                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>


                    <div className="lg:pt-[70px] ">
                        <div className="   lg:pb-[60px] pb-[40px] text-center  grid xl:gap-5 gap-2  ">
                            <h1 className="heading  ">Popular Posts</h1>
                            <p className="paragraph">Read our thoughts and insights on the latest tech and business trends</p>
                        </div>

                        <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  place-content-center   xl:gap-10 gap-7  xl:pb-[30px] text-[white] ">
                            <div data-aos="fade-down">
                                <div className="hover:-translate-y-4 duration-500 mx-auto grid  text-center  rounded-lg  p-[15px] border-solid border border-[#003CC4] hover:shadow-[0px_0px_20.06px_3px_#21194F]">
                                    <div className="text-start">
                                        <img src={news1} alt="news1" className="rounded-lg max-h-[250px] w-full" />
                                        <h3 className="pt-[10px] text-[15px] md:text-[15px] xl:text-[18px] font-bold xl:font-medium md:font-semibold">Elevate Your Online Presence:
                                            Digital Agency Insights</h3>
                                        <h5 className="sm:py-[10px] py-[5px] text-[12px] md:text-[13px] xl:text-[14px]  text-[#FCB71B]">August 22, 2023 - No Comments</h5>
                                        <p className=" text-[9px] sm:text-[11px] md:text-[13px] sm:leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam ligula, sagittis a vulputate iaculis, consectetur in tortor. Proin congue commodo enim. Vestibulum malesuada auctor turpis, nec consectetur ex maximus et. Praesent eget sem vel</p>
                                    </div>
                                    <div className=" place-self-start  pt-[10px]">
                                        <button
                                            className="hover:bg-[#FCB61D] text-right duration-300  bg-transparent border  border-[#003CC4] hover:border-[#FCB61D]   text-[10px] lg:text-[15px] lg:px-[25px] px-[5px] rounded lg:py-[10px] py-[3px]  flex justify-center items-center lg:gap-x-3 gap-x-1">
                                            Read More <FiArrowUpRight className=" lg:mt-[1px] lg:text-[20px] text-[16px] " />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-down">
                                <div className="hover:-translate-y-4 duration-500 mx-auto grid  text-center  rounded-lg  p-[15px] border-solid border border-[#003CC4] hover:shadow-[0px_0px_20.06px_3px_#21194F]">
                                    <div className="text-start">
                                        <img src={news2} alt="news1" className="rounded-lg max-h-[250px] w-full" />
                                        <h3 className="pt-[10px] text-[15px] md:text-[15px] xl:text-[18px] font-bold xl:font-medium md:font-semibold">Code and Creativity: Crafting Digital
                                            Excellence Together</h3>
                                        <h5 className="sm:py-[10px] py-[5px] text-[12px] md:text-[13px] xl:text-[14px]  text-[#FCB71B]">August 22, 2023 - No Comments</h5>
                                        <p className=" text-[9px] sm:text-[11px] md:text-[13px] sm:leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam ligula, sagittis a vulputate iaculis, consectetur in tortor. Proin congue commodo enim. Vestibulum malesuada auctor turpis, nec consectetur ex maximus et. Praesent eget sem vel</p>
                                    </div>
                                    <div className=" place-self-start  pt-[10px]">
                                        <button
                                            className="hover:bg-[#FCB61D] text-right duration-300  bg-transparent border  border-[#003CC4] hover:border-[#FCB61D]   text-[10px] lg:text-[15px] lg:px-[25px] px-[5px] rounded lg:py-[10px] py-[3px]  flex justify-center items-center lg:gap-x-3 gap-x-1">
                                            Read More <FiArrowUpRight className=" lg:mt-[1px] lg:text-[20px] text-[16px] " />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-down" className="hidden md:block">

                                <div className="hover:-translate-y-4 duration-500 mx-auto grid  text-center  rounded-lg  p-[15px] border-solid border border-[#003CC4] hover:shadow-[0px_0px_20.06px_3px_#21194F] ">
                                    <div className="text-start">
                                        <img src={news3} alt="news1" className="rounded-lg max-h-[250px] w-full" />
                                        <h3 className="pt-[10px] text-[15px] md:text-[15px] xl:text-[18px] font-bold xl:font-medium md:font-semibold">Pixels to Profits: Maximizing Returns with
                                            Digital Expertise</h3>
                                        <h5 className="sm:py-[10px] py-[5px] text-[12px] md:text-[13px] xl:text-[14px]  text-[#FCB71B]">August 22, 2023 - No Comments</h5>
                                        <p className=" text-[9px] sm:text-[11px] md:text-[13px] sm:leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam ligula, sagittis a vulputate iaculis, consectetur in tortor. Proin congue commodo enim. Vestibulum malesuada auctor turpis, nec consectetur ex maximus et. Praesent eget sem vel</p>
                                    </div>
                                    <div className=" place-self-start  pt-[10px]">
                                        <button
                                            className="hover:bg-[#FCB61D] text-right duration-300  bg-transparent border border-[#003CC4] hover:border-[#FCB61D]   text-[10px] lg:text-[15px] lg:px-[25px] px-[5px] rounded lg:py-[10px] py-[3px]  flex justify-center items-center lg:gap-x-3 gap-x-1">
                                            Read More <FiArrowUpRight className=" lg:mt-[1px] lg:text-[20px] text-[16px] " />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='shadow-[0px_0px_10.06px_2px_#1f0aa2]  border border-solid border-[#003CC4] md:mb-[50px]' />
                <Dropform />


            </section>
        </>
    )
}

export default Blogdetails