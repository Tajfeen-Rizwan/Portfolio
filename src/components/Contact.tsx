import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='contact' className='pt-32-container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl pt-36 pl-24 '  data-aos="zoom-in-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-1 pl-24 text-2xl'  data-aos="zoom-in-up">
               Drop me a line, give me a call, or send me a message. Feel free to reach out via this form, and i'll be in touch soon.
            </p>
            <div className='flex gap-3 items-center pl-24'  data-aos="zoom-in-up">
            <MdOutlineMailOutline  size={30}/> tajfeenr@gmail.com
            </div>
            <div className='flex gap-3 items-center pl-24'  data-aos="zoom-in-up">
            <BsTelephone size={30}/> (031) 000-0000
            </div>
            <div className='flex gap-3 items-center pl-24'  data-aos="zoom-in-up">
            <IoLogoInstagram size={30}/> tajfeen._.rizwan
            </div>
        </div>
        <div className='space-y-8 '>
        <div className='flex flex-col gap-1 pt-36 pr-4'  data-aos="zoom-in-up">
            <label htmlFor='name'>Name :</label>
            <input type='text'
            className='h-[40px] bg-transparent border border-indigo-600 ' 
            id='name'/>
        </div>
        <div className='flex flex-col gap-1  pr-4'  data-aos="zoom-in-up">
            <label htmlFor='email'>Email :</label>
            <input type='text'
            className='h-[40px] bg-transparent border border-indigo-600 ' 
            id='email'/>
        </div>
        <div className='flex flex-col gap-1  pr-4'  data-aos="zoom-in-up">
            <label htmlFor='msg'>Message :</label>
            <textarea 
            className=' bg-transparent border border-indigo-600 ' 
            id='msg' rows={8}>
            </textarea>
        </div>
        <button className='bg-indigo-700 p-2 px-6'  data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
