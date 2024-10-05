import { FiArrowUpRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import axios from 'axios';
import "./Technologies.css"

function Technologies() {
    const [technologies, setTechnologies] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/whatwedo")
            const limitedData = res.data.slice(0, 4);
            setTechnologies(limitedData);
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
            <div className="techgradient">

                <div className="  flex justify-center w-[full] mx-auto  h-auto xl:pt-[140px] lg:pt-[80px] sm:pt-[60px] pt-[50px]  text-center 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">

                    <div className="max-w-xl ">
                        <h4 className="subheading xl:pb-[30px] lg:pb-[25px] sm:pb-[20px] pb-[10px]  "> TECHNOLOGIES </h4>
                        <h1 className=" heading  xl:pb-[18px] lg:pb-[10px] md:pb-[8px] pb-[5px] ">We’re the Masters of Next Generation Technologies</h1>
                        <div className="flex justify-center ">

                            <p className="text-[#EAE5E5] paragraph sm:max-w-md lg:sm:max-w-full  ">Feel the disruption. As we accelerate the technological revolution with our  smart and simplified solutions- powered by next-gen technologies.  Get started and engineer the unexpected for your better tomorrow.
                            </p>
                        </div>
                    </div>
                </div>


                <div className=" xl:pt-[100px] lg:pt-[70px]  pt-[50px] grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1  place-content-center   gap-10 pb-[30px] text-[white] 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">
                    {technologies.map((item, index) => (
                        <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" key={index + 1}>
                            <div className="hover:-translate-y-4 lg:min-h-[400px]    group hover:shadow-[0px_0px_32.06px_2px_#21194F] duration-500 mx-auto w-full text-center grid lg:grid-rows-[30%_50%_auto]   rounded-lg lg:p-[20px] md:p-[15px] p-[20px]  border-solid border border-[#003CC4] ">
                                <div className=" grid grid-cols-[70%_auto]  ">
                                    <h1 className=" 2xl:text-[21px] lg:text-[20px] md:text-[18px] text-[17px] text-start lg:leading-8  leading-7 lg:font-semibold">{item.title}</h1>
                                    <div className="grid border-solid border rounded group-hover:shadow-[0px_0px_32.06px_2px_#21194F] duration-500 justify-self-end lg:w-[70px] lg:h-[70px] w-[55px] h-[55px] bg-[#010D28] border-[#003CC4]">
                                        <img src={item.image} alt="" className=" place-self-center h-auto w-[100%] rounded-lg " />
                                    </div>
                                </div>
                                <div>
                                    {
                                        !item.languages ? <></> : <> <div className="text-start pt-[20px] lg:pt-[0px] pb-[3px] lg:pb-[0px]  lg:text-[20px]  text-[13px] lg:leading-9 leading-7 ]">
                                            <div className='flex gap-5 '>
                                                <h5 className="w-[100%]">language</h5>
                                                {item.languages.map((item, index) => (
                                                    <div className="flex" key={index + 1}>
                                                        <img src={item.logo} alt="" className="self-center lg:w-[30%] lg:h-[40%] w-[20%] h-[20%]" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div></>
                                    }
                                    {
                                        !item.database ? <></> : <> <div className="text-start pt-[3px] lg:pt-[0px] pb-[3px] lg:pb-[0px]  lg:text-[20px]  text-[13px] lg:leading-9 leading-7 ]">
                                            <div className='flex gap-5 '>
                                                <h5 className="">database</h5>
                                                {item.database.map((item, index) => (
                                                    <div className="flex" key={index + 1}>
                                                        <img src={item.logo} alt="" className="self-center lg:w-[30%] lg:h-[40%] w-[20%] h-[20%]" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div></>
                                    }
                                    {
                                        !item.sdk ? <></> : <> <div className="text-start pt-[3px] lg:pt-[0px] pb-[3px] lg:pb-[0px]  lg:text-[20px]  text-[13px] lg:leading-9 leading-7 ]">
                                            <div className='flex gap-5 '>
                                                <h5 className="">sdk</h5>
                                                {item.sdk.map((item, index) => (
                                                    <div className="flex" key={index + 1}>
                                                        <img src={item.logo} alt="" className="self-center lg:w-[30%] lg:h-[40%] w-[20%] h-[20%]" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div></>
                                    }
                                    {
                                        !item.tools ? <></> : <> <div className="text-start pt-[3px] lg:pt-[0px] pb-[3px] lg:pb-[0px]  lg:text-[20px]  text-[13px] lg:leading-9 leading-7 ]">
                                            <div className='flex gap-5 '>
                                                <h5 className="">tools</h5>
                                                {item.tools.map((item, index) => (
                                                    <div className="flex" key={index + 1}>
                                                        <img src={item.logo} alt="" className="self-center lg:w-[30%] lg:h-[40%] w-[20%] h-[20%]" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div></>
                                    }
                                </div>
                                <div className="grid place-content-center  ">
                                    <button
                                        className="hover:bg-[#FCB61D] text-right duration-300 bg-[#003CC4]  xl:text-[17px] text-[12px] xl:px-[23px] px-[10px] rounded xl:py-[9px] py-[5px] place-self-center flex justify-center items-center gap-x-1 ">
                                        See More <FiArrowUpRight className=" mt-[1px] text-[20px] " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>

        </>
    )
}

export default Technologies