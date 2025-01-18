import React from "react";
import logo from './assets/logo.png'
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function About() {
    const navigate = useNavigate();

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }
  

 return (
    <div className="font-mono flex flex-col min-h-screen">
      <div className='w-full relative z-10 h-[600px] bg-zinc-800 bg-center bg-no-repeat bg-cover bg-[url("https://live.staticflickr.com/5604/15634392837_777f361c16_h.jpg")]' >
        <nav className='w-full flex text-white text-lg font-medium border-0 items-center mx-auto h-12 pt-8'>
          <div className='w-full flex items-center justify-start'>
          <div className=' cursor-pointer border-0 flex justify-start items-center rounded-full ml-2 sm:ml-16' onClick={() => {navigate('/')}}><img className='w-[50px] h-[50px] border-0 rounded-full' src={logo}></img><p className='pl-4 text-gray-100 text-2xl'>FrogShade</p></div>
          </div>
            <div className='w-full items-center justify-end hidden md:flex'>
              <div className='w-32 flex flex-col items-center cursor-pointer hover:text-green-200 group/item' onClick={() => {navigate('/')}}>
              <div className='flex items-center'>
                <AiOutlineHome className='text-2xl font-bold mr-1' />
                <p className='mt-3 mb-2'>Home</p>
              </div>
                <div className='w-20 group-hover/item:visible invisible h-1 bg-green-200'></div>
              </div>  
              <div className='mr-16 w-32 flex flex-col items-center cursor-pointer hover:text-green-200 group/item' onClick={() => {navigate('/about')}}>
                <div className='flex items-center'>
                  <AiOutlineUser  className='text-2xl font-bold mr-1' />
                  <p className='mt-3 mb-2'>About me</p>
                </div>
                <div className='w-28 group-hover/item:visible invisible h-1 bg-green-200'></div>
              </div>
            </div>

            <div>
              <RxHamburgerMenu className='text-4xl mr-2 sm:mr-16 cursor-pointer block md:hidden hover:text-green-200 ' onClick={handleNav}/>
            </div>          
          </nav>
          {nav && (
            <div className='w-full flex flex-col text-white items-center md:hidden justify-center h-40 bg-zinc-900 bg-opacity-50 -mb-24 mt-6'>
              <div className='w-full flex flex-col mb-2 items-center  cursor-pointer hover:text-green-200 group/item'>
              <div className='flex items-center' onClick={() => {navigate('/')}}>
                <AiOutlineHome className='text-2xl font-bold mr-1' />
                <p className='mt-3 mb-2'>Home</p>
              </div>
                <div className='w-full group-hover/item:visible invisible h-1 bg-green-200'></div>
              </div>
              <div className='w-full flex flex-col items-center cursor-pointer hover:text-green-200 group/item'>
                <div className='flex items-center' onClick={() => {navigate('/about')}}>
                  <AiOutlineUser  className='text-2xl font-bold mr-1' />
                  <p className='mt-3 mb-2'>About me</p>
                </div>
                <div className='w-full group-hover/item:visible invisible h-1 bg-green-200'></div>
              </div>  
            </div>
          )}
          <div className='flex flex-col justify-center items-center h-[500px]'>
            <h1 className='text-green-200 text-5xl sm:text-6xl w-4/5 md:w-[500px] text-center border-b-2 pb-4'>About me</h1>
          </div>
        </div>
          <div className="w-11/12 sm:w-4/5 xl:w-[1100px] shadow-md h-max bg-white mx-auto mt-28 mb-28">
            <div className="border-b border-black w-4/5 mx-auto">
                <h1 className="text-4xl text-zinc-800 font-sans pt-6 pl-8 pb-2">About me</h1>
            </div>
            <div className="w-4/5 mx-auto mb-20">
                <p className="pt-8 text-lg">I am Frogshade, and I have 1.5 years of building experience. My expertise lies in Minecraft building, where I focus on creating immersive and highly detailed designs. I’ve worked on projects ranging from cozy cottages and modern homes to sprawling castles, intricate cities, and fantasy landscapes. I take pride in blending aesthetics with functionality, using advanced building techniques and paying close attention to texture and color palettes.</p>
                <p className="pt-4 text-lg">I enjoy experimenting with different styles, such as medieval, fantasy, and steampunk, various styles and I’m always exploring new ways to bring ideas to life in the game. Collaboration is also a key part of my building process, and I love contributing to large-scale community builds or working on custom maps. Whether it’s designing a survival base or crafting an adventure map, I aim to make every build unique and inspiring.</p>
            </div>
          </div>
          <div className='bg-zinc-800 flex mt-auto  w-full justify-center items-center h-40'>
            <p className='text-white opacity-90 text-lg'>@ FrogShade 2025</p>
          </div>
    </div>
 )
}

export default About;