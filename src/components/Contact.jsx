import React from 'react'

const Contact = () => {
    return (
        <div name= 'contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form className='flex flex-col w-full md:w-1/2' action="https://getform.io/f/0874a80c-fae0-4c39-907a-dd0d8cbe40d4" method='POST'>
                        <input type="text" name="name" placeholder='Enter your name' id="" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="email" name="email" placeholder='Enter your email' id="" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' />
                        <textarea placeholder='Enter your message' name="message" id="" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' rows="10"></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-8 mx-auto flex items-center rounded-md duration-300 hover:scale-101 '>Lets Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact