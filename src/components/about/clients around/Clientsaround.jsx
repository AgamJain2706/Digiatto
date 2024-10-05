import { LiaStarSolid } from 'react-icons/lia'
import { LuMessagesSquare } from 'react-icons/lu'
import mapimg from "../../../assets/aboutassets/map.png"
import clutch from "../../../assets/aboutassets/5people.png"
import graph from "../../../assets/aboutassets/graph.png"
import "./Clientaround.css"
function Clientsaround() {
    return (
        <>
            <section className=" aboutgrad2">

                <div className="clientsaroundbg 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]  pt-[30px] lg:pt-[50px] xl:pt-[0px]   pb-[40px] sm:pb-[40px] lg:pb-[50px] 2xl:pb-[20px]">

                    <div className="max-w-[800px] mx-auto pt-[0px] lg:pb-[75px] sm:pb-[45px] pb-[25px] xl:pt-[100px] 2xl:pt-[160px] sm:pt-[20px] text-center text-white grid ">
                        <h1 className="heading pb-[20px] ">Our Clients Around The World</h1>
                        <p className="place-self-center text-[#EAE5E5] paragraph sm:max-w-[640px] max-w-[275px] ">We understand the value of work, but we also appreciate the importance of play! We hold all our
                            partnerships in high regard, and we actively seek enjoyable ways to tackle crucial challenges, leaving
                            you with a solution and a smile. We are passionate about our work, dedicated to aiding our clients, and
                            we firmly believe in savoring every moment because life is too short not to enjoy every minute!</p>
                    </div>
                    <div className="max-w-5xl mx-auto lg:pb-[120px] ">
                        <div data-aos="zoom-in-down"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-sine">
                            <img src={mapimg} alt="" className="" />
                        </div>
                    </div>



                    <div className="lg:grid lg:grid-cols-2 justify-between pt-[60px] lg:pt-[0px]  2xl:pt-[60px] text-[white]   ">

                        <div className="lg:pt-[61px] sm:pt-[20px] pb-[30px] sm:pb-[50px] lg:pb-[0px] ">
                            <h4 className=" subheading 2xl:pb-[25px] ">INNOVATORS</h4>
                            <h1 className="heading sm:pt-[15px] pt-[10px] max-w-xl lg:pb-[8px] pb-[5px] sm:pb-[8px]" >Company Built By A Global
                                Team Of Innovators</h1>
                            <div className="max-w-full md:max-w-2xl ">
                                <p className="paragraph">In blandit luctus proin mauris a commodo, dolor diam tempus, aenean
                                    magna fusce eu. Id porttitor aliquam eget aliquet sagittis eu aut diam utphasellus sed convallis iaculis neque ultricies convallis sed enim
                                </p>
                            </div>
                        </div>

                        <div className="  flex lg:justify-end justify-center     ">


                            <div data-aos="fade-right"
                                data-aos-delay="500"
                                data-aos-offset="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" className='grid grid-cols-2 sm:gap-5 gap-3  '>

                                <div className=" text-center bg-[#040E39] place-self-center p-[10px] 2xl:p-[25px] sm:p-[15px]  2xl:w-[250px] text-white static rounded-lg border-solid border-2  border-[#003CC4] border-opacity-80 shadow-[0px_0px_30px_5px_#08175F]">
                                    <p className=" 2xl:text-[28px] sm:text-[24px] text-[18px]  tracking-wider">Clutch</p>
                                    <p className=" 2xl:text-[28px] sm:text-[24px]  text-[15px] font-black pt-[0px] 2xl:pt-[30px] sm:pt-[12px] tracking-wider">100%</p>
                                    <p className="text-[#DCA01D] text-[10px] sm:text-[13px] 2xl:text-[17px] tracking-wider">Positive Feedback</p>
                                    <div className="flex sm:pt-4 pt-2 gap-1 justify-center 2xl:text-xs sm:text-[13px] text-[10px] stroke-red-600">
                                        <LiaStarSolid className="" />
                                        <LiaStarSolid className="" />
                                        <LiaStarSolid className="" />
                                        <LiaStarSolid className="" />
                                        <LiaStarSolid className="" />
                                    </div>
                                    <div className=" sm:max-w-[150px] max-w-[100px] sm:pt-5 pt-2 mx-auto">
                                        <img src={clutch} alt="" />
                                    </div>
                                </div>

                                <div className=" grid grid-row sm:gap-5 gap-3  ">

                                    <div className="p-[10px]  2xl:pt-[30px] sm:pt-[20px] 2xl:p-[25px]  sm:px-[25px]  sm:p-[15px]  max-w-[170px] 2xl:max-w-[250px] bg-[#050E3B]  text-white static rounded-lg border-solid border-2  border-[#003CC4]">
                                        <LuMessagesSquare className="text-[30px] sm:text-[40px]" />

                                        <h2 className="text-[17px] sm:text-[23px] 2xl:text-[25px] font-bold  pt-[8px] sm:pt-[30px] 2xl:pt-[40px]">24/7</h2>
                                        <p className=" text-[10px] sm:text-[13px] 2xl:text-[17px] text-[#DCA01D]">Chat Support</p>
                                    </div>

                                    <div className=" px-[10px]  sm:px-[25px]    pb-[10px] sm:pb-[15px]  text-white max-w-[170px] static bg-[#050E3B] 2xl:max-w-[250px] rounded-lg border-solid border-2  border-[#003CC4]">
                                        <img src={graph} alt="" className='max-h-[50px] sm:max-h-full' />
                                        <h2 className="text-[17px] sm:text-[23px] 2xl:text-[25px]  font-bold ">+12k</h2>
                                        <p className="text-[10px] sm:text-[13px] 2xl:text-[17px] text-[#DCA01D]">New leads for clients</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clientsaround