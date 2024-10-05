import { GoThumbsup } from "react-icons/go"
import harold from "../../../assets/homeassets/Harold Rose.png"
import { BiCommentDots } from "react-icons/bi"
import { FaRegShareSquare } from "react-icons/fa"
import blogimg from "../../../assets/dynamicassets/blogs.png"
function Blogs() {
    return (
        <>
            <div className="grid 2xl:py-[100px] py-[30px]  2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] 2xl:gap-32 gap-10">

                <div className="grid lg:grid-cols-[80%_auto] grid-cols-1 place-content-between    2xl:gap-10 gap-3">
                    <div className=" grid  xl:grid-cols-6 grid-cols-4  2xl:gap-8 lg:gap-6 sm:gap-3 gap-2 place-content-start ">

                        <button
                            className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                            Load More
                        </button>
                        <button
                            className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                            Load More
                        </button>
                        <button
                            className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                            Load More
                        </button>
                        <button
                            className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                            Load More
                        </button>
                        <button
                            className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                            Load More
                        </button>
                        <button
                            className=" active:bg-[#0134AD]  focus:bg-[#0134AD]  hover:bg-[#0134AD] hover:scale-105 duration-500   2xl:text-[17px] lg:text-[15px] text-[6px] sm:text-[13px] sm:px-[10px] px-[5px] lg:px-[25px] rounded lg:py-[8px] sm:py-[4px] py-[3px] bg-transparent border-2 border-[#fff] active:border-[#0134AD] focus:border-[#0134AD]      ">
                            Load More
                        </button>

                    </div>

                    <input className="max-h-[45px] 2xl:min-w-[15vw]  mx-auto pl-5 py-[1px] text-[13px] rounded  bg-transparent border-solid  border border-[#003CC4]" type="text" placeholder="Search by title" />
                </div>

                <div className="grid xl:gap-16 sm:gap-5 gap-2">
                    <div className="grid grid-cols-[33%_auto] border-solid border border-[#003CC4] rounded-lg">
                        <div className="xl:h-[360px] lg:h-[250px] sm:h-[200px] h-[170px] rounded-lg">
                            <img src={blogimg} alt="" className="setimages rounded-l-lg h-full" />
                        </div>
                        <div className=" grid rounded-r-lg xl:pl-[80px] sm:pl-[25px] pl-[10px] xl:pr-[50px] sm:pr-[20px] pr-[10px] self-center xl:gap-3 sm:gap-2 gap-1 py-2" >
                            <p className="xl:text-[18px] lg:text-[14px] sm:text-[11px] text-[9px] text-yellow-700">Web design</p>
                            <p className="xl:text-[20px] lg:text-[17px] sm:text-[13px] text-[11px] ">5 Bad Landing Page Examples & How We Would Fix Them</p>
                            <p className="xl:text-[15px] lg:text-[11px] sm:text-[9px] text-[7px]">Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
                            <hr />
                            <div className="grid grid-cols-2 xl:pt-[30px] ">
                                <div className="flex xl:gap-3 sm:gap-2 gap-1 ">
                                    <div className="rounded-full xl:w-[50px] w-[25px] sm:w-[30px] lg:h-[38px] lg:w-[38px] xl:h-[50px] sm:h-[30px] h-[25px] ">
                                        <img className="rounded-full h-[100%] w-[100%] " src={harold} alt="" />
                                    </div>
                                    <p className="self-center lg:text-[14px] sm:text-[12px] text-[10px] text-[#FCB71B]">Harold Rose</p>
                                </div>

                                <div className="flex xl:gap-8  sm:gap-3 gap-2 place-self-end ">
                                    <div className="flex gap-[2px] ">
                                        <GoThumbsup className="xl:text-[28px] lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">50</p>
                                    </div>
                                    <div className="flex gap-[2px]">
                                        <BiCommentDots className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">31</p>
                                    </div>
                                    <div className="flex lg:gap-[2px]">
                                        <FaRegShareSquare className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">15</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-[33%_auto] border-solid border border-[#003CC4] rounded-lg">
                        <div className="xl:h-[360px] lg:h-[250px] sm:h-[200px] h-[170px] rounded-lg">
                            <img src={blogimg} alt="" className="setimages rounded-l-lg h-full" />
                        </div>
                        <div className=" grid rounded-r-lg xl:pl-[80px] sm:pl-[25px] pl-[10px] xl:pr-[50px] sm:pr-[20px] pr-[10px] self-center xl:gap-3 sm:gap-2 gap-1 py-2" >
                            <p className="xl:text-[18px] lg:text-[14px] sm:text-[11px] text-[9px] text-yellow-700">Web design</p>
                            <p className="xl:text-[20px] lg:text-[17px] sm:text-[13px] text-[11px] ">5 Bad Landing Page Examples & How We Would Fix Them</p>
                            <p className="xl:text-[15px] lg:text-[11px] sm:text-[9px] text-[7px]">Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
                            <hr />
                            <div className="grid grid-cols-2 xl:pt-[30px] ">
                                <div className="flex xl:gap-3 sm:gap-2 gap-1 ">
                                    <div className="rounded-full xl:w-[50px] w-[25px] sm:w-[30px] lg:h-[38px] lg:w-[38px] xl:h-[50px] sm:h-[30px] h-[25px] ">
                                        <img className="rounded-full h-[100%] w-[100%] " src={harold} alt="" />
                                    </div>
                                    <p className="self-center lg:text-[14px] sm:text-[12px] text-[10px] text-[#FCB71B]">Harold Rose</p>
                                </div>

                                <div className="flex xl:gap-8  sm:gap-3 gap-2 place-self-end ">
                                    <div className="flex gap-[2px] ">
                                        <GoThumbsup className="xl:text-[28px] lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">50</p>
                                    </div>
                                    <div className="flex gap-[2px]">
                                        <BiCommentDots className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">31</p>
                                    </div>
                                    <div className="flex lg:gap-[2px]">
                                        <FaRegShareSquare className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">15</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-[33%_auto] border-solid border border-[#003CC4] rounded-lg">
                        <div className="xl:h-[360px] lg:h-[250px] sm:h-[200px] h-[170px] rounded-lg">
                            <img src={blogimg} alt="" className="setimages rounded-l-lg h-full" />
                        </div>
                        <div className=" grid rounded-r-lg xl:pl-[80px] sm:pl-[25px] pl-[10px] xl:pr-[50px] sm:pr-[20px] pr-[10px] self-center xl:gap-3 sm:gap-2 gap-1 py-2" >
                            <p className="xl:text-[18px] lg:text-[14px] sm:text-[11px] text-[9px] text-yellow-700">Web design</p>
                            <p className="xl:text-[20px] lg:text-[17px] sm:text-[13px] text-[11px] ">5 Bad Landing Page Examples & How We Would Fix Them</p>
                            <p className="xl:text-[15px] lg:text-[11px] sm:text-[9px] text-[7px]">Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
                            <hr />
                            <div className="grid grid-cols-2 xl:pt-[30px] ">
                                <div className="flex xl:gap-3 sm:gap-2 gap-1 ">
                                    <div className="rounded-full xl:w-[50px] w-[25px] sm:w-[30px] lg:h-[38px] lg:w-[38px] xl:h-[50px] sm:h-[30px] h-[25px] ">
                                        <img className="rounded-full h-[100%] w-[100%] " src={harold} alt="" />
                                    </div>
                                    <p className="self-center lg:text-[14px] sm:text-[12px] text-[10px] text-[#FCB71B]">Harold Rose</p>
                                </div>

                                <div className="flex xl:gap-8  sm:gap-3 gap-2 place-self-end ">
                                    <div className="flex gap-[2px] ">
                                        <GoThumbsup className="xl:text-[28px] lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">50</p>
                                    </div>
                                    <div className="flex gap-[2px]">
                                        <BiCommentDots className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">31</p>
                                    </div>
                                    <div className="flex lg:gap-[2px]">
                                        <FaRegShareSquare className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">15</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-[33%_auto] border-solid border border-[#003CC4] rounded-lg">
                        <div className="xl:h-[360px] lg:h-[250px] sm:h-[200px] h-[170px] rounded-lg">
                            <img src={blogimg} alt="" className="setimages rounded-l-lg h-full" />
                        </div>
                        <div className=" grid rounded-r-lg xl:pl-[80px] sm:pl-[25px] pl-[10px] xl:pr-[50px] sm:pr-[20px] pr-[10px] self-center xl:gap-3 sm:gap-2 gap-1 py-2" >
                            <p className="xl:text-[18px] lg:text-[14px] sm:text-[11px] text-[9px] text-yellow-700">Web design</p>
                            <p className="xl:text-[20px] lg:text-[17px] sm:text-[13px] text-[11px] ">5 Bad Landing Page Examples & How We Would Fix Them</p>
                            <p className="xl:text-[15px] lg:text-[11px] sm:text-[9px] text-[7px]">Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
                            <hr />
                            <div className="grid grid-cols-2 xl:pt-[30px] ">
                                <div className="flex xl:gap-3 sm:gap-2 gap-1 ">
                                    <div className="rounded-full xl:w-[50px] w-[25px] sm:w-[30px] lg:h-[38px] lg:w-[38px] xl:h-[50px] sm:h-[30px] h-[25px] ">
                                        <img className="rounded-full h-[100%] w-[100%] " src={harold} alt="" />
                                    </div>
                                    <p className="self-center lg:text-[14px] sm:text-[12px] text-[10px] text-[#FCB71B]">Harold Rose</p>
                                </div>

                                <div className="flex xl:gap-8  sm:gap-3 gap-2 place-self-end ">
                                    <div className="flex gap-[2px] ">
                                        <GoThumbsup className="xl:text-[28px] lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">50</p>
                                    </div>
                                    <div className="flex gap-[2px]">
                                        <BiCommentDots className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">31</p>
                                    </div>
                                    <div className="flex lg:gap-[2px]">
                                        <FaRegShareSquare className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">15</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-[33%_auto] border-solid border border-[#003CC4] rounded-lg">
                        <div className="xl:h-[360px] lg:h-[250px] sm:h-[200px] h-[170px] rounded-lg">
                            <img src={blogimg} alt="" className="setimages rounded-l-lg h-full" />
                        </div>
                        <div className=" grid rounded-r-lg xl:pl-[80px] sm:pl-[25px] pl-[10px] xl:pr-[50px] sm:pr-[20px] pr-[10px] self-center xl:gap-3 sm:gap-2 gap-1 py-2" >
                            <p className="xl:text-[18px] lg:text-[14px] sm:text-[11px] text-[9px] text-yellow-700">Web design</p>
                            <p className="xl:text-[20px] lg:text-[17px] sm:text-[13px] text-[11px] ">5 Bad Landing Page Examples & How We Would Fix Them</p>
                            <p className="xl:text-[15px] lg:text-[11px] sm:text-[9px] text-[7px]">Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
                            <hr />
                            <div className="grid grid-cols-2 xl:pt-[30px] ">
                                <div className="flex xl:gap-3 sm:gap-2 gap-1 ">
                                    <div className="rounded-full xl:w-[50px] w-[25px] sm:w-[30px] lg:h-[38px] lg:w-[38px] xl:h-[50px] sm:h-[30px] h-[25px] ">
                                        <img className="rounded-full h-[100%] w-[100%] " src={harold} alt="" />
                                    </div>
                                    <p className="self-center lg:text-[14px] sm:text-[12px] text-[10px] text-[#FCB71B]">Harold Rose</p>
                                </div>

                                <div className="flex xl:gap-8  sm:gap-3 gap-2 place-self-end ">
                                    <div className="flex gap-[2px] ">
                                        <GoThumbsup className="xl:text-[28px] lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">50</p>
                                    </div>
                                    <div className="flex gap-[2px]">
                                        <BiCommentDots className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">31</p>
                                    </div>
                                    <div className="flex lg:gap-[2px]">
                                        <FaRegShareSquare className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">15</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-[33%_auto] border-solid border border-[#003CC4] rounded-lg">
                        <div className="xl:h-[360px] lg:h-[250px] sm:h-[200px] h-[170px] rounded-lg">
                            <img src={blogimg} alt="" className="setimages rounded-l-lg h-full" />
                        </div>
                        <div className=" grid rounded-r-lg xl:pl-[80px] sm:pl-[25px] pl-[10px] xl:pr-[50px] sm:pr-[20px] pr-[10px] self-center xl:gap-3 sm:gap-2 gap-1 py-2" >
                            <p className="xl:text-[18px] lg:text-[14px] sm:text-[11px] text-[9px] text-yellow-700">Web design</p>
                            <p className="xl:text-[20px] lg:text-[17px] sm:text-[13px] text-[11px] ">5 Bad Landing Page Examples & How We Would Fix Them</p>
                            <p className="xl:text-[15px] lg:text-[11px] sm:text-[9px] text-[7px]">Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
                            <hr />
                            <div className="grid grid-cols-2 xl:pt-[30px] ">
                                <div className="flex xl:gap-3 sm:gap-2 gap-1 ">
                                    <div className="rounded-full xl:w-[50px] w-[25px] sm:w-[30px] lg:h-[38px] lg:w-[38px] xl:h-[50px] sm:h-[30px] h-[25px] ">
                                        <img className="rounded-full h-[100%] w-[100%] " src={harold} alt="" />
                                    </div>
                                    <p className="self-center lg:text-[14px] sm:text-[12px] text-[10px] text-[#FCB71B]">Harold Rose</p>
                                </div>

                                <div className="flex xl:gap-8  sm:gap-3 gap-2 place-self-end ">
                                    <div className="flex gap-[2px] ">
                                        <GoThumbsup className="xl:text-[28px] lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">50</p>
                                    </div>
                                    <div className="flex gap-[2px]">
                                        <BiCommentDots className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">31</p>
                                    </div>
                                    <div className="flex lg:gap-[2px]">
                                        <FaRegShareSquare className="xl:text-[28px]  lg:text-[19px] sm:text-[16px] text-[10px]" />
                                        <p className="xl:text-[15px] lg:text-[12px] text-[8px]">15</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div data-aos="zoom-in-down" className="place-self-center">
                    <button
                        className="hover:scale-105 duration-500   xl:text-[17px] lg:text-[15px] text-[10px] sm:text-[13px] px-[15px] lg:px-[25px] rounded lg:py-[8px] py-[3px] bg-transparent border-2 border-[#0036B0]  ">
                        Load More
                    </button>
                </div>

            </div>
        </>
    )
}

export default Blogs