import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { useEffect, useState } from "react";
import axios from "axios";

function Servicecrousal() {
    const [crousal, setCrousal] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/serviceslider")
            setCrousal(res.data);
        }
        catch (error) {
            console.log('Error', error.message);
        }
    };

    useEffect(() => {
        fetchData();

    }, []);

    const Sercrousal = {

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        responsive: [

            {
                breakpoint: 500, // for small devices, you can adjust the breakpoint as needed
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 375, // for small devices, you can adjust the breakpoint as needed
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },


        ]

    };
    return (
        <>


            <div className=" slider-container bg-[#012A8A] content-center lg:text-[12px] xl:text-[15px] 2xl:text-[20px] sm:text-[10px] text-[8px]  px-[0px] font-bold ">
                <Slider className="slider p-[7px]  lg:p-[15px] xl:p-[20px] 2xl:p-[25px]" {...Sercrousal}>
                    {crousal.map((item, index) => (
                        <div className="" key={index + 1}>
                            <div className="flex items-center gap-2  ">
                                <img className=" h-[18px] " src={item.Productimage} alt="" />
                                <h3 className="uppercase tracking-wide text-[#EDAB18] " >{item.Productname}</h3>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>

        </>
    )
}

export default Servicecrousal