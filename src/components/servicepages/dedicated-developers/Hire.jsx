import { FiArrowUpRight } from "react-icons/fi"
import "./Hire.css"
import { useEffect, useState } from "react";
import axios from "axios";
function Hire() {
    const [whatwedo1, setWhatwedo1] = useState([])
    const [whatwedo2, setWhatwedo2] = useState([])
    const [whatwedo3, setWhatwedo3] = useState([])
    const [whatwedo4, setWhatwedo4] = useState([])



    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/hireme")
            const limitedData1 = res.data.slice(0, 6);
            const limitedData2 = res.data.slice(6, 7);
            const limitedData3 = res.data.slice(7, 13);
            const limitedData4 = res.data.slice(13, 16);
            setWhatwedo1(limitedData1);
            setWhatwedo2(limitedData2);
            setWhatwedo3(limitedData3);
            setWhatwedo4(limitedData4);

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
                <div className="  2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]  xl:py-[100px] xl:pt-[80px] sm:pt-[60px] pt-[50px]">

                    <div className=" justify-center w-[full] mx-auto  h-auto   text-center max-w-xl">
                        <h4 className="subheading uppercase xl:pb-[30px] lg:pb-[25px] sm:pb-[20px] pb-[10px]  ">Hire Developers </h4>
                        <h1 className=" heading  xl:pb-[18px] lg:pb-[10px] md:pb-[8px] pb-[5px]  ">Focus on what you do best, let us handle the code</h1>
                        <div className="flex justify-center ">

                            <p className="text-[#EAE5E5] paragraph sm:max-w-md lg:sm:max-w-md  ">Hire developers who seamlessly integrate with your team, ensuring a smooth and successful development journey.</p>
                        </div>
                    </div>
                    <div className="grid xl:gap-y-20 2xl:gap-y-28   lg:gap-y-14 sm:gap-10">


                        <div className=" xl:pt-[80px] pt-[50px] grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 xl:gap-y-20 2xl:gap-y-28   lg:gap-y-14  sm:gap-y-10 lg:gap-x-10 sm:gap-x-10   lg:pb-[0px]">

                            {whatwedo1.map((item, index) => (<div data-aos="fade-down" className=" 2xl:pt-[80px] xl:pt-[50px] pt-[30px]" key={index + 1}>
                                <div className="group relative hover:-translate-y-4 duration-500 text-start">
                                    <div className=" grid absolute 2xl:top-[-42%] xl:top-[-30%] lg:top-[-25%]  top-[-20%] left-[4%] group group-hover:shadow-[0px_0px_32.06px_2px_#21194F]  border border-solid border-[#003CC4] rounded-lg    bg-[#011135] 2xl:h-[150px] xl:h-[110px] md:h-[95px] h-[80px] 2xl:w-[50%] xl:w-[150px] md:w-[130px]  w-[100px]    ">
                                        <img src={item.image} alt="" className="rounded-lg langimg  place-self-center" />
                                    </div>
                                    <div className="group group-hover:shadow-[0px_0px_20.06px_7px_#21194F]   w-full   py-5 px-[20px] mt-[40px] bg-[#011135] static  border border-solid border-[#003CC4] rounded-lg">

                                        <h1 className="xl:pt-[50px] pt-[35px] sm:pt-[40px] md:pt-[40px] pb-[10px]  md:pb-[20px] xl:text-[20px] text-[18px] font-medium">{item.title}</h1>
                                        {/* <p className="  xl:text-[13px] text-[11px] text-wrap xl:pb-[25px] pb-[10px]">{item.description}</p> */}
                                        <h5 className="xl:text-[13px] text-[11px] h-[9vh]  text-wrap xl:pb-[25px] pb-[10px]"> {item.description.length > 130 ?
                                            `${item.description.substring(0, 130)}...` : item.description
                                        }</h5>

                                        <button
                                            className=" group-hover:text-[#FCB71B] pt-[10px] sm:pt-[18px] md:pt-[22px] xl:text-[15px] text-[12px] text-[#003CC4] xl:py-[5px]  flex justify-center gap-x-1 ">
                                            Hire Now <FiArrowUpRight className=" stroke-[#003CC4] xl:text-[20px] text-[16px]  group-hover:stroke-[#FCB71B] mt-[1px]" />
                                        </button>
                                    </div>
                                </div>
                            </div>))}

                        </div>



                        <div className="">
                            <div className=" grid  lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 xl:gap-y-20 2xl:gap-y-28   lg:gap-y-14  sm:gap-y-10 lg:gap-x-10 sm:gap-x-10  ">
                                <div data-aos="fade-up"
                                    className="hidden sm:block hireimg1 lg:col-span-2  rounded-lg sm:mt-[15px]"></div>

                                {whatwedo2.map((item, index) => (<div data-aos="fade-down" className=" 2xl:pt-[80px] xl:pt-[50px] pt-[30px]" key={index + 1}>
                                    <div className="group relative hover:-translate-y-4 duration-500 text-start">
                                        <div className=" grid absolute 2xl:top-[-42%] xl:top-[-30%] lg:top-[-25%]  top-[-20%] left-[4%] group group-hover:shadow-[0px_0px_32.06px_2px_#21194F]  border border-solid border-[#003CC4] rounded-lg    bg-[#011135] 2xl:h-[150px] xl:h-[110px] md:h-[95px] h-[80px] 2xl:w-[50%] xl:w-[150px] md:w-[130px]  w-[100px]    ">
                                            <img src={item.image} alt="" className="rounded-lg langimg  place-self-center" />
                                        </div>
                                        <div className="group group-hover:shadow-[0px_0px_20.06px_7px_#21194F]   w-full   py-5 px-[20px] mt-[40px] bg-[#011135] static  border border-solid border-[#003CC4] rounded-lg">

                                            <h1 className="xl:pt-[50px] pt-[35px] sm:pt-[40px] md:pt-[40px] pb-[10px]  md:pb-[20px] xl:text-[20px] text-[18px] font-medium">{item.title}</h1>
                                            {/* <p className="  xl:text-[13px] text-[11px] text-wrap xl:pb-[25px] pb-[10px]">{item.description}</p> */}
                                            <h5 className="xl:text-[13px] text-[11px] h-[9vh]  text-wrap xl:pb-[25px] pb-[10px]"> {item.description.length > 130 ?
                                                `${item.description.substring(0, 130)}...` : item.description
                                            }</h5>

                                            <button
                                                className=" group-hover:text-[#FCB71B] pt-[10px] sm:pt-[18px] md:pt-[22px] xl:text-[15px] text-[12px] text-[#003CC4] xl:py-[5px]  flex justify-center gap-x-1 ">
                                                Hire Now <FiArrowUpRight className=" stroke-[#003CC4] xl:text-[20px] text-[16px]  group-hover:stroke-[#FCB71B] mt-[1px]" />
                                            </button>
                                        </div>
                                    </div>
                                </div>))}

                            </div>
                        </div>


                        <div className="">
                            <div className="  grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 xl:gap-y-20 2xl:gap-y-28   lg:gap-y-14  sm:gap-y-10 lg:gap-x-10 sm:gap-x-10   ">

                                {whatwedo3.map((item, index) => (<div data-aos="fade-down" className=" 2xl:pt-[80px] xl:pt-[50px] pt-[30px]" key={index + 1}>
                                    <div className="group relative hover:-translate-y-4 duration-500 text-start">
                                        <div className=" grid absolute 2xl:top-[-42%] xl:top-[-30%] lg:top-[-25%]  top-[-20%] left-[4%] group group-hover:shadow-[0px_0px_32.06px_2px_#21194F]  border border-solid border-[#003CC4] rounded-lg    bg-[#011135] 2xl:h-[150px] xl:h-[110px] md:h-[95px] h-[80px] 2xl:w-[50%] xl:w-[150px] md:w-[130px]  w-[100px]    ">
                                            <img src={item.image} alt="" className="rounded-lg langimg  place-self-center" />
                                        </div>
                                        <div className="group group-hover:shadow-[0px_0px_20.06px_7px_#21194F]   w-full   py-5 px-[20px] mt-[40px] bg-[#011135] static  border border-solid border-[#003CC4] rounded-lg">

                                            <h1 className="xl:pt-[50px] pt-[35px] sm:pt-[40px] md:pt-[40px] pb-[10px]  md:pb-[20px] xl:text-[20px] text-[18px] font-medium">{item.title}</h1>
                                            {/* <p className="  xl:text-[13px] text-[11px] text-wrap xl:pb-[25px] pb-[10px]">{item.description}</p> */}
                                            <h5 className="xl:text-[13px] text-[11px] h-[9vh]  text-wrap xl:pb-[25px] pb-[10px]"> {item.description.length > 130 ?
                                                `${item.description.substring(0, 130)}...` : item.description
                                            }</h5>

                                            <button
                                                className=" group-hover:text-[#FCB71B] pt-[10px] sm:pt-[18px] md:pt-[22px] xl:text-[15px] text-[12px] text-[#003CC4] xl:py-[5px]  flex justify-center gap-x-1 ">
                                                Hire Now <FiArrowUpRight className=" stroke-[#003CC4] xl:text-[20px] text-[16px]  group-hover:stroke-[#FCB71B] mt-[1px]" />
                                            </button>
                                        </div>
                                    </div>
                                </div>))}


                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 xl:gap-y-20 2xl:gap-y-28   lg:gap-y-14  sm:gap-y-10 lg:gap-x-10 sm:gap-x-10 pb-[60px]">
                            <div className="grid xl:gap-y-20 2xl:gap-y-28   lg:gap-y-14 sm:gap-y-10">
                                {whatwedo4.map((item, index) => (<div data-aos="fade-down" className=" 2xl:pt-[80px] xl:pt-[50px] pt-[30px]" key={index + 1}>
                                    <div className="group relative hover:-translate-y-4 duration-500 text-start">
                                        <div className=" grid absolute 2xl:top-[-42%] xl:top-[-30%] lg:top-[-25%]  top-[-20%] left-[4%] group group-hover:shadow-[0px_0px_32.06px_2px_#21194F]  border border-solid border-[#003CC4] rounded-lg    bg-[#011135] 2xl:h-[150px] xl:h-[110px] md:h-[95px] h-[80px] 2xl:w-[50%] xl:w-[150px] md:w-[130px]  w-[100px]    ">
                                            <img src={item.image} alt="" className="rounded-lg langimg  place-self-center" />
                                        </div>
                                        <div className="group group-hover:shadow-[0px_0px_20.06px_7px_#21194F]   w-full   py-5 px-[20px] mt-[40px] bg-[#011135] static  border border-solid border-[#003CC4] rounded-lg">

                                            <h1 className="xl:pt-[50px] pt-[35px] sm:pt-[40px] md:pt-[40px] pb-[10px]  md:pb-[20px] xl:text-[20px] text-[18px] font-medium">{item.title}</h1>
                                            {/* <p className="  xl:text-[13px] text-[11px] text-wrap xl:pb-[25px] pb-[10px]">{item.description}</p> */}
                                            <h5 className="xl:text-[13px] text-[11px] h-[9vh]  text-wrap xl:pb-[25px] pb-[10px]"> {item.description.length > 130 ?
                                                `${item.description.substring(0, 130)}...` : item.description
                                            }</h5>

                                            <button
                                                className=" group-hover:text-[#FCB71B] pt-[10px] sm:pt-[18px] md:pt-[22px] xl:text-[15px] text-[12px] text-[#003CC4] xl:py-[5px]  flex justify-center gap-x-1 ">
                                                Hire Now <FiArrowUpRight className=" stroke-[#003CC4] xl:text-[20px] text-[16px]  group-hover:stroke-[#FCB71B] mt-[1px]" />
                                            </button>
                                        </div>
                                    </div>
                                </div>))}
                            </div>
                            <div className="relative lg:col-span-2 mt-[20px] min-h-[60vh] ">
                                <div data-aos="zoom-in" className="absolute hireimg1 sm:h-[90vh] h-[50vh] sm:w-[35vw] w-[50vw] right-0  rounded-lg">
                                </div>

                                <div data-aos="zoom-out-up" className="absolute hireimg1 xl:h-[100vh] 2xl:h-[109vh] sm:h-[95vh] h-[50vh] sm:w-[35vw] w-[50vw] xl:top-[42%] sm:top-[45%] top-[18%] left-0 xl:left-25 right-11 col-span-2 rounded-lg">
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Hire