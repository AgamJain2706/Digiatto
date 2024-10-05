import { FiArrowUpRight } from "react-icons/fi"

function Studies() {
    return (
        <>
            <div className="wearegradient">
                <div className="star 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">
                    <div data-aos="zoom-out-down" data-aos-duration="1500 ">
                        <div className="  mx-auto pt-[180px]  lg:pb-[100px]  md:pb-[120px] xl:pt-[200px] lg:pt-[150px] md:pt-[180px] sm:pb-[70px] pb-[100px] sm:pt-[150px] text-center  grid ">

                            <h4 className="subheading uppercase">CASE STUDIES </h4>

                            <h1 id="" className="topMainHeading xl:pt-[35px] lg:pt-[25px] pt-[15px]">Explore Our Recent <span className="font-black topMainHeading text-[#013DC4]  text-transparent  bg-clip-text bg-gradient-to-r from-[#013DC4] to-[#0034A7] "> Work</span><br /></h1>

                            <p className="place-self-center sm:text-[11px] text-[9px]  tracking-wider xl:pt-[20px] lg:pt-[10px] pt-[5px] pb-[10px] sm:max-w-md max-w-[350px] leading-3 sm:leading-4 xl:leading-5 ">People expect more experience than ever before. Digiatto intersects customer experiences and design to create immersive solutions that shouts details. Making it easy and everlastingly memorable. Scroll to feel.</p>

                            <div className="slide-in-elliptic-top-fwd  mx-auto xl:pt-[30px] lg:pt-[20px] pt-[10px] flex justify-center items-center ">
                                <button
                                    className=" hover:scale-105 duration-500 btn-grad sm:text-[15px] lg:text-[17px] text-[10px] lg:px-[28px] px-[15px] rounded sm:py-[7px] py-[5px] place-self-center flex justify-center items-center gap-x-1 "> Let&apos;s Talk
                                    <FiArrowUpRight className="sm:pt-[2px] pt-[1px] sm:text-[22px] text-[14px] " />
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Studies