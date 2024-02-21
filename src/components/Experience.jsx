import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
const Experience = () => {

    const skills = [
        {
            id: 1,
            skill: html,
            title: 'HTML',
            style: 'shadow-orange-800'
        },
        {
            id: 2,
            skill: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            skill: js,
            title: 'JS',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            skill: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            skill: nodejs,
            title: 'NODEJS',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            skill: mongodb,
            title: 'MONGODB',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            skill: figma,
            title: 'FIGMA',
            style: 'shadow-red-500'
        },
        {
            id: 8,
            skill: git,
            title: 'GIT',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            skill: github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },
    ]
    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>Technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        skills.map(({ id, skill, title, style }) => (
                            <div 
                            key={id} 
                            className={`shadow-md hover-scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={skill} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Experience