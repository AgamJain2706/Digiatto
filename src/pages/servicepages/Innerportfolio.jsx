import Dropform from "../../components/common/Dropform"
import "../../components/servicepages/industries/Industriesexperts.css"
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import goalimg from "../../assets/dynamicassets/blogtopic.jpeg"
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";

function Innerportfolio() {
    // slider 
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        pauseOnHover: true
    };


    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    }

    const id = useParams()
    const DataId = id.id;


    const [project, setProject] = useState('')

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://digiatto.onrender.com/project/${DataId}`)
            const limitedData = res.data;
            setProject(limitedData);
            console.log("limitedData", limitedData)

        }
        catch (error) {
            console.log('Error', error.message);
        }

    };
    console.log(project);


    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>



            <div className="grid xl:pt-[200px] lg:pt-[160px] md:pt-[130px] sm:pt-[100px] pt-[70px] xl:pb-[150px] lg:pb-[120px] md:pb-[60px]  sm:pb-[40px] pb-[30px]   2xl:pl-[60px] xl:pl-[45px] lg:pl-[35px] sm:pl-[30px] pl-[20px]">

                {/* {project?.map((item, index) => (
                    console.log("items", item)


                ))} */}



                <div className="grid grid-cols-2" >
                    <div className="max-w-xl self-center">
                        <p className=" wsubheading pb-[5px]  lg:pb-[20px]">{project.category}</p>
                        <p className=" wheading lg:pb-[20px] pb-[5px]">{project.title} : {project.subtitle}</p>
                        <p className=" wparagraph lg:pb-[25px] pb-[10px]">{project.description}</p>
                        <div className="max-w-[50%] sm:max-w-full md:max-w-[70%]  xl:max-w-[60%]  ">
                            <hr />
                            <div className="flex  place-content-between ">
                                <div className="grid sm:grid-cols-2 gap-1 sm:py-[20px] py-[10px] sm:px-[10px] place-items-center">
                                    <div className="ios demandimages h-[5vh] w-[5vw] place-self-center "></div>
                                    <h1 className="hidden sm:block ">iOS</h1>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-1 sm:py-[20px] py-[10px] sm:px-[10px] place-items-center">
                                    <div className="android demandimages h-[5vh] w-[5vw] place-self-center "></div>
                                    <h1 className="hidden sm:block ">Android</h1>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-1 sm:py-[20px] py-[10px] sm:px-[10px] place-items-center">
                                    <div className="web demandimages  h-[5vh] w-[5vw] place-self-center "></div>
                                    <h1 className="hidden sm:block ">web</h1>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* img */}
                    <div className=" shadow-[0px_0px_30.06px_4px_#0B114E] border-solid border border-[#24438d] bg-cover bg-center place-self-end rounded-l-lg w-[45vw] 2xl:h-[60vh] xl:h-[80vh] lg:h-[65vh] sm:h-[50vh]  h-[40vh]  ">
                        <img src={project.image} alt="" className=" rounded-l-lg h-full w-full" />
                    </div>
                </div>
            </div>

            <hr className='shadow-[0px_0px_10.06px_2px_#1f0aa2]  border border-solid border-[#003CC4]' />



            <div className="grid xl:gap-8 gap-1 xl:pt-[80px] lg:pt-[60px]  sm:pt-[40px] pt-[30px] xl:pb-[90px] lg:pb-[7px] sm:pb-[40px] pb-[30px]  2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] ">

                <div className="grid xl:grid-cols-[55%_auto] grid-cols-[65%_auto] min-h-[20vh]">
                    <div className="">
                        <h4 className="wsubheading xl:pb-[35px] sm:pb-[20px] pb-[10px]">About</h4>
                        <h1 className="wheading xl:pb-[20px] sm:pb-[12px] pb-[8px] ">{project.title} </h1>
                        <p className="wparagraph xl:pb-[50px] pb-[20px]"> {project.description}</p>
                    </div>
                    <div className="relative ">
                        <div className="rounded-lg absolute top-0 right-0  w-[25vw] xl:h-[35vh] h-full bg-cover bg-center  " >
                            <img src={project.image} alt="" className=" rounded-l-lg h-full w-full" />
                        </div>
                    </div>
                </div>
                <div className="grid xl:gap-8 gap-3 xl:max-w-[55%] pb-[30px]">
                    <h2 className="text-[#FDB61B] xl:text-[28px] text-[18px] font-normal ">Development Tools</h2>
                    <div className="grid grid-cols-6 xl:gap-8 gap-5  ">
                        <div className="grid xl:gap-2 gap-1 ">
                            <div className=" laravel demandimages h-[6vh] md:h-[7vh] xl:h-[8vh] w-[13vw] xl:w-full rounded-lg border-solid border  border-[#003CC4] shadow-[0px_0px_20.06px_3px_#21194F]"></div>
                            <h4 className="mx-auto md:text-[15px] text-[9px]">Laravel </h4>
                        </div>
                        <div className="grid xl:gap-2 md:gap-1 ">
                            <div className=" laravel demandimages h-[6vh] md:h-[7vh] xl:h-[8vh] w-[13vw] xl:w-full rounded-lg border-solid border  border-[#003CC4] shadow-[0px_0px_20.06px_3px_#21194F]"></div>
                            <h4 className="mx-auto md:text-[15px] text-[9px]">Laravel</h4>
                        </div>
                        <div className="grid xl:gap-2 md:gap-1 ">
                            <div className=" laravel demandimages h-[6vh] md:h-[7vh] xl:h-[8vh] w-[13vw] xl:w-full rounded-lg border-solid border  border-[#003CC4] shadow-[0px_0px_20.06px_3px_#21194F]"></div>
                            <h4 className="mx-auto md:text-[15px] text-[9px]">Laravel</h4>
                        </div>
                        <div className="grid xl:gap-2 md:gap-1 ">
                            <div className=" laravel demandimages h-[6vh] md:h-[7vh] xl:h-[8vh] w-[13vw] xl:w-full rounded-lg border-solid border  border-[#003CC4] shadow-[0px_0px_20.06px_3px_#21194F]"></div>
                            <h4 className="mx-auto md:text-[15px] text-[9px]">Laravel</h4>
                        </div>
                        <div className="grid xl:gap-2 md:gap-1 ">
                            <div className=" laravel demandimages h-[6vh] md:h-[7vh] xl:h-[8vh] w-[13vw] xl:w-full rounded-lg border-solid border  border-[#003CC4] shadow-[0px_0px_20.06px_3px_#21194F]"></div>
                            <h4 className="mx-auto md:text-[15px] text-[9px]">Laravel</h4>
                        </div>
                        <div className="grid xl:gap-2 md:gap-1 ">
                            <div className=" laravel demandimages h-[6vh] md:h-[7vh] xl:h-[8vh] w-[13vw] xl:w-full rounded-lg border-solid border  border-[#003CC4] shadow-[0px_0px_20.06px_3px_#21194F]"></div>
                            <h4 className="mx-auto md:text-[15px] text-[9px]">Laravel</h4>
                        </div>


                    </div>
                </div>

            </div>
            <hr className='shadow-[0px_0px_10.06px_2px_#1f0aa2]  border border-solid border-[#003CC4]' />


            <div className="grid   xl:pt-[80px] lg:pt-[60px]  sm:pt-[40px] pt-[30px] xl:pb-[40px] lg:pb-[7px] sm:pb-[40px] pb-[30px]  2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] ">
                <div className="grid xl:gap-20 md:gap-10 sm:gap-5">
                    <div className="grid sm:grid-cols-[70%_1%_auto] py-2 ">
                        <div className="sm:max-w-[90%] md:max-w-[70%] grid gap-2">
                            <h1 className="wheading">Client Goals</h1>
                            <p className="wparagraph">In todays fast-paced world, self-care and well-being are more important than ever. Consumers increasingly seek
                                beauty experiences that not only enhance their appearance but also elevate their mood and inspire positive vibes.
                                Good Vibes, a new premium beauty business, embodies this shift in approach, offering products and services
                                that foster both inner and outer beauty.</p>
                        </div>
                        <div className=" w-[3px] mx-auto bg-[#ECAA18] rounded-2xl"></div>
                        <div className="sm:pl-3 md:pl-5 gap-1 lg:gap-3 grid py-3">
                            <h1 className="text-[8px] md:text-[11px] xl:text-[16px] lg:text-[14px]">App Objectives</h1>
                            <ul role="list" className="list-disc pl-6 md:text-[9px]  xl:text-[14px] lg:text-[12px] text-[7px] sm:space-y-1">
                                <li>Area-based Doctor Search</li>
                                <li>Area-based Doctor Search</li>
                                <li>Area-based Doctor Search</li>
                                <li>Area-based Doctor Search</li>
                                <li>Area-based Doctor Search</li>
                                <li>Area-based Doctor Search</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 xl:gap-y-14 md:gap-y-10 gap-y-4 xl:gap-x-10 md:gap-x-8 gap-x-2">
                        <div className="col-span-2 row-span-2"> <img src={goalimg} alt="" className="w-full xl:h-[600px] md:h-[350px] lg:h-[450px] sm:h-[250px] h-[180px] rounded-lg" /></div>
                        <div className="row-span-2"> <img src={goalimg} alt="" className="w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px]  xl:h-[600px] rounded-lg" /></div>
                        <div className="row-span-1"> <img src={goalimg} alt="" className="w-full h-[100px] sm:h-[140px] md:h-[180px]  lg:h-[250px] xl:h-[300px] rounded-lg" /></div>
                    </div>
                </div>
            </div>

            <div className="grid  xl:gap-24 md:gap-18 gap-8  xl:pt-[40px] lg:pt-[60px]  sm:pt-[20px]  xl:pb-[40px] lg:pb-[7px] sm:pb-[40px] pb-[30px]  2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] ">

                <div className="xl:max-w-2xl grid md:gap-5 gap-2 sm:max-w-md mx-auto text-center ">
                    <h1 className="heading  ">Admin Visual Design</h1>
                    <p className="  paragraph ">We’ve designed the Admin Visual Panel for the implementation of user interface elements and aesthetics for administrative interfaces, with a focus on clarity and functionality.
                    </p>
                </div>
                <div className="w-[80vw] mx-auto">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src={goalimg} alt="" className=" xl:h-[85vh] md:h-[65vh] lg:h-[75vh]   sm:h-[45vh] h-[30vh] w-full rounded-lg" />
                            </div>
                            <div>
                                <img src={goalimg} alt="" className="xl:h-[85vh] md:h-[65vh]  lg:h-[75vh] sm:h-[45vh] h-[30vh] w-full rounded-lg" />
                            </div>


                        </Slider>
                    </div>
                </div>

            </div>

            <div className="grid sm:pb-[25px] lg:py-[25px]">
                <button onClick={() => goBack()}
                    className=" hover:scale-105 duration-500 bg-[#FCBA26] sm:text-[15px] lg:text-[17px] text-[8px] lg:px-[28px] px-[5px] rounded sm:py-[7px] py-[5px] place-self-center flex justify-center items-center lg:gap-x-1 "> Go Back
                    <FiArrowUpRight className="sm:pt-[2px] pt-[1px] sm:text-[22px] text-[14px] " />
                </button>
            </div>
            {/* <div className="2xl:h-[8vh] md:h-[11vh] xl:h-[15vh]"></div> */}

            <Dropform />
        </>

    )
}

export default Innerportfolio