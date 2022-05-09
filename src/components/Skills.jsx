import React from 'react'

import HTML from '../Asset/html.png';
import CSS from '../Asset/css.png';
import JavaScript from '../Asset/javascript.png';
import ReactImg from '../Asset/react.png';
import FireBase from '../Asset/firebase.png';
import GitHub from '../Asset/github.png';
import Tailwind from '../Asset/tailwind.png';
import Cpp from '../Asset/c-.png';

const Skills = () => {
  return (
    <div name= "skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className = "text-4xl font-bold inline border-b-4 border-yellow-400">Experience</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center p-8'>
                <div className="shadow-md m-3 shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={Cpp} alt=""/>
                    <p className='my-4'>Cpp</p>
                </div>
                
                
                <div className="shadow-md m-3 shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={HTML} alt=""/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className="shadow-md m-3 shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={CSS} alt=""/>
                    <p className='my-4'>Css</p>
                </div>
                <div className="shadow-md m-3 shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={JavaScript}t=""/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className="shadow-md m-3 shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={ReactImg} alt=""/>
                    <p className='my-4'>React</p>
                </div>
                <div className="shadow-md m-3 shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={GitHub} alt=""/>
                    <p className='my-4'>Github</p>
                </div>
                <div className="shadow-md m-3 shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={FireBase} alt=""/>
                    <p className='my-4'>Firebase</p>
                </div>
                <div className="shadow-md m-3 shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={Tailwind} alt=""/>
                    <p className='my-4'>Tailwind Css</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills