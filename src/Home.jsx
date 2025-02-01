import './App.css';
import { useState } from 'react';
import React from 'react';
import logo from './assets/logo.png'
import insta from './assets/insta.png'
import b1 from './assets/b1.png'
import b2 from './assets/b2.png'
import b3 from './assets/b3.png'
import b4 from './assets/b4.png'
import b5 from './assets/b5.png'
import b6 from './assets/b6.png'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


function Home() {

  const [slideBuilds, setSlideBuilds] = useState([
    {
      img: b1,
    },
    {
      img: b2,
    },
    {
      img: b3,
    },
    {
      img: b4,
    },
    {
      img: b5,
    },
    {
      img: b6,
    }
  ])

  const [index, setIndex] = useState(0);
  const [nav, setNav] = useState(false)

  const navigate = useNavigate();
 
  const handleNextImg = () => {
      setIndex((prev) => (prev + 1) % slideBuilds.length)
  }

  const handlePrevImg = () => {
      setIndex((prev) => prev === 0 ? prev = slideBuilds.length - 1 : prev - 1)
  }

  const handleNav = () => {
      setNav(!nav);
  }

  const getPositionClass = (imageIndex) => {
    if (imageIndex === index) return 'z-10 scale-100 opacity-100';
    if (imageIndex === (index + 1) % slideBuilds.length)
      return 'z-5 scale-75 opacity-80 translate-x-[45%]';
    if (
      imageIndex ===
      (index - 1 + slideBuilds.length) % slideBuilds.length
    )
      return 'z-5 scale-75 opacity-80 -translate-x-[145%]';
    return 'opacity-0 scale-50 hidden';
  };


  return (
    <div className='font-mono flex flex-col min-h-screen'>
      <div className='w-full relative z-10 h-[600px]  bg-zinc-800 bg-center bg-no-repeat bg-cover bg-[url("https://live.staticflickr.com/5604/15634392837_777f361c16_h.jpg")]' >
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
            <div className='border-b-2 w-4/5 md:w-[600px]'>
              <h1 className='text-green-200 text-4xl sm:text-6xl text-center  pb-2 pr-24'>FrogShade's</h1>
              <h1 className='text-green-200 text-4xl sm:text-6xl text-center pb-4 pl-24'>Portfolio</h1>
            </div>
            
            <p className='text-gray-200 pt-4 text-center w-4/5 md:w-[600px]'>Welcome to my portfolio, where I showcase my creative Minecraft builds and epic adventures! Dive into a world of imagination as I share my favorite projects.</p>
          </div>
      </div>
      <div className='mt-44 flex flex-col items-center border-b-2 md:w-[750px] w-4/5 mx-auto border-amber-500 justify-center '>
        <h1 className='text-amber-500 font-bold text-4xl'>Builds</h1>
        <p className='pt-4 pb-4 md:w-[600px] w-[3/5] text-center'>Each of my Minecraft builds is designed with attention to detail, blending creativity and functionality to create immersive, one-of-a-kind experiences.</p>
      </div>
        
          <div className='mt-24 mb-4 md:mb-44 h-[400px] flex items-center justify-center relative'>
            <div className='w-12 h-12 flex justify-center items-center bg-amber-500 border-0 text-white text-3xl rounded-full absolute mr-48 sm:mr-96 z-20 mt-44 sm:-mt-32 md:mt-0 md:static md:mr-8 cursor-pointer hover:bg-amber-600' onClick={handlePrevImg}><MdOutlineArrowBackIos /></div>
            <div className="relative flex items-center justify-center w-[1500px] max-w-2xl lg:max-w-4xl h-[360px] overflow-hidden">
            <div className="relative w-[680px] h-[360px]">
              {slideBuilds.map((build, id) => (
                <div key={id} className={`absolute w-[450px] md:w-[680px] h-[360px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${getPositionClass(id)}`}>
                    <img className='w-[450px] md:w-[680px] h-[240px] md:h-[360px]' src={build.img} />
                    <div className={`relative flex flex-col -mt-20 md:-mt-20 ml-4 items-start justify-start z-20`}>
                      <img className='w-16 h-16 border-0 rounded-full' src={logo} />
                    </div>
                </div>
              ))}
              
            </div>
            </div>                  
            <div className='w-12 h-12 flex justify-center items-center bg-amber-500 border-0 text-white text-3xl rounded-full absolute ml-48 sm:ml-96 mt-44 sm:-mt-32 md:mt-0 z-20 md:static md:ml-8 cursor-pointer hover:bg-amber-600' onClick={handleNextImg}><MdOutlineArrowForwardIos /></div>
          </div>
          
          <h1 className='font-bold text-4xl sm:text-5xl pl-8 sm:pl-16 pb-4 text-orange-500'>Socials</h1>
          <div className='w-full lg:h-80 h-max flex flex-col lg:flex-row mb-48 justify-center items-center bg-orange-400'>
              <div className='sm:w-[500px] w-11/12  h-max sm:h-64 mb-8 lg:mt-0 mt-8 lg:mb-0 lg:mr-8 bg-zinc-800 border-0 rounded-xl'>
                <div className='flex flex-col sm:flex-row justify-around gap-4 items-center mt-8 px-6 mx-auto'>
                  <FaTwitter className='text-8xl w-80 text-sky-500' />
                  <p className='text-white text-lg text-center'>Check out my Twitter for updates and showcases of my latest Minecraft builds and creations!</p>
                </div>
                <div className='flex justify-center mb-4 mt-12'>
                  <a className='w-full text-center' href='https://x.com/FrogShade_'><button className='bg-sky-500 sm:w-80 w-4/5 h-10 border-0 rounded-lg text-xl text-zinc-800 hover:opacity-90'>Check</button></a>
                </div>               
              </div>
              <div className='w-11/12 sm:w-[500px] h-max sm:h-64 lg:mb-0 mb-8 lg:ml-8 bg-zinc-800 border-0 rounded-xl'>                
                <div className='flex flex-col sm:flex-row justify-around gap-4 items-center mt-10 px-6 mx-auto'>
                  <img src={insta} className='w-20 h-20' />
                  <p className='text-white text-lg text-center'>Discover the visual side of my Minecraft creations, designs on Instagram, with close-up shots and detailed views of my latest builds!</p>
                </div>
                <div className='flex justify-center mb-4 mt-6'>
                  <a className='w-full text-center' href='https://www.instagram.com/frog.shade/'><button className='bg-gradient-to-r from-[#f9ce34] to-[#ee2a7b] sm:w-80 w-4/5 h-10 border-0 rounded-lg text-xl text-zinc-800 hover:opacity-90'>Check</button></a>
                </div> 
              </div>
          </div>

        <div className='bg-zinc-800 flex mt-auto  w-full justify-center items-center h-40'>
          <p className='text-white opacity-90 text-lg'>@ FrogShade 2025</p>
        </div>
    </div>
  );
}

export default Home;
