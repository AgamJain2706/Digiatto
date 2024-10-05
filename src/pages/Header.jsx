
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import { Dropdown, Ripple, initTWE, } from "tw-elements";
import axios from "axios";
import { FaBars } from "react-icons/fa";
function Header({ sidebarToggle, setSidebarToggle }) {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);





    const [logo, setlogo] = useState([])
    const getlogo = async () => {
        try {
            const response = await axios.get("https://digiatto.onrender.com/navbarlogo");
            const Data = response.data
            console.log('Data:', response.data);
            setlogo(Data)
            console.log(logo)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getlogo()
    }, [])

    initTWE({ Dropdown, Ripple });
    return (
        <>
            <nav className="bg-[#1A1B33] z-50 p-1 fixed w-full md:ml-0" >
                <div className="  mx-auto sm:px-4 relative">
                    <FaBars className="right-2 absolute  top-1.5 ml-2 size-5 sm:size-8 md:hidden " onClick={() => setSidebarToggle(!sidebarToggle)} />
                    <div className="grid grid-cols-[50%_auto] md:grid-cols-[30%_auto] lg:grid-cols-[50%_auto] items-center  md:h-16 h-9 sm:h-12">
                        <NavLink to="/" >
                            {
                                logo.map((item) => <img key={item._id} className="md:h-[40px] h-[25px] sm:h-[30px]  w-auto sm:pl-[0px] pl-[10px]" src={item.image} alt="navlogo" />)
                            }
                        </NavLink>


                        <div className="hidden md:block  ">
                            <div className="  flex items-baseline  place-content-evenly ">

                                <NavLink to="/" className="active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium ">Home</NavLink>

                                <NavLink to="/about" className="active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium ">About Us</NavLink>

                                <NavLink to="/services" className="active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium ">Services</NavLink>

                                {/* dropdown button */}
                                <div className="relative inline-block group">
                                    <button className=" flex active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium">Pages  <span className="ms-1  mt-0.5 [&>svg]:h-5 [&>svg]:w-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span></button>
                                    <div className=" group-hover:block absolute z-[1000]  float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-gray-700 bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark">
                                        <Link to="/dedicated-developers" className=" block w-full  whitespace-nowrap focus:text-[#FCB71B] hover:text-[#FCB71B] bg-[#2a2b50]  px-4 lg:py-2 py-1 lg:text-[13px] text-[12px] font-normal text-gray-300 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" data-twe-dropdown-item-ref>Dedicated Developers</Link>

                                        <Link to="/service-industries" className="  block w-full whitespace-nowrap focus:text-[#FCB71B] hover:text-[#FCB71B] bg-[#2a2b50] px-4 lg:py-2 py-1 lg:text-[13px] text-[12px] font-normal text-gray-300 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" data-twe-dropdown-item-ref>Industries</Link>

                                        <Link to="/portfolio" className=" block w-full whitespace-nowrap focus:text-[#FCB71B] hover:text-[#FCB71B] bg-[#2a2b50] px-4 lg:py-2 py-1 lg:text-[13px] text-[12px] font-normal text-gray-300 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" data-twe-dropdown-item-ref>Portfolio</Link>

                                        <Link to="/blogs" className=" block w-full whitespace-nowrap focus:text-[#FCB71B] hover:text-[#FCB71B] bg-[#2a2b50] px-4 lg:py-2 py-1 lg:text-[13px] text-[12px] font-normal text-gray-300 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" data-twe-dropdown-item-ref>Blogs </Link>
                                    </div>
                                </div>

                                <NavLink to="/contactus" className="active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium ">Contact US</NavLink>

                                <div>
                                    <button
                                        className="hover:scale-105 hover:text-[#FCB71B] text-white duration-500 btn-grad sm:font-medium xl:ml-[70px] lg:px-[10px] px-[10px] rounded py-[5px] ">
                                        Get Quote
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </nav>
        </>
    )
}

export default Header



