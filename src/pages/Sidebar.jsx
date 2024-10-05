import { Link, NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFile } from "react-icons/fa";
import { RiCodeBoxFill } from "react-icons/ri";
import { AiFillProfile } from "react-icons/ai";
import { FaIndustry } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";


function Sidebar({ sidebarToggle }) {

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
    return (
        <>

            <div className={`sidebar ${sidebarToggle ? "sidebar-visible" : ""} w-[60vw] sm:w-[35vw] bg-[#1A1B33] fixed h-full  z-10 px-1 `}>
                <div className='py-2'>
                    <NavLink to="/" className="">
                        {
                            logo.map((item) => <img key={item._id} className="md:h-[40px] h-[25px] sm:h-[30px]  w-auto sm:pl-[0px] pl-[10px]" src={item.image} alt="navlogo" />)
                        }
                    </NavLink>
                </div>

                <div className='mt-3 sm:mt-5 grid gap-1 '>
                    <Link to='/' className=' text-[5px] cursor-pointer group active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium '>
                        <FaHome className='inline-block w-5 h-5 mr-2 -mt-2 group-active:fill-[#FCB71B] group-focus:fill-[#FCB71B] group-hover:fill-[#FCB71B]' />Home
                    </Link>
                    <Link to='/about' className=' text-[5px] cursor-pointer group active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium '>
                        <TbListDetails className='inline-block w-5 h-5 mr-2 -mt-2 group-active:stroke-[#FCB71B] group-focus:stroke-[#FCB71B] group-hover:stroke-[#FCB71B]' />About Us
                    </Link>
                    <Link to='/services' className='text-[5px]  cursor-pointer group active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium '>
                        <MdOutlineMiscellaneousServices className='inline-block w-5 h-5 mr-2 -mt-2 group-active:fill-[#FCB71B] group-focus:fill-[#FCB71B] group-hover:fill-[#FCB71B]' />Services
                    </Link>

                    <div className="relative inline-block group w-full">

                        <button className="text-[5px] cursor-pointer w-full flex active:text-[#FCB71B] group focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium"><FaFile className='inline-block w-5 h-4 mr-2 group-active:fill-[#FCB71B] group-focus:fill-[#FCB71B] group-hover:fill-[#FCB71B] ' />Pages  <span className="ms-1  mt-0.5 [&>svg]:h-5 [&>svg]:w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </span></button>
                        <div className="mt-0.5  group-hover:block absolute z-[1000]  float-left m-0 hidden min-w-full list-none overflow-hidden rounded-lg border-none bg-gray-700 bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark">
                            <Link to="/dedicated-developers" className="pl-7 block w-full  whitespace-nowrap focus:text-[#FCB71B] hover:text-[#FCB71B] bg-[#2a2b50]  px-4 lg:py-2 py-1 lg:text-[13px] text-[12px] font-normal text-gray-300 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" data-twe-dropdown-item-ref><RiCodeBoxFill className='inline-block w-5 h-5 mr-2 -mt-1 ' />Dedicated Developers</Link>

                            <Link to="/service-industries" className=" pl-7 block w-full whitespace-nowrap focus:text-[#FCB71B] hover:text-[#FCB71B] bg-[#2a2b50] px-4 lg:py-2 py-1 lg:text-[13px] text-[12px] font-normal text-gray-300 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" data-twe-dropdown-item-ref> <FaIndustry className='inline-block w-5 h-5 mr-2 -mt-1' />Industries</Link>

                            <Link to="/portfolio" className="pl-7 block w-full whitespace-nowrap focus:text-[#FCB71B] hover:text-[#FCB71B] bg-[#2a2b50] px-4 lg:py-2 py-1 lg:text-[13px] text-[12px] font-normal text-gray-300 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" data-twe-dropdown-item-ref><AiFillProfile className='inline-block w-5 h-5 mr-2 -mt-1' />Portfolio</Link>

                            <Link to="/blogs" className="pl-7 block w-full whitespace-nowrap focus:text-[#FCB71B] hover:text-[#FCB71B] bg-[#2a2b50] px-4 lg:py-2 py-1 lg:text-[13px] text-[12px] font-normal text-gray-300 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" data-twe-dropdown-item-ref><FaBlog className='inline-block w-4 h-5 mr-2 ml-1 -mt-1' />Blogs </Link>
                        </div>
                    </div>
                    <Link to='/contactus' className='text-[5px] cursor-pointer group active:text-[#FCB71B] focus:text-[#FCB71B] active:bg-gray-700 focus:bg-gray-700  text-gray-300 hover:bg-gray-700 hover:text-[#FCB71B] px-3 py-2 rounded-md text-sm font-medium '>
                        <MdConnectWithoutContact className='inline-block w-5 h-5 mr-2 -mt-2 group-active:fill-[#FCB71B] group-focus:fill-[#FCB71B] group-hover:fill-[#FCB71B]' />Contact US
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar