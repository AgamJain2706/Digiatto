import { useEffect, useState } from "react";
import axios from "axios";
function Awards() {

    const [awards, setAwards] = useState([])






    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/awards")
            setAwards(res.data);
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



            <div className=" lg:grid grid-cols-2  xl:pt-[100px] lg:pt-[50px] md:pt-[20px] sm:pt-[40px] pt-[30px] sm:pb-[80px] xl:pb-[80px] lg:pb-[30px] pb-[40px]  text-[white] 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">

                <div className="pb-[30px] lg:pb-[0px]">
                    <h4 className="subheading  xl:pb-[25px] lg:pb-[15px] sm:pb-[10px] pb-[10px]">AWARDS</h4>
                    <h1 className="heading xl:pb-[15px] lg:pb-[8px] md:pb-[4px] pb-[8px]">Awards And Recognitions</h1>
                    <div className="">
                        <p className="paragraph">Making a difference by raising the benchmarks. Some of our noteworthy and recent recognitions.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4  gap-10 lg:gap-2  ">
                    {awards.map((item, index) => (

                        <div data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="100"
                            data-aos-duration="500" key={index + 1}>
                            <img src={item.Awardimage} alt="company" />
                        </div>

                    ))}
                </div>
            </div>
            <hr className="border-0 w-full h-[1px] bg-[#0036B0]  block sm:hidden  " />
        </>
    )
}

export default Awards