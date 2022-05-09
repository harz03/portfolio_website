import React from 'react'

const Contact = () => {
  return (
    <div name = "contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below email-harshit.3851@gmail.com</p>
                </div>
                <input className='p-2' type= "text" placeholder = 'Name' name='name'/>
                <input className='my-4 p-2 ]' type= "email" placeholder = 'Email' name='email'/>
                <textarea className= "p-2" name='message' rows='10' placeholder="Message"/>
                <button className='text-white border-2 hover:bg-yellow-400 hover:border-yellow-800
                
                px-4 py-3 my-8 mx-auto items-center'>Lets Contact</button>
        </form>
    </div>
  )
}

export default Contact