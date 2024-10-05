import "./About.css"

import Dashboard from "../components/about/dashboard/Dashboard"
import Clientsaround from "../components/about/clients around/Clientsaround";
import Crousal from "../components/common/Crousal";
import Global from "../components/common/Global";
import Dropform from "../components/common/Dropform";
import TimeLine from "../components/about/timeline/Timeline";

function About() {


    return (

        <>
            <Dashboard />
            <TimeLine />
            <Clientsaround />
            <div className="bg-[#000C28]">
                <Crousal />
            </div>
            <Global />
            <Dropform />

        </>
    )
}

export default About