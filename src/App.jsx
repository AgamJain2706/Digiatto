import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import Services from './pages/Services'
import DedicatedDevelopers from './pages/servicepages/DedicatedDevelopers'
import ServIndustries from './pages/servicepages/ServIndustries'
import Portfolio from './pages/servicepages/Portfolio'
import Innerportfolio from './pages/servicepages/Innerportfolio'
import Blogpage from './pages/servicepages/Blogpage'
import Blogdetails from './pages/servicepages/Blogdetails'
import ScrollToTop from "./pages/ScrollToTop"
import NotFound from "./pages/NotFound"
import Sidebar from './pages/Sidebar'
import Discuss from './components/common/Discuss'
import ContactUs from './pages/ContactUs'



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);



  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <>

      <Router>
        <ScrollToTop />
        <Sidebar sidebarToggle={sidebarToggle} />
        <Header sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/dedicated-developers" element={<DedicatedDevelopers />}></Route>
          <Route path="/service-industries" element={<ServIndustries />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/innerportfolio/:id" element={<Innerportfolio />}></Route>
          <Route path="/blogs" element={<Blogpage />}></Route>
          <Route path="/blogdetail" element={<Blogdetails />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/discuss" element={<Discuss />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
