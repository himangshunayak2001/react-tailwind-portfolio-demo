import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum inventore eveniet nulla reprehenderit consectetur beatae ea exercitationem, impedit ipsam cum ut vero et quo voluptates, qui modi assumenda perspiciatis. Delectus, quo magni nobis ea ipsum ipsam iste at, laudantium sunt blanditiis animi doloribus minima nemo nihil, amet perspiciatis quibusdam illo.
                </p>
                <br />
                <p className='text-xl mt-10'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex qui voluptatum animi voluptatibus temporibus quae illum adipisci molestias quo dolores. Quod sapiente cupiditate ad eligendi eaque ea doloribus beatae mollitia fuga, ab ut temporibus quasi possimus natus? Molestias, hic sunt. Perferendis aspernatur praesentium repudiandae maiores magni nemo soluta commodi consectetur?
                </p>

            </div>
        </div>
    )
}

export default About