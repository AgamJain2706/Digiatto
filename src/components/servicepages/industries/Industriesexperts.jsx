import { FiArrowUpRight } from "react-icons/fi"
import "./Industriesexperts.css"
import axios from "axios";
import { useEffect, useState } from "react";
function Industriesexperts() {
    const [experties, setExperties] = useState([])




    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/expertise")
            setExperties(res.data);
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

                <div className="  2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]  xl:pt-[100px] lg:pt-[80px] sm:pt-[60px] pt-[50px]">

                    <div className="lg:pb-[80px] sm:pb-[60px] pb-[30px]  justify-center w-[full] mx-auto  h-auto   text-center ">
                        <h4 className="subheading uppercase xl:pb-[30px] lg:pb-[25px] sm:pb-[20px] pb-[10px]  "> We are experts in</h4>
                        <h1 className=" heading  xl:pb-[18px] lg:pb-[10px] md:pb-[8px] pb-[5px] ">Industries We Serve</h1>
                        <div className="flex justify-center ">

                            <p className="text-[#EAE5E5] paragraph sm:max-w-md lg:sm:max-w-2xl  ">Customer Experience is everything! We design & create solutions by spotting customers’ actions, emotions, and unmet needs. We make enterprises that impact lives.
                            </p>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-[50px]   xl:gap-15 gap-10">

                        {experties.map((item, index) => (
                            <div data-aos="zoom-in" className=" grid 2xl:gap-6 gap-3 w-[90%] sm:w-full mx-auto" key={index + 1}>
                                <div className="group hover:scale-105 duration-300   lg:h-[40vh] h-[45vh] rounded-lg relative" >
                                    <img src={item.image} alt="" className="group-hover:scale-105 duration-300 rounded-lg images absolute w-full h-full" />

                                    <button
                                        className="invisible group-hover:scale-105  duration-300 absolute group-hover:visible text-[#0d034d] font-black bg-[#FCBB25] opacity-70 w-full h-full rounded-lg  flex justify-center items-center gap-x-1 "> Explore More
                                        <FiArrowUpRight className=" pt-[1px] stroke-[#0d034d]  sm:text-[22px] text-[17px] " />
                                    </button>

                                </div>
                                <div className="text-center grid xl:gap-1 ">
                                    <h4 className="2xl:text-[20px] lg:text-[18px] text-[15px]">{item.topic}</h4>
                                    {/* <h5 className="2xl:text-[12px] lg:text-[11px] text-[9px]">{item.description}</h5> */}
                                    <p className="2xl:text-[12px] lg:text-[11px] text-[9px]"> {item.description.length > 140 ?
                                        `${item.description.substring(0, 140)}...` : item.description
                                    }</p>




                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Industriesexperts
