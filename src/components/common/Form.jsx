import axios from "axios"
import { useState } from "react"


function Form() {

    // button
    const [ableToClick, setAbleToClick] = useState(true);

    const handleClick = () => {
        if (!ableToClick) return;
        setAbleToClick(false);

        const splash = document.getElementById("splash");
        splash.style.width = "300px";
        splash.style.height = "300px";

        setTimeout(() => {
            splash.style.opacity = "0";
        }, 400);

        setTimeout(() => {
            splash.style.transitionDuration = "0s";
        }, 1000);

        setTimeout(() => {
            splash.style.width = "0";
            splash.style.height = "0";
            splash.style.opacity = "1";
        }, 1100);

        setTimeout(() => {
            setAbleToClick(true);
            splash.style.transitionDuration = ".9s";
        }, 1200);
    };
    // button



    const [inputvalue, setinputvalue] = useState({
        technology: "",
        email: "",
        phone: "",
        message: "",
    })
    let inputHandel = ((event) => {
        setinputvalue({ ...inputvalue, [event.target.name]: event.target.value })
    })
    let formHandel = ((event) => {
        event.preventDefault();

        axios
            .post(`https://digiatto.onrender.com/expertadvice`, inputvalue)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })

        setinputvalue({
            technology: "",
            email: "",
            phone: "",
            message: "",
        })
    })
    return (
        <>

            <div className="grid gap-6 sm:gap-1 md:gap-6  w-full  sm:p-[20px] md:p-[25px] p-[15px] xl:p-[40px]  lg:pt-[20px] xl:pt-[50px] bg-[#001034] ">
                <h2 className=" text-[19px]">Your Success Starts Here!</h2>
                <hr className="border-0  h-[1px] bg-[#FDB61B]   " />

                <form action="" className="grid sm:gap-8  gap-3 " onSubmit={formHandel}>
                    <div className="w-[100%]">
                        <input type="text" placeholder="Name" id="technology" name="technology" className="w-full bg-transparent border border-[#003CC4] rounded p-[5px] pl-[10px]" onChange={inputHandel} value={inputvalue.technology} />
                    </div>

                    <div className="w-[100%]">
                        <input type="email" placeholder="Email" id="email" name="email" className="w-full bg-transparent border border-[#003CC4] rounded p-[5px] pl-[10px]" onChange={inputHandel} value={inputvalue.email} />
                    </div>

                    <div className="w-[100%]">
                        <input type="number" placeholder="Mobile Number" id="phone" name="phone" className="w-full bg-transparent border border-[#003CC4] rounded p-[5px] pl-[10px]" onChange={inputHandel} value={inputvalue.phone} />
                    </div>

                    <div>
                        <textarea rows="4" id="message" name="message" className="border border-[#003CC4]  p-[5px] pl-[10px] block  max-h-[200px] w-full text-sm text-gray-900  rounded-lg   focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-[#003CC4]   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message..." onChange={inputHandel} value={inputvalue.message}></textarea>
                    </div>

                    <button onMouseDown={handleClick}
                        className=" button btn-grad  sm:text-[17px] text-[12px] sm:px-[20px] px-[7px] rounded sm:py-[10px] py-[5px] place-self-center flex justify-center items-center gap-x-1 ">
                        Submit Now
                        <div id="splash"></div>
                    </button>

                </form>

            </div>
        </>
    )
}

export default Form