import Digitalautomation from "../components/services/Digitalautomation"
import Ourservices from "../components/services/Ourservices"
import Servicecrousal from "../components/services/Servicecrousal"
import SoftwareEng from "../components/services/SoftwareEng"
import Dropform from "../components/common/Dropform"

function Services() {

    return (
        <>
            <Ourservices />
            <Servicecrousal />
            <SoftwareEng />
            <Digitalautomation />
            <Dropform />
        </>
    )
}

export default Services