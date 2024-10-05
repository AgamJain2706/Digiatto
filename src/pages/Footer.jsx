

import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Footer() {
    const [footer, setFooter] = useState([])
    const [links, setLinks] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/footer")
            setFooter(res.data);
        }
        catch (error) {
            console.log('Error', error.message);
        }

    };
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
        fetchData();
        fetchLinks();
    }, []);

    return (
        <section>
            <hr className="border-0 h-[1px] bg-yellow-400" />

            <div className="bg-[#011034] 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] pb-[10px] pt-[25px] sm:pt-[40px]  lg:pt-[60px]  ">
                {footer.map((item, index) => (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 text-white " key={index + 1}>
                        <div className=" grid grid-rows-2 ">
                            <div>
                                <img className=" lg:h-[40px] h-[30px] mb-[10px] sm:mb-[15px] lg:mb-[25px] w-auto" src={item.logo} alt="" />
                                <h5 className="text-[11px] lg:text-[14px] sm:max-w-[250px] lg:max-w-[300px]">{item.description}</h5>
                            </div>

                            <div className="flex gap-2.5 sm:gap-2 pt-[15px] sm:pt-[0px] lg:pt-[25px]">
                                {links.map((item, index) => (

                                    <div className="group rounded-full h-[38px] bg-transparent border border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300" key={index + 1}>
                                        <Link to={item.link} target="_blank">
                                            <img src={item.image} alt="" className="w-full h-full " />
                                        </Link>
                                    </div>
                                ))}


                            </div>
                        </div>

                        <div className=" text-[13px] lg:text-[15px] lg:leading-8 sm:leading-6 pb-[12px] lg:pb-[50px] sm:pb-[18px]" >
                            <h3 className="pb-[5px] text-[18px] sm:pb-[10px] lg:pb-[15px]  text-[#FCB71B] font-bold tracking-widest">Services</h3>
                            {item.services.map((item, index) => (
                                <h6 key={index + 1}>{item.text}</h6>

                            ))}
                        </div>
                        <div className="text-[13px] lg:text-[15px] lg:leading-8 sm:leading-6 pb-[12px] lg:pb-[50px] sm:pb-[18px]">
                            <h3 className="pb-[5px] text-[18px] sm:pb-[10px] lg:pb-[15px]  text-[#FCB71B] font-bold tracking-widest">Industry Solutions</h3>

                            {item.industry_solutions.map((item, index) => (
                                <h6 key={index + 1}>{item.text}</h6>

                            ))}
                        </div>

                        <div className="text-[13px] lg:text-[15px] lg:leading-8 sm:leading-6 pb-[12px] lg:pb-[50px] sm:pb-[18px] relative  ">

                            <h1 className=" pb-[5px] sm:pb-[10px]  lg:pb-[15px] text-[18px] text-[#FCB71B] font-bold tracking-widest">Digiatto Newsletter</h1>
                            <h3 className="mb-[20px] sm:mb-[20px] leading-5">Don’t worry your email is secure with us, We will use to share latest updates straight to your inbox!</h3>

                            <input className="mb-[8px] p-2 pl-5 text-[13px] rounded w-full h-[40px] bg-transparent border-solid  border border-[#003CC4]" type="text" placeholder="Enter Your Email Here" />


                            <button
                                className="hover:scale-105 duration-500 btn-grad lg:text-[17px] sm:text-[14px] text-[12px] sm:px-[32px] px-[10px] rounded py-[5px] place-self-center flex justify-center items-center gap-x-1 mb-3 sm:mb-0">
                                Subscribe
                            </button>




                        </div>
                    </div>
                ))}
                <hr className="border-0 h-[1px] bg-[#0036B0] lg:mb[0px] sm:mb-[10px] mb-[15px]" />
                <div className=" lg:flex inline   justify-between text-white py-[25px]   text-xs lg:text-base ">
                    <div className=""> ©2024 Digiatto IT Services All Right Reserved. </div>
                    <div className="flex w-50 justify-start sm:flex-end mt-2 sm:mt-0">
                        <div > Privacy Policy</div>
                        <div className="ms-4"> Terms Of Service</div>
                    </div>
                </div>
            </div>
        </section>





    )
}

export default Footer