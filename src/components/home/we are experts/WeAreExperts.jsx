import { useEffect } from 'react'
import "./Weareexperts.css"
import { FiArrowUpRight } from 'react-icons/fi';

function WeAreExperts() {
    useEffect(() => {
    }, []);

    return (
        <>
            <section>



                <div className="wearegradient">
                    <div className="star px-15px] sm:px-[30px]">
                        <div data-aos="zoom-out-down" data-aos-duration="1500 ">
                            <div className=" 2xl:px-[60px] xl:px-[45px]  lg:px-[35px]   sm:px-[30px] px-[20px]  mx-auto pt-[180px]  lg:pb-[100px] xl:pb-[180px] md:pb-[120px] xl:pt-[220px] lg:pt-[150px] md:pt-[180px] sm:pb-[70px] pb-[100px] sm:pt-[150px] text-center  grid ">

                                <h4 className="subheading"> WE&apos;RE THE EXPERTS </h4>

                                <h1 id="" className="topMainHeading xl:pt-[40px] lg:pt-[25px] pt-[15px]">We Develop<span className="font-black topMainHeading text-[#013DC4]  text-transparent  bg-clip-text bg-gradient-to-r from-[#013DC4] to-[#0034A7] "> Creative</span><br />Website For Your Business</h1>

                                <p className="place-self-center sm:text-[11px] text-[9px]  tracking-wider xl:pt-[20px] lg:pt-[10px] pt-[5px] pb-[10px] sm:max-w-[600px] max-w-[350px] leading-3 sm:leading-4 xl:leading-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in.</p>

                                <div className="slide-in-elliptic-top-fwd  mx-auto xl:pt-[30px] lg:pt-[20px] pt-[10px] flex justify-center items-center ">
                                    <button
                                        className=" hover:scale-105 duration-500 btn-grad sm:text-[15px] lg:text-[17px] text-[10px] lg:px-[28px] px-[15px] rounded sm:py-[7px] py-[5px] place-self-center flex justify-center items-center gap-x-1 "> Discover
                                        <FiArrowUpRight className="sm:pt-[2px] pt-[1px] sm:text-[22px] text-[14px] " />
                                    </button>
                                    {/* <button
                                        className=" hover:scale-105 duration-500 btn-grad  2xl:text-[17px] lg:text-[12px] text-[10px] xl:py-[10px] py-[5px] 2xl:px-[28px] lg:px-[15px] px-[10px]  place-self-center flex justify-center items-center gap-x-1 rounded"> Discover
                                        <FiArrowUpRight className="pt-[1px] 2xl:text-[20px] xl:text-[17px]  sm:text-[14px] text-[14px] " />
                                    </button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default WeAreExperts