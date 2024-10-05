import "./Home.css"
import WeAreExperts from "../components/home/we are experts/WeAreExperts"
import Crousal from "../components/common/Crousal";
import Whatwedo from "../components/home/what we do/Whatwedo";
import Ourproject from "../components/home/our project/Ourproject";
import Global from "../components/common/Global";
import Industries from "../components/home/expert in industries/Industries";
import Technologies from "../components/home/technologies/Technologies";
import News from "../components/home/news/News";
import Awards from "../components/home/awards/Awards";
import Testimonial from "../components/home/testimonials/Testimonial";

function Home() {


    return (<>
        <WeAreExperts />
        <div className="bg-[#002A8A]">
            <Crousal />
        </div>
        <Whatwedo />
        <Ourproject />
        <Global />
        <Industries />
        <Technologies />
        <News />
        <Awards />
        <Testimonial />
    </>

    )
}

export default Home     