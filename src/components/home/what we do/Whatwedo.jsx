import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import "./Whatwedo.css"

function Whatwedo() {
    const [whatwedo, setWhatwedo] = useState([])



    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/whatwedo")
            const limitedData = res.data.slice(0, 6);
            setWhatwedo(limitedData);
        }
        catch (error) {
            console.log('Error', error.message);
        }

    };



    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="gradient">
                <div className="star w-[full]  mx-auto  2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] h-auto lg:py-[100px]  sm:py-[80px] py-[50px] text-center  ">

                    <h4 className=" subheading  sm:pb-[25px] pb-[10px]  "> WHAT WE DO </h4>
                    <h1 className="heading  xl:pb-[15px] pb-[5px] ">We Provide The Best Service For you</h1>
                    <p className=" paragraph ">We’re helping clients to create with our talented expert.
                    </p>

                    <div className=" xl:pt-[120px] pt-[50px] grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 xl:gap-12  md:gap-10 sm:gap-7  gap-4 place-content-center ">


                        {whatwedo.map((item, index) => (
                            <div data-aos="fade-down" className="" key={index + 1}>
                                <div className="group relative hover:-translate-y-4 duration-500 text-start w-full">
                                    <div className="absolute grid top-[-12%] left-[4%] group group-hover:shadow-[0px_0px_32.06px_2px_#21194F]  border border-solid border-[#003CC4] rounded-lg    bg-[#011135] xl:h-[70px] h-[60px] xl:w-[70px] w-[60px]    ">
                                        <img src={item.image} alt="" className=" place-self-center h-auto w-[100%] rounded-lg " />
                                    </div>
                                    <div className="group group-hover:shadow-[0px_0px_20.06px_7px_#21194F]  h-auto w-full     py-5 px-[20px] mt-[40px] bg-[#011135] static  border border-solid border-[#003CC4] rounded-lg">

                                        <p className="xl:pt-[50px] pt-[35px] sm:pt-[40px] md:pt-[40px] pb-[10px]  md:pb-[20px] xl:text-[20px] text-[18px] font-medium">{item.title}</p>
                                        <p className=" max-w-xs xl:text-[13px] text-[11px] text-wrap xl:pb-[25px] pb-[10px]">{item.description}</p>
                                        <button
                                            className=" group-hover:text-[#FCB71B] pt-[10px] sm:pt-[18px] md:pt-[22px] xl:text-[15px] text-[12px] text-[#003CC4] xl:py-[5px]  flex justify-center gap-x-1 ">
                                            Read More <FiArrowUpRight className=" stroke-[#003CC4] xl:text-[20px] text-[16px]  group-hover:stroke-[#FCB71B] mt-[1px]" />
                                        </button>


                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Whatwedo