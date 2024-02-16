import React from 'react'
import { aboutSection,AppText } from '../constants'
import { laptop, wave } from '../assests'

const AboutMe = () => {
  return (
    <div>
      <img src={wave} className='w-screen absolute'/>
      <img src={laptop} className='absolute mt-[-100px] '/>
    <div className='h-[300px] bg-purple-600 w-full '>
      <h2 className='text-[50px] p-10 font-bold text-white text-center'>{AppText.About}<span className='text-black'>
        {AppText.Me}</span></h2>
        <h2 className='text-white text-bold mt-10 text-center px-10 md:px-64 lg:px-100'>
          {AppText.aboutMeDescripion}
        </h2>
    </div>
    <div className='flex flex-col  justify-around items-center md:flex-row px-30 mt-[-60px] '>{
      aboutSection.map((item,index)=>(
        <div className='group hover:bg-purple-600 mb-5 p-7 rounded-3xl'>
          <img src={item.image} className='w-[230px] h-[230px] object-cover  rounded-md  '/>

          <div className='w-[230px] pb-[20px]'>
          <h2 className='font-bold text-center group-hover:text-white' >{item.title}</h2>
          <h2 className='text-[12px] text-gray-500 text-center  group-hover:text-white'>{item.desc}</h2>
          </div>
          </div>
      ))
    }
    </div>
    </div>
  )
}

export default AboutMe