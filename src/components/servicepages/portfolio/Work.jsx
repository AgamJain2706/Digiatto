

import { FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Work.css"

function Work() {
    // const navigate = useNavigate();

    // const goToNewPage = () => {
    //     navigate("/innerportfolio");
    // };

    const [work, setWork] = useState([]);
    const [visibleCount, setVisibleCount] = useState(2);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/project");
            setWork(res.data);
        } catch (error) {
            console.log('Error', error.message);
        }
    };

    const handleShowMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 3, work.length));
    };

    const handleShowLess = () => {
        setVisibleCount(1);
    };

    // Determine the number of cards to show
    const displayedWork = work.slice(0, visibleCount);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="grid xl:gap-20 gap-5 sm:gap-8 lg:gap-14 lg:pt-[80px] pt-[30px] xl:pb-[150px] sm:pb-[20px] md:pb-[60px]  lg:pb-[120px] 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">
                {displayedWork.map((item, index) => (
                    <div
                        key={index}
                        className={`grid ${index % 2 === 0 ? 'grid-cols-2' : 'grid-cols-2-reverse'} py-[10px] `}>
                        {index % 2 === 0 ? (
                            <>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" className="productimg bg-cover bg-center rounded-lg sm:w-[35vw] w-[43vw] lg:h-[55vh] h-[25vh]">
                                    <img src={item.image} alt="" className='bg-cover bg-center rounded-lg h-full w-full' />
                                </div>


                                <div data-aos="fade-up"
                                    data-aos-duration="1000" className="max-w-xl self-center ">
                                    <h5 className="wsubheading pb-[10px] lg:pb-[30px] leading-3">{item.category}</h5>
                                    <h1 className="wheading lg:pb-[30px] pb-[5px]">{item.title} : {item.subtitle}</h1>
                                    <p className="wparagraph lg:pb-[25px] pb-[10px]">{item.description}</p>
                                    <Link to={`/innerportfolio/${item._id}`}>
                                        <button
                                            className="hover:scale-105 duration-500 bg-[#FCBA26] sm:text-[15px] lg:text-[17px] text-[8px] lg:px-[28px] px-[5px] rounded sm:py-[7px] py-[5px]  flex justify-center items-center lg:gap-x-1 mx-auto" >
                                            View Casestudy
                                            <FiArrowUpRight className="sm:pt-[2px] pt-[1px] sm:text-[22px] text-[14px]" />
                                        </button>
                                    </Link>
                                </div>

                            </>
                        ) : (
                            <>

                                <div data-aos="fade-up"
                                    data-aos-duration="1000" className="max-w-xl self-center">
                                    <h5 className="wsubheading pb-[10px] lg:pb-[30px] leading-3">{item.category}</h5>
                                    <h1 className="wheading lg:pb-[30px] pb-[5px]">{item.title} : {item.subtitle}</h1>
                                    <p className="wparagraph lg:pb-[25px] pb-[10px]">{item.description}</p>
                                    <Link to={`/innerportfolio/${item._id}`}>
                                        <button
                                            className="hover:scale-105 duration-500 bg-[#FCBA26] sm:text-[15px] lg:text-[17px] text-[8px] lg:px-[28px] px-[5px] rounded sm:py-[7px] py-[5px]  flex justify-center items-center lg:gap-x-1 mx-auto" >
                                            View Casestudy
                                            <FiArrowUpRight className="sm:pt-[2px] pt-[1px] sm:text-[22px] text-[14px]" />
                                        </button>
                                    </Link>
                                </div>

                                <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="1500" className=" productimg  bg-cover bg-center rounded-lg sm:w-[35vw] w-[43vw] lg:h-[55vh] h-[25vh] mx-auto">
                                    <img src={item.image} alt="" className='bg-cover bg-center rounded-lg h-full w-full' />
                                </div>
                            </>
                        )}
                    </div>
                ))
                }

                {/* <div className="grid grid-cols-2 py-[10px]">
                    <div className="max-w-xl self-center">
                        <h5 className="wsubheading pb-[10px] lg:pb-[30px]">Beauty Industries</h5>
                        <h1 className="wheading lg:pb-[30px] pb-[5px]">Good Vibes: A Luxurious App for the Beauty Experience</h1>
                        <p className="wparagraph lg:pb-[25px] pb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button onClick={goToNewPage} className="hover:scale-105 duration-500 bg-[#FCBA26] sm:text-[15px] lg:text-[17px] text-[8px] lg:px-[28px] px-[5px] rounded sm:py-[7px] py-[5px] place-self-center flex justify-center items-center lg:gap-x-1">
                            View Casestudy
                            <FiArrowUpRight className="sm:pt-[2px] pt-[1px] sm:text-[22px] text-[14px]" />
                        </button>
                    </div>
                    <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="1000" className="industriesimg bg-cover bg-center rounded-lg w-[35vw] lg:h-[55vh] h-[30vh] mx-auto"></div>
                </div> */}

                <div data-aos="zoom-in-down" className="place-self-center">
                    {visibleCount < work.length ? (
                        <button onClick={handleShowMore} className="hover:scale-105 duration-500 xl:text-[17px] lg:text-[15px] text-[10px] sm:text-[13px] px-[15px] lg:px-[25px] rounded lg:py-[8px] py-[3px] bg-transparent border-2 border-[#0036B0]">
                            Show More
                        </button>
                    ) : (
                        <button onClick={handleShowLess} className="hover:scale-105 duration-500 xl:text-[17px] lg:text-[15px] text-[10px] sm:text-[13px] px-[15px] lg:px-[25px] rounded lg:py-[8px] py-[3px] bg-transparent border-2 border-[#0036B0]">
                            Show Less
                        </button>
                    )}
                </div>
            </div >
        </>
    );
}

export default Work;
