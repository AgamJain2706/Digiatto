import main from "../../../assets/aboutassets/MAIN.jpg"
import "./Dashboard.css"

function Dashboard() {
    return (
        <>
            <section>

                <div className="aboutgrad 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] pt-[100px]  lg:pt-[190px]  xl:pt-[220px]  pb-[250px] sm:pb-[400px] md:pb-[500px] lg:pb-[700px] xl:pb-[800px] 2xl:pb-[900px]  ">
                    <div data-aos="zoom-out-down" data-aos-duration="1500 ">
                        <div className="relative max-w-screen-xl text-center text-white grid mx-auto  ">

                            <h4 className="subheading  sm:pb-[30px] pb-[5px] " >DIGIATTO IT SERVICES </h4>

                            <h1 className="topMainHeading  pb-[10px] ">Your Trusted Technology<span className="text-[#013DC4] topMainHeadingspan  text-transparent bg-clip-text bg-gradient-to-r from-[#013DC4] to-[#0034A7] "> Partner</span> </h1>

                            <p className="place-self-center sm:text-[11px] text-[9px]  tracking-wider xl:pt-[20px] lg:pt-[10px] pt-[5px] pb-[10px] max-w-[600px] leading-3 sm:leading-4 xl:leading-5">In todays rapidly evolving digital landscape, having a reliable and innovative IT partner is crucial for success. At Digiatto IT Services, we understand the challenges businesses face and are dedicated to providing comprehensive IT solutions that empower you to achieve your goals.</p>

                            <img src={main} alt="" className="w-[1140px] absolute h-[240px] sm:h-[360px] md:h-[460px] lg:h-[630px] xl:h-[730px] 2xl:top-[195%] lg:top-[160%] sm:top-[145%] top-[125%] place-self-center  rounded-md mx-auto  shadow-[0px_0px_32.06px_2px_#0A104F]" />

                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Dashboard