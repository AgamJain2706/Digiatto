import { LiaStarSolid } from 'react-icons/lia';
import Slider from 'react-slick'
import "./Testimonial.css"
function Testimonial() {




    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3, // Default: show one card per slide
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992, // Breakpoint for large screens (lg)
                settings: {
                    slidesToShow: 2, // Show three cards per slide on screens >= 992px
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Breakpoint for large screens (lg)
                settings: {
                    slidesToShow: 1, // Show three cards per slide on screens >= 992px
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className=" sm:pb-[80px] flex justify-center  w-[full]0 mx-auto  h-auto lg:pt-[50px] sm:pt-[0px] pt-[30px] pb-[30px] text-center 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">

            <div className="bg-[#001137] border-solid border  border-[#003CC4] w-full xl:pt-[80px] lg:pt-[50px]  pt-[30px] rounded-md shadow-[0px_0px_20.06px_3px_#21194F]">
                <div className="xl:pb-[90px] sm:pb-[40px] pb-[30px] ">
                    <h4 className="subheading  xl:pb-[30px] lg:pb-[20px] pb-[10px] ">TESTIMONIAL </h4>
                    <h1 className="heading xl:pb-[18px] lg:pb-[10px] pb-[8px] ">This Is What Thers Have To Say</h1>
                    <div className="flex justify-center ">

                        <p className="paragraph text-[#EAE5E5]   ">Discover what our clients are saying about their experiences.

                        </p>
                    </div>
                </div>
                <div className=" max-w-[84%] mx-auto xl:pb-[120px] sm:pb-[50px] pb-[30px]">
                    <div className="slider-container mx-1 shadow-[0px_0px_20.06px_3px_#21194F] ">
                        <Slider {...settings}>
                            <div className="testimonial-card ">
                                <div className="p-5 pb-7 text-start border-solid rounded-md border border-[#003CC4] ">
                                    <div className="flex py-6 gap-3 text-lg">
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                    </div>
                                    <h6 className="pb-4 text-[13px] leading-6">The service I received exceeded my expectations in every way, the level of customer care throughout the process was exceptional.</h6>
                                    <h5 className="text-sm"><span className="text-yellow-500 ">Lorenz Ynez</span> - Project Manager</h5>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="p-5 pb-7 text-start border-solid rounded-md border border-[#003CC4]">
                                    <div className="flex py-6 gap-3 text-lg">
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                    </div>
                                    <h6 className="pb-4 text-[13px] leading-6">The service I received exceeded my expectations in every way, the level of customer care throughout the process was exceptional.</h6>
                                    <h5 className="text-sm"><span className="text-yellow-500 ">Lorenz Ynez</span> - Project Manager</h5>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="p-5 pb-7 text-start border-solid rounded-md border border-[#003CC4]">
                                    <div className="flex py-6 gap-3 text-lg">
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                        <LiaStarSolid className="text-yellow-500" />
                                    </div>
                                    <h6 className="pb-4 text-[13px] leading-6">The service I received exceeded my expectations in every way, the level of customer care throughout the process was exceptional.</h6>
                                    <h5 className="text-sm"><span className="text-yellow-500 ">Lorenz Ynez</span> - Project Manager</h5>
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial