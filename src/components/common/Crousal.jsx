import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { useEffect, useState } from "react";
import axios from "axios";

function Crousal() {


    const [crousal, setCrousal] = useState([])






    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/homeslider")
            setCrousal(res.data);
        }
        catch (error) {
            console.log('Error', error.message);
        }

    };



    useEffect(() => {
        fetchData();

    }, []);

    const crousal1 = {

        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768, // for small devices, you can adjust the breakpoint as needed
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <>


            <div className=" slider-container   lg:h-[80px] md:h-[60px] sm:h-[50px] h-[40px] bg-transparent mx-auto sm:pt-[6px] lg:pt-[20px] md:pt-[14px] pt-[2px] lg:text-[25px] md:text-[18px] sm:text-[15px] text-[10px] text-center px-[0px] font-bold">
                <Slider className="slider" {...crousal1}>
                    {crousal.map((item, index) => (
                        <div className="" key={index + 1}>
                            <div className="flex items-center gap-2">  <img className=" h-[20px] " src={item.Productimage} alt="" />
                                <h3 className="" >{item.Productname}</h3></div>
                        </div>

                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Crousal