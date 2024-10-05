import Harold from "../../assets/homeassets/Harold Rose.png"
import Michael from "../../assets/homeassets/Michael Smith.png"
import { useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
function Ourservices() {
    useEffect(() => {
    }, []);
    return (
        <>
            <section>
                <div className="wearegradient">
                    <div data-aos="zoom-out-down" data-aos-duration="1500 ">
                        <div data-aos="zoom-in-up" data-aos-duration="800"
                            data-aos-easing="ease-in-sine"
                            className="z-[1000] absolute lg:top-[22%] lg:left-[4%] top-[20%] left-[10%] flex lg:gap-7 gap-1">
                            <div className="rounded-full xl:h-[100px] lg:h-[100px] h-[50px] border-8 border-[#3A384F] border-opacity-80 shadow-[0px_0px_32.06px_5px_#73708E5E]">
                                <img className="rounded-full h-[100%] w-[100%] " src={Harold} alt="" />
                            </div>
                        </div>

                        <div className="star 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">

                            <div className="  mx-auto pt-[120px]  lg:pb-[170px] xl:pb-[210px] md:pb-[120px] xl:pt-[220px] lg:pt-[150px] md:pt-[180px] sm:pb-[120px] pb-[100px] sm:pt-[150px] text-center  grid ">

                                <h4 className="subheading "> OUR SERVICES </h4>

                                <h1 id="" className="topMainHeading xl:pt-[40px] lg:pt-[25px] pt-[15px]">Craft. Refine.<span className="font-black topMainHeading text-[#013DC4]  text-transparent  bg-clip-text bg-gradient-to-r from-[#013DC4] to-[#0034A7] "> Dominate</span><br /></h1>

                                <p className="place-self-center sm:text-[11px] text-[9px]  tracking-wider xl:pt-[20px] lg:pt-[10px] pt-[5px] pb-[10px] max-w-[600px] leading-3 sm:leading-4 xl:leading-5 ">Digiatto IT Services help you ideate, design, and develop the perfect solution to bring your digital vision to life. Digiatto can help in solving complex business challenges using custom solutions.</p>

                                <div className="slide-in-elliptic-top-fwd  mx-auto xl:pt-[30px] lg:pt-[20px] pt-[10px] flex justify-center items-center ">
                                    {/* <button
                                        className=" hover:scale-105 duration-500 btn-grad  2xl:text-[17px] lg:text-[12px] text-[10px] xl:py-[10px] py-[5px] 2xl:px-[28px] lg:px-[15px] px-[10px]  place-self-center flex justify-center items-center gap-x-1 rounded"> Let&apos;s Analyze Your Needs
                                        <FiArrowUpRight className="pt-[1px] 2xl:text-[20px] xl:text-[17px]  sm:text-[14px] text-[14px] " />
                                    </button> */}
                                    <button
                                        className=" hover:scale-105 duration-500 btn-grad sm:text-[15px] lg:text-[17px] text-[10px] lg:px-[28px] px-[15px] rounded sm:py-[7px] py-[5px] place-self-center flex justify-center items-center gap-x-1 ">  Let&apos;s Analyze Your Needs
                                        <FiArrowUpRight className="sm:pt-[2px] pt-[1px] sm:text-[22px] text-[14px] " />
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div data-aos="zoom-in-down" data-aos-duration="900"
                            data-aos-easing="ease-in-sine" className="absolute lg:top-[75%] sm:top-[80%] sm:left-[65%] left-[50%] top-[80%] flex lg:gap-4 gap-1">
                            <span className="rounded-xl self-center w-full text-end xl:pl-[35px] lg:pl-[20px]  pl-[10px] lg:pr-[12px] pr-[5px] xl:py-[8px] lg:py-[10px] py-[5px] border-1  opacity-90 border-[#3A384F] border-opacity-80 shadow-[0px_0px_30.06px_1px_#73708E5E]">
                                <h5 className="font-semibold tracking-wider text-[#FCB71B] xl:text-[12px] lg:text-[15px] text-[10px] ">Michael Smith</h5>
                                <h6 className="xl:text-[9px] lg:text-[14px] text-[10px] tracking-wider">Virtue Care</h6>
                            </span>
                            <div className="rounded-full xl:h-[80px] lg:h-[100px] h-[55px]  border-8 border-[#3A384F] border-opacity-80 opacity-70 shadow-[0px_0px_32.06px_5px_#73708E5E] xl:w-[130px] lg:w-[160px]  w-[85px]">
                                <img className="rounded-full h-[100%] w-[100%] " src={Michael} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Ourservices