import { FiArrowUpRight } from "react-icons/fi"
import news1 from "../../../assets/homeassets/news1.png"
import news2 from "../../../assets/homeassets/news2.png"
import news3 from "../../../assets/homeassets/news3.png"
function Post() {
    return (
        <>
            <div className="newsgradient">
                <div className="2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] sm:pt-[50px] pt-[10px] pb-[30px] lg:pb-[70px]">


                    <div className="  xl:pb-[80px] lg:pb-[60px] pb-[40px] text-center">
                        <h1 className="heading  ">Popular Posts</h1>
                    </div>

                    <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  place-content-center   gap-10  pb-[30px] text-[white] ">
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

            <hr className="border-0 w-full h-[1px] bg-[#0036B0]   " />

        </>
    )
}

export default Post