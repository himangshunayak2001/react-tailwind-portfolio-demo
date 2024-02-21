import React from 'react'
import amazon from '../assets/amazon.jpg'
import hero from '../assets/hero.png'
import Stopwatch from '../assets/Stopwatch.png'
import todolist from '../assets/todolist.png'
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: amazon
        },
        {
            id: 2,
            src: Stopwatch
        },
        {
            id: 3,
            src: todolist
        }
    ]
  return (
    <div 
    name='portfolio' 
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out my work here</p>
            </div>
            
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id,src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>DEMO</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>CODE</button>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio