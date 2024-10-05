import { FaArrowRight, FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"

function ContactUs() {
    return (
        <>
            <div className="2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] pt-[100px] pb-[50px]">
                <div>
                    <p>Contact Us</p>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="grid gap-5 ">

                            <div className="grid grid-cols-[25%_auto] border border-[white] rounded-lg w-[70%] mx-auto py-6">
                                <div className="grid bg-[grey]  w-16 h-16 rounded-full place-self-center">
                                    <IoMdMail className="w-10 h-10 mx-auto  fill-[#030E25] place-self-center" />
                                </div>
                                <div className="">
                                    <h1 className="text-[25px]">Email us</h1>
                                    <p className="text-[15px] pb-[10px] leading-4">Please feel free to drop us a line. We will respond as soon as possible.</p>
                                    <button className="flex gap-2">Leave a message <FaArrowRight className="h-3 w-3 mt-1.5" /></button>
                                </div>
                            </div>

                            <div className="grid grid-cols-[25%_auto] border border-[white] rounded-lg w-[70%] mx-auto py-6">
                                <div className="grid bg-[grey]  w-16 h-16 rounded-full place-self-center">
                                    <FaPhoneAlt className="w-10 h-10 mx-auto  fill-[#030E25] place-self-center" />
                                </div>
                                <div className="">
                                    <h1 className="text-[25px]">Call us any time</h1>
                                    <p className="text-[15px] pb-[10px] leading-4">If you need immediate assistance feel free to call us any time.</p>
                                    <button>+91 81096 07075</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-[25%_auto] border border-[white] rounded-lg w-[70%] mx-auto py-6">
                                <div className="grid bg-[grey]  w-16 h-16 rounded-full place-self-center">
                                    <FaLocationDot className="w-10 h-10 mx-auto  fill-[#030E25] place-self-center" />
                                </div>
                                <div className="">
                                    <h1 className="text-[25px]">Visit us (India)</h1>
                                    <p className="text-[15px] pb-[10px] leading-4">Plot Number 109-110 PU4, Scheme Number 54, behind C21 Mall, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
                                    <button className="flex gap-2">Get Directions <FaArrowRight className="h-3 w-3 mt-1.5" /></button>
                                </div>
                            </div>

                            <div className="grid grid-cols-[25%_auto] border border-[white] rounded-lg w-[70%] mx-auto py-6">
                                <div className="grid bg-[grey]  w-16 h-16 rounded-full place-self-center">
                                    <FaLocationDot className="w-10 h-10 mx-auto  fill-[#030E25] place-self-center" />
                                </div>
                                <div className="">
                                    <h1 className="text-[25px]">Visit us (United Kingdom)</h1>
                                    <p className="text-[15px] pb-[10px] leading-4">36C Birley Moor Rd, Sheffield S12 4WD, UK</p>
                                    <button className="flex gap-2">Get Directions <FaArrowRight className="h-3 w-3 mt-1.5" /></button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5772432680583!2d75.89157507502054!3d22.743949526668903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdcc4d30a1cf%3A0xf69ae3bde14853a8!2sTechpanda%20IT%20Services!5e0!3m2!1sen!2sin!4v1724764473454!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
                    </div>
                    <div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs