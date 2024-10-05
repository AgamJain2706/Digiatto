import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Innovation.css"
function Innovation() {
    return (
        <>
            <hr className='shadow-[0px_0px_30.06px_3px_#1f0aa2]  border border-solid border-[#003CC4]' />
            <div className="techgradient">

                <div className=" 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]  xl:py-[100px] lg:pt-[80px] sm:pt-[60px] pt-[50px]">

                    <div className="lg:pb-[100px] pb-[60px]  justify-center w-[full] mx-auto  h-auto   text-center ">
                        <h4 className="subheading uppercase xl:pb-[30px] lg:pb-[25px] sm:pb-[20px] pb-[10px]  "> Beyond the Binary </h4>
                        <h1 className=" heading  xl:pb-[18px] lg:pb-[10px] md:pb-[8px] pb-[5px] ">Where Vision Meets Innovation.</h1>
                        <div className="flex justify-center ">

                            <p className="text-[#EAE5E5] paragraph sm:max-w-md lg:sm:max-w-xl  ">Shape the digital landscape with our team of pioneering tech experts. We craft cutting-edge solutions designed to propel your business forward. Embrace a future brimming with
                                possibilities - a future built on innovation and fueled by our expertise.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-[50%_auto]  ">
                        <div className=" flex gap-6 pb-[50px] xl:pb-[0px]">
                            <div className="img1 images rounded-lg lg:h-[66vh] h-[40vh] lg:w-[40%] mt-[40px] "></div>
                            <div className="img2 images rounded-lg lg:h-[66vh] h-[40vh] lg:w-[40%] mb-[40px] "></div>
                        </div>

                        <div className=''>

                            <VerticalTimeline className='custom-timeline '>
                                <VerticalTimelineElement
                                    contentStyle={{ background: "transparent" }}
                                    className='custom-timeline-element'>
                                    <h3 className="vertical-timeline-element-title text-[22px]">Visionary Minds</h3>
                                    <p className=''> Our team thrives on pushing boundaries, translating your vision into reality.</p>
                                </VerticalTimelineElement>

                                <VerticalTimelineElement
                                    contentStyle={{ background: "transparent" }}
                                    className='custom-timeline-element'>
                                    <h3 className="vertical-timeline-element-title text-[22px]">Tech Powerhouse</h3>
                                    <p> We harness the latest advancements, delivering solutions that empower your growth.</p>
                                </VerticalTimelineElement>

                                <VerticalTimelineElement
                                    contentStyle={{ background: "transparent" }}
                                    className='custom-timeline-element'>
                                    <h3 className="vertical-timeline-element-title text-[22px]">Future-Proofed Results</h3>
                                    <p> We build for the long haul, ensuring your success in the ever-evolving digital world.</p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>

                        </div>
                    </div>
                </div>
            </div>
            <hr className='shadow-[0px_0px_30.06px_3px_#1f0aa2]  border border-solid border-[#003CC4]' />
        </>
    )
}

export default Innovation