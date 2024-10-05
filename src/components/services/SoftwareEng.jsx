import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import "./SoftwareEng.css"

function SoftwareEng() {
    const [whatwedo, setWhatwedo] = useState([])
    const [whatwedo1, setWhatwedo1] = useState([])



    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/whatwedo")
            const limitedData = res.data.slice(0, 2);
            const limitedData1 = res.data.slice(2, 8);


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
        <section className=" aboutgrad2">

            <div className="clientsaroundbg 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] pb-[0px]  pt-[40px] lg:pt-[80px]  2xl:pt-[120px]">


                <div className="grid gap-4 sm:grid-cols-2  text-[white]">

                    <div className="place-content-center">
                        <div className="lg:pt-[50px] sm:pt-[20px] pb-[30px] sm:pb-[50px] lg:pb-[0px] place-self-center">
                            <h4 className="uppercase subheading 2xl:pb-[25px] ">Software Engineering</h4>
                            <h1 className="heading sm:pt-[15px] pt-[10px] max-w-full 2xl:max-w-xs lg:pb-[8px] pb-[5px] sm:pb-[8px]" >Level Up Your Tech Stack</h1>
                            <div className="max-w-full md:max-w-2xl ">
                                <p className="paragraph">Expert Software Engineering Services</p>
                            </div>
                        </div>
                        <div className=" 2xl:pt-[100px] sm:pt-[40px] pt-[10px] ">
                            <div className="grid gap-4">
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
                        </div>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-1  sm:max-w-full max-w-[80%] mx-auto relative ">
                            <div className="absolute left-0 softimg1 images 2xl:h-[620px] xl:h-[500px] sm:h-[450px]  h-[200px] w-[44%] z-10 rounded-xl"></div>
                            <div className=" place-self-end softimg2 images 2xl:h-[740px] xl:h-[620px] sm:h-[550px]  h-[250px] w-[60%] rounded-xl"></div>
                        </div>
                    </div>
                </div>

                <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-[30px] sm:pb-[30px] lg:pb-[50px]   ">
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
        </section>
    )
}

export default SoftwareEng