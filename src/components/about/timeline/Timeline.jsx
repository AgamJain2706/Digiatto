import axios from "axios";
import "./Timeline.css"
import { Box, Stepper, Step, StepLabel } from '@mui/material';
import { useEffect, useState } from "react";
import 'rsuite/dist/rsuite.min.css';
import { Timeline, Grid, Row, Col } from 'rsuite';
function TimeLine() {
    const [years, setYears] = useState([])
    const fetchData = async () => {
        try {
            const res = await axios.get("https://digiatto.onrender.com/excellence")
            setYears(res.data);

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
            <hr className="border-0 w-full h-[1px] bg-[#0036B0]   " />
            <div className="aboutgrad1  pt-[40px] sm:pt-[0px] xl:pt-[45px] 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]  pb-[50px] xl:pb-[100px] ">

                <div className=" mx-auto  xl:pb-[75px] pb-[45px]  lg:py-[100px]  sm:pt-[80px] text-center text-white grid ">
                    <h1 className="heading sm:pb-[20px] pb-[10px]">Dedicated To Delivering Excellence </h1>
                    <p className="place-self-center paragraph sm:max-w-[640px] max-w-[275px]">We recognize the chaotic nature of business, and that’s precisely where our expertise shines. Our
                        focus is on restoring balance amidst the chaos by establishing genuine partnerships with our clients.
                        When you collaborate with us, you’re engaging with a team that comprehends your challenges and
                        aspirations. Together, we navigate the chaos, bringing order to your business landscape.</p>
                </div>
                <div className="hidden md:block">
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={-1} alternativeLabel>
                            {years.map((item, index) => (
                                <Step className="" key={index + 1}>
                                    <div className=" grid place-content-center " >
                                        <StepLabel className="">{item.Year}</StepLabel>
                                        <h1 className="text-center xl:text-[14px] lg:text-[10px] text-[8px] text-[#898286] leading-[1.5]">
                                            {item.Details}
                                        </h1>
                                    </div>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </div>

                {/*xs-sm mobile */}
                <div className="md:hidden">
                    <Grid fluid>
                        <Row>
                            <Col >
                                <Timeline align="left">
                                    {years.map((item, index) => (
                                        <Timeline.Item key={index + 1}>
                                            <p className="sm:text-[15px] text-[12px]">{item.Year}</p>
                                            <p className="sm:text-[10px]  text-[8px]">{item.Details}</p>
                                        </Timeline.Item>
                                    ))}
                                </Timeline>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
            <hr className="border-0 w-full h-[1px] bg-[#0036B0]   " />
        </>
    )
}
export default TimeLine
