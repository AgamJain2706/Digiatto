
import Form from "./Form"

import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

function Dropform() {
    const [links, setLinks] = useState([])

    const fetchLinks = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/sociallinks")
            setLinks(res.data);
        }
        catch (error) {
            console.log('Error', error.message);
        }

    };
    useEffect(() => {
        fetchLinks();
    }, []);


    return (
        <>
            <section>
                <div className=" 2xl:pb-[140px] lg:pb-[70px] pb-[35px]  bg-[#000E26]  sm:grid grid-cols-2 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] lg:pt-[0px] 2xl:pt-[30px] text-[white] gap-5  ">

                    <div className="pt-[40px]  sm:pb-[50px] lg:pb-[50px] md:pb-[40px]">
                        <h4 className="subheading ">DROP US A LINE</h4>
                        <h1 className="heading  pt-[20px] sm:pt-[15px] xl:pt-[40px]    xl:pb-[13px]" >Connect With Digiatto’s Expert</h1>
                        <div className="lg:max-w-sm sm:max-w-md xl:pt-[15px] pt-[8px] ">
                            <p className="paragraph">Ready to take the first step towards unlocking opportunities, realizing goals, and embracing innovation? We&apos;re here and eager to connect.
                            </p>
                        </div>

                        <div className=" grid  md:grid-cols-1 ">
                            <div>
                                <div className="lg:pt-[50px] pt-[30px] flex">
                                    <div className=" bg-[#011135] sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] rounded-lg border-solid border-2 border-[#003CC4] border-opacity-80 shadow-[0px_0px_20px_3px_#08175F] ">
                                    </div>
                                    <div className="sm:pl-[20px] text-[10px] sm:text-[14px] pl-[15px] font-semibold	">
                                        <p>To More Inquiry</p>
                                        <a className="text-[#FDB61B]" href={`tel:${"+91 81096 07075"}`}>{"+91 81096 07075"}</a>
                                    </div>
                                </div>
                                <div className="pt-[15px] sm:pt-[30px] flex">
                                    <div className=" bg-[#011135] sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] rounded-lg border-solid border-2 border-[#003CC4] border-opacity-80 shadow-[0px_0px_20px_3px_#08175F] ">
                                    </div>
                                    <div className="sm:pl-[20px] text-[10px] sm:text-[14px] pl-[15px] font-semibold">
                                        <p>To Send Mail</p>
                                        <a className="text-[#FDB61B]" href="mailto:info@digiatto.com">info@digiatto.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-[20px] md:pb-0 ">

                                <h5 className="sm:pt-[30px] sm:pb-[10px]  text-[16px] sm:text-[20px] lg:text-[16px]  pb-[5px] pt-[20px]">Social Just You Connected Us!</h5>


                                <div className="">
                                    <div className="flex gap-2 ">
                                        {links.map((item, index) => (
                                            <div className="group rounded-full h-[38px] bg-transparent border border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300" key={index + 1}>
                                                <Link to={item.link} target="_blank">
                                                    <img src={item.image} alt="" className="w-full h-full " />
                                                </Link>
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <Form />
                </div>
            </section>
        </>
    )
}

export default Dropform