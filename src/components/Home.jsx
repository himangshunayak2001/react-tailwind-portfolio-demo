import React from 'react'
import hero from '../assets/hero.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
const Home = () => {
    return (
        <div 
        name = 'home' 
        className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Front-end Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I'm a Assam based developer having interest in Web development and designing and love to work with web applications using HTML, CSS, JavaScript, REACT etc
                    </p>
                    <div>
                    <Link to='portfolio' smooth duration={500} className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-blue-500 cursor-pointer'>
                        PORTFOLIO
                        <span className='group-hover:rotate-90 duration-500'>
                        <MdOutlineKeyboardArrowRight  size={25} className='ml-1'/>
                        </span>
                    </Link>
                    </div>   
                </div>
                <div>
                    <img src={hero} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home