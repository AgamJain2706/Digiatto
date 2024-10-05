import { FiArrowUpRight } from 'react-icons/fi'
import { IoArrowForwardCircle } from 'react-icons/io5'
import { useEffect, useState } from 'react';
import "./Ourproject.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function Ourproject() {

    const navigate = useNavigate()

    const gotToNewPage = () => {
        navigate("/portfolio");
    }

    const [project, setProject] = useState([])





    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/project")
            const limitedData = res.data.slice(0, 6);
            setProject(limitedData);

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
            <div className=" 2xl:px-[60px] xl:px-[45px]  lg:px-[35px] sm:px-[30px] px-[20px] md:pb-[50px] sm:pb-[30px] pb-[50px]  xl:pt-[50px] ">
                <div className=" md:flex justify-between">
                    <div className="md:w-[50%]">
                        <h4 className="subheading  ">OUR PROJECT</h4>
                        <h1 className=" heading  xl:pt-[30px] lg:pt-[25px]  xl:pb-[18px] sm:pt-[15px] sm:pb-[8px] pt-[10px] pb-[5px]">The Work We Have Done</h1>
                        <p className="text-[#EAE5E5] paragraph sm:max-w-md lg:sm:max-w-full">Customer Experience is everything! We design & create solutions by spotting customers’ actions, emotions,  and unmet needs. We make enterprises that impact lives.
                        </p>
                    </div>

                    <div >
                        <div className="sm:pt-[30px] pt-[20px] pr-[20px]">
                            <button onClick={() => gotToNewPage()}
                                className="hover:scale-105 text-right duration-500 btn-grad  sm:text-[13px] lg:text-[17px]  text-[10px] sm:px-[15px] lg:px-[25px] px-[7px] rounded md:py-[10px] py-[5px] place-self-center flex justify-center items-center gap-x-1 ">
                                See More <FiArrowUpRight className="lg:mt-[2px] mt-[1px] sm:text-[17px] lg:text-[22px] text-[17px] " />
                            </button>
                        </div>
                    </div>
                </div>




                <div className=" sm:pt-[50px] pt-[40px] grid xl:grid-cols-3 sm:grid-cols-2  grid-cols-1  sm:gap-10  gap-5  ">

                    {project.map((item, index) => (
                        <>

                            <Link to={`/innerportfolio/${item._id}`}>

                                <div data-aos="flip-left" key={index + 1}
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000"
                                    className="flip-card place-self-center">
                                    <div className="flip-card-inner cursor-pointer">

                                        <div className="rounded-lg flip-card-front image2 " >
                                            <img className='image2 rounded-lg' src={item.image} alt="" />
                                        </div>

                                        <div className="flip-card-back rounded-lg  ">
                                            <p className="sm:text-[17px] xl:leading-8  md:leading-7 leading-5 2xl:text-[30px] xl:text-[23px] lg:text-[25px] md:text-[22px] text-[20px] 2xl:pt-[60px] xl:pt-[35px] lg:pt-[60px]  md:pt-[30px] sm:pt-[20px] pt-[40px] px-[30px] text-[#fcb71b]">{item.subtitle}</p>
                                            <p className="sm:pt-[0px] lg:pt-[10px] pt-[10px] md:text-[12px] text-[10px] px-[30px]">{item.description}</p>
                                            <button className=" mx-auto flex justify-center md:pt-4 pt-4 text-3xl sm:pb-[20px] pb-[30px]">
                                                <IoArrowForwardCircle className="text-[#FCB71B] " />
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </Link>
                        </>


                    ))}

                </div>
            </div>
        </>
    )
}

export default Ourproject




