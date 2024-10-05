import axios from "axios";
import { useState, useEffect } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

function Industries() {
    const [industries, setIndustries] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const defaultImage = industries.length > 0 ? industries[0].image : "";
    const [backgroundImage, setBackgroundImage] = useState(defaultImage);

    const handleMouseEnter = (index, img) => {
        setHoveredIndex(index);
        setBackgroundImage(img);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % industries.length;
            setBackgroundImage(industries[newIndex].image);
            return newIndex;
        });
        setHoveredIndex(null);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + industries.length) % industries.length;
            setBackgroundImage(industries[newIndex].image);
            return newIndex;
        });
        setHoveredIndex(null);
    };



    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/weareexpert")
            setIndustries(res.data);
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
            <div className="  md:grid grid-cols-2 pt-[25px] lg:pt-[0px] sm:pb-[10px] lg:pb-[50px] md:pb-[30px]    2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">
                <div className="">
                    <h4 className="subheading  ">WE ARE EXPERTS IN</h4>
                    <h1 className="heading sm:py-[30px] sm:pt-[10px]  sm:pb-[5px] lg:pb-[10px] pb-[5px] pt-[10px]">Industries We Serve</h1>
                    <div className="">
                        <p className=" paragraph sm:max-w-md lg:sm:max-w-full ">Customer Experience is everything! We design & create solutions by spotting customers’ actions, emotions, and unmet needs. We make enterprises that impact lives.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end gap-12 invisible md:visible">
                    <button className=" hover:scale-110 self-end text-[30px]" onClick={handlePrev}><FaRegArrowAltCircleLeft /></button>
                    <button className="hover:scale-110 self-end text-[30px]" onClick={handleNext}><FaRegArrowAltCircleRight /></button>
                </div>
            </div>


            <div className=" expert-carous flex w-full relative divide-x-[1.5px] divide-transparent"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>

                {industries && industries.map((item, index) => (
                    <div className="expert-carous-inner  xl:h-[480px] md:h-[300px] h-[220px] relative max-w-xl w-1/4 p-4"
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index, item.image)}
                        onMouseLeave={handleMouseLeave} >

                        <div className="absolute inset-0 bg-[#000000] opacity-40"></div>
                        <div className="exper-carouse-inner mx-auto">
                            <div className="absolute  overflow-hidden inset-0 flex items-end justify-center">
                                <div className={`expert-crrrr  transform ${hoveredIndex === index || currentIndex === index
                                    ? "translate-y-[-40px]"
                                    : "translate-y-[35px]"
                                    } transition-transform duration-[.7s]`}>

                                    <h2 className="  xl:text-[25px] md:text-[17px] text-[10px]  max-w-72  xl:mb-[70px]  mb-[50px] text-center">
                                        {item.Title}
                                    </h2>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Industries