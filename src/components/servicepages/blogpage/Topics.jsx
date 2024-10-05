import { BiCommentDots } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi"
import { GoThumbsup } from "react-icons/go";
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
function Topics() {
    const navigate = useNavigate()

    const gotToNewPage = () => {
        navigate("/blogdetail");
    }
    return (
        <>


            <div className="grid xl:gap-20 gap-5 sm:gap-8 lg:gap-14 lg:pt-[80px] pt-[30px] pb-[20px] md:pb-[60px] xl:pb-[90px] 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">

                <div className="grid grid-cols-[60%_auto] lg:grid-cols-2 py-[10px]">
                    <div className=" max-w-[90%] self-center">
                        <h5 className=" wsubheading hottopics pb-[10px]  lg:pb-[30px]">Hot topic</h5>
                        <h1 className=" wheading lg:pb-[30px] pb-[10px]">This Long-Awaited Technology May Finally Change the World</h1>
                        <div className="lg:flex lg:gap-5 pb-[10px]   2xl:pb-[50px] lg:pb-[30px]">
                            <div className="flex lg:gap-5  gap-1 pb-[3px] ">
                                <p className="self-center lg:text-[15px] sm:text-[10px] text-[6px]">Technology </p>
                                <p className="self-center lg:text-[20px] sm:text-[10px] text-[6px]" >|</p>
                                <p className="self-center lg:text-[15px] sm:text-[10px] text-[6px]">12 Hours Ago </p>
                                <p className="self-center lg:text-[20px] sm:text-[10px] text-[6px]">|</p>
                            </div>
                            <div className="flex lg:gap-5 gap-2  ">
                                <div className="flex gap-[2px] ">
                                    <GoThumbsup className="lg:text-[23px] text-[12px]" />
                                    <p className="text-[10px]">50</p>
                                </div>
                                <div className="flex gap-[2px]">
                                    <BiCommentDots className="lg:text-[23px] text-[12px]" />
                                    <p className="text-[10px]">31</p>
                                </div>
                                <div className="flex lg:gap-[2px]">
                                    <FaRegShareSquare className="lg:text-[23px] text-[12px]" />
                                    <p className="text-[10px]">15</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => gotToNewPage()}
                            className=" hover:scale-105 duration-500 bg-[#FCBA26] sm:text-[8px] xl:text-[17px] lg:text-[12px] text-[5px] xl:px-[28px] lg:px-[18px] px-[5px] rounded xl:py-[7px] lg:py-[5px]  py-[3px] place-self-center flex justify-center items-center lg:gap-x-1 "> Read More
                            <FiArrowUpRight className="sm:pt-[2px] xl:text-[22px] sm:text-[16px] text-[7px] " />
                        </button>
                    </div>
                    <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="1000" className="industriesimg  bg-cover bg-center rounded-lg w-[100%] 2xl:h-[65vh] xl:h-[55vh] lg:h-[45vh] sm:h-[30vh]  h-[20vh] mx-auto "></div>
                </div>

            </div>
        </>
    )
}

export default Topics