import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";

function Digitalautomation() {
    const [whatwedo, setWhatwedo] = useState([])
    const [whatwedo1, setWhatwedo1] = useState([])



    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/whatwedo")
            const limitedData = res.data.slice(8, 10);
            const limitedData1 = res.data.slice(10, 12);


            setWhatwedo(limitedData);
            setWhatwedo1(limitedData1);

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
                <div className="star  2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]  mx-auto  2xl:py-[70px] xl:py-[50px] lg:pt-[30px]   sm:pb-[40px] text-center  ">
                    <div className="pt-[30px]">

                        <h4 className=" subheading  sm:pb-[25px] pb-[10px] uppercase "> From Manual to Magic </h4>
                        <h1 className="heading  xl:pb-[15px] pb-[5px] ">Unleash the Power of Digital Automation</h1>
                        <p className=" paragraph ">Automate Your Way to Success
                        </p>
                    </div>
                    <div className=" xl:pt-[80px] sm:pt-[60px] pt-[40px]  md:gap-10 gap-4 flex sm:flex-row flex-col justify-between ">
                        {whatwedo.map((item, index) => (
                            <div data-aos="fade-down" className="  max-w-[450px]  " key={index + 1} >
                                <div className="grid grid-cols-[20%_auto] md:grid-cols-[17%_auto] lg:grid-cols-[13%_auto] xl:grid-cols-[15%_auto] group  hover:-translate-y-4 duration-500 text-start  py-5  ">
                                    <div className=" -mt-3 group group-hover:shadow-[0px_0px_32.06px_2px_#21194F]  border border-solid border-[#003CC4] rounded-lg bg-[#011135] 2xl:w-[70px] 2xl:h-[70px] xl:w-[60px] xl:h-[60px]   w-[50px] h-[50px]    ">
                                        <img src={item.image} alt="" className=" place-self-center h-auto w-[100%] rounded-lg " />
                                    </div>
                                    <div className="group md:px-[10px] 2xl:px-[20px] sm:px-[5px]    ">
                                        <h3 className="leading-6 pb-[10px]  md:pb-[20px] xl:text-[20px] text-[18px] font-medium">{item.title}</h3>
                                        <p className=" max-w-xs xl:text-[13px] text-[10px] text-wrap 2xl:pb-[25px] xl:pb-[15px] pb-[2px]">{item.description}</p>
                                        <button
                                            className=" group-hover:text-[#FCB71B] pt-[10px] sm:pt-[18px] md:pt-[22px] xl:text-[15px] text-[12px] text-[#003CC4] xl:py-[5px]  flex justify-center gap-x-1 ">
                                            Read More <FiArrowUpRight className=" stroke-[#003CC4] xl:text-[20px] text-[16px]  group-hover:stroke-[#FCB71B] mt-[1px]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" lg:pt-[30px] pt-[20px]  md:gap-10 gap-4 flex sm:flex-row flex-col justify-evenly ">
                        {whatwedo1.map((item, index) => (
                            <div data-aos="fade-down" className="  max-w-[450px]  " key={index + 1} >
                                <div className="grid grid-cols-[20%_auto] md:grid-cols-[17%_auto] lg:grid-cols-[13%_auto] xl:grid-cols-[15%_auto] group  hover:-translate-y-4 duration-500 text-start  py-5  ">
                                    <div className=" -mt-3 group group-hover:shadow-[0px_0px_32.06px_2px_#21194F]  border border-solid border-[#003CC4] rounded-lg bg-[#011135] 2xl:w-[70px] 2xl:h-[70px] xl:w-[60px] xl:h-[60px]   w-[50px] h-[50px]    ">
                                        <img src={item.image} alt="" className=" place-self-center h-auto w-[100%] rounded-lg " />
                                    </div>
                                    <div className="group md:px-[10px] 2xl:px-[20px] sm:px-[5px]    ">
                                        <h3 className="leading-6 pb-[10px]  md:pb-[20px] xl:text-[20px] text-[18px] font-medium">{item.title}</h3>
                                        <p className=" max-w-xs xl:text-[13px] text-[10px] text-wrap 2xl:pb-[25px] xl:pb-[15px] pb-[2px]">{item.description}</p>
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

export default Digitalautomation