import React from 'react'
import { useState } from 'react'

export default function Header() {

    let [nav , setNav] = useState(true)

    function umarali(){
        setNav(false)
    }
    function durbek(){
        setNav(true)
    }
  return (
    <div>
        <header className='md:pt-5 md:pb-5 pt-4 pb-4 px-5 bg-[#323232] fixed w-full z-20 '>
            <div className="max-w-[1250px] mx-auto flex items-center justify-between">
                <a href="#" className="flex ">
                    <svg width="136" height="42" viewBox="0 0 136 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.5999 29L50.5199 29L50.5199 26.46L44.3199 26.46L44.3199 14.6L41.5999 14.6L41.5999 29ZM56.5803 29.3C57.6603 29.3 58.6103 29.06 59.4303 28.58C60.2569 28.0933 60.9003 27.4233 61.3603 26.57C61.8269 25.71 62.0603 24.72 62.0603 23.6C62.0603 22.4867 61.8303 21.5033 61.3703 20.65C60.9103 19.79 60.2669 19.1167 59.4403 18.63C58.6203 18.1433 57.6669 17.9 56.5803 17.9C55.5136 17.9 54.5703 18.14 53.7503 18.62C52.9303 19.1 52.2869 19.77 51.8203 20.63C51.3536 21.4833 51.1203 22.4733 51.1203 23.6C51.1203 24.7133 51.3469 25.7 51.8003 26.56C52.2603 27.4133 52.9003 28.0833 53.7203 28.57C54.5403 29.0567 55.4936 29.3 56.5803 29.3ZM56.5803 26.76C55.7336 26.76 55.0903 26.4767 54.6503 25.91C54.2169 25.3367 54.0003 24.5667 54.0003 23.6C54.0003 22.66 54.2069 21.9 54.6203 21.32C55.0403 20.7333 55.6936 20.44 56.5803 20.44C57.4403 20.44 58.0869 20.7267 58.5203 21.3C58.9603 21.8733 59.1803 22.64 59.1803 23.6C59.1803 24.5267 58.9636 25.2867 58.5303 25.88C58.1036 26.4667 57.4536 26.76 56.5803 26.76ZM68.1393 29.3C68.646 29.3 69.1126 29.24 69.5393 29.12C69.9726 29 70.366 28.83 70.7193 28.61L70.7193 29.7C70.7326 30.1 70.6293 30.4333 70.4093 30.7C70.196 30.9733 69.9093 31.1767 69.5493 31.31C69.1893 31.45 68.806 31.52 68.3993 31.52C68.0193 31.52 67.666 31.4367 67.3393 31.27C67.0193 31.1033 66.7726 30.86 66.5993 30.54L64.0793 31.76C64.4926 32.46 65.0826 33.0233 65.8493 33.45C66.616 33.8833 67.4593 34.1 68.3793 34.1C69.1726 34.1 69.9093 33.9933 70.5893 33.78C71.2693 33.5733 71.8426 33.2567 72.3093 32.83C72.7826 32.4033 73.106 31.86 73.2793 31.2C73.3393 30.9667 73.3793 30.73 73.3993 30.49C73.426 30.2567 73.4393 30.0067 73.4393 29.74L73.4393 18.2L71.0593 18.2L71.0593 18.8C70.6926 18.5133 70.276 18.2933 69.8093 18.14C69.3493 17.98 68.8393 17.9 68.2793 17.9C67.246 17.9 66.346 18.1467 65.5793 18.64C64.8126 19.1333 64.216 19.81 63.7893 20.67C63.3693 21.5233 63.1593 22.5 63.1593 23.6C63.1593 24.68 63.366 25.65 63.7793 26.51C64.1993 27.37 64.7826 28.05 65.5293 28.55C66.276 29.05 67.146 29.3 68.1393 29.3ZM68.5793 26.88C67.9926 26.88 67.5126 26.7333 67.1393 26.44C66.766 26.1467 66.4893 25.7533 66.3093 25.26C66.1293 24.76 66.0393 24.2067 66.0393 23.6C66.0393 23 66.1326 22.4533 66.3193 21.96C66.506 21.46 66.7926 21.0633 67.1793 20.77C67.5726 20.47 68.0726 20.32 68.6793 20.32C69.5326 20.32 70.1426 20.6233 70.5093 21.23C70.876 21.83 71.0593 22.62 71.0593 23.6C71.0593 24.58 70.8726 25.3733 70.4993 25.98C70.1326 26.58 69.4926 26.88 68.5793 26.88ZM80.5998 29.3C81.6798 29.3 82.6298 29.06 83.4498 28.58C84.2764 28.0933 84.9198 27.4233 85.3798 26.57C85.8464 25.71 86.0798 24.72 86.0798 23.6C86.0798 22.4867 85.8498 21.5033 85.3898 20.65C84.9298 19.79 84.2864 19.1167 83.4598 18.63C82.6398 18.1433 81.6864 17.9 80.5998 17.9C79.5331 17.9 78.5898 18.14 77.7698 18.62C76.9498 19.1 76.3064 19.77 75.8398 20.63C75.3731 21.4833 75.1398 22.4733 75.1398 23.6C75.1398 24.7133 75.3664 25.7 75.8198 26.56C76.2798 27.4133 76.9198 28.0833 77.7398 28.57C78.5598 29.0567 79.5131 29.3 80.5998 29.3ZM80.5998 26.76C79.7531 26.76 79.1098 26.4767 78.6698 25.91C78.2364 25.3367 78.0198 24.5667 78.0198 23.6C78.0198 22.66 78.2264 21.9 78.6398 21.32C79.0598 20.7333 79.7131 20.44 80.5998 20.44C81.4598 20.44 82.1064 20.7267 82.5398 21.3C82.9798 21.8733 83.1998 22.64 83.1998 23.6C83.1998 24.5267 82.9831 25.2867 82.5498 25.88C82.1231 26.4667 81.4731 26.76 80.5998 26.76ZM91.2828 29L94.0028 29L94.0028 23.06L100.443 23.06L100.443 29L103.163 29L103.163 14.6L100.443 14.6L100.443 20.52L94.0028 20.52L94.0028 14.6L91.2828 14.6L91.2828 29ZM110.49 29.3C111.53 29.3 112.487 29.0267 113.36 28.48C114.24 27.9333 114.884 27.1667 115.29 26.18L112.57 25.4C112.157 26.3067 111.41 26.76 110.33 26.76C109.59 26.76 109.007 26.5533 108.58 26.14C108.16 25.7267 107.9 25.1333 107.8 24.36L115.38 24.36C115.494 23.0533 115.36 21.9167 114.98 20.95C114.6 19.9833 114.014 19.2333 113.22 18.7C112.427 18.1667 111.464 17.9 110.33 17.9C109.264 17.9 108.32 18.1433 107.5 18.63C106.68 19.11 106.037 19.7867 105.57 20.66C105.104 21.5333 104.87 22.56 104.87 23.74C104.87 24.82 105.107 25.78 105.58 26.62C106.06 27.4533 106.72 28.11 107.56 28.59C108.407 29.0633 109.384 29.3 110.49 29.3ZM110.45 20.26C111.104 20.26 111.604 20.4233 111.95 20.75C112.304 21.0767 112.53 21.6067 112.63 22.34L107.87 22.34C108.157 20.9533 109.017 20.26 110.45 20.26ZM117.138 29L119.878 29L119.878 23.48C119.878 22.2267 120.372 21.3733 121.358 20.92C121.678 20.7667 122.035 20.6767 122.428 20.65C122.828 20.6167 123.178 20.6467 123.478 20.74L123.478 18.2C122.992 18.14 122.505 18.1533 122.018 18.24C121.532 18.32 121.092 18.48 120.698 18.72C120.445 18.8667 120.222 19.0433 120.028 19.25C119.842 19.4567 119.678 19.6867 119.538 19.94L119.538 18.2L117.138 18.2L117.138 29ZM129.705 29.3C130.745 29.3 131.702 29.0267 132.575 28.48C133.455 27.9333 134.098 27.1667 134.505 26.18L131.785 25.4C131.372 26.3067 130.625 26.76 129.545 26.76C128.805 26.76 128.222 26.5533 127.795 26.14C127.375 25.7267 127.115 25.1333 127.015 24.36L134.595 24.36C134.708 23.0533 134.575 21.9167 134.195 20.95C133.815 19.9833 133.228 19.2333 132.435 18.7C131.642 18.1667 130.678 17.9 129.545 17.9C128.478 17.9 127.535 18.1433 126.715 18.63C125.895 19.11 125.252 19.7867 124.785 20.66C124.318 21.5333 124.085 22.56 124.085 23.74C124.085 24.82 124.322 25.78 124.795 26.62C125.275 27.4533 125.935 28.11 126.775 28.59C127.622 29.0633 128.598 29.3 129.705 29.3ZM129.665 20.26C130.318 20.26 130.818 20.4233 131.165 20.75C131.518 21.0767 131.745 21.6067 131.845 22.34L127.085 22.34C127.372 20.9533 128.232 20.26 129.665 20.26Z" fill="#DEDEDE"/>
                    <path d="M11.3938 35.4538L17.7277 17.2308H22.6108L14.0123 42H8.81077L0.212308 17.2308H5.09538L11.3938 35.4538Z" fill="#DEDEDE"/>
                    <path d="M17.6061 7.39234L11.2722 25.6154L6.38917 25.6154L14.9876 0.84619L20.1892 0.846191L28.7876 25.6154L23.9046 25.6154L17.6061 7.39234Z" fill="#DEDEDE"/>
                    </svg>
                </a>
                <ul className="md:flex hidden items-center justify-center gap-14">
                    <li className=""><a href="#" className="font-bold text-lg text-[#DEDEDE] hover:text-[#9D9D9D] transition-all">Home</a></li>
                    <li className=""><a href="#" className="font-bold text-lg text-[#DEDEDE] hover:text-[#9D9D9D] transition-all">Work</a></li>
                    <li className=""><a href="#" className="font-bold text-lg text-[#DEDEDE] hover:text-[#9D9D9D] transition-all">Contact</a></li>
                </ul>
                <a href="#" onClick={umarali} className="flex md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                    <path d="M1 17H22M1 1H22H1ZM1 9H22H1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>

                <div style={nav ? {left: "-100%"} : {left: "0"}} className="md:hidden fixed top-0 pt-10  bg-[#323232b0] backdrop-blur-md transition-all left-0 block h-full w-full">
                    <button  onClick={durbek}  className=" absolute top-4 right-0 text-5xl flex justify-end pr-5">
                    <svg className='w-8 hamburger-x' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                    </button>
                <ul className="md:hidden flex flex-col items-center mt-20 justify-center gap-10">
                    <li className=""><a href="#" className="font-bold text-lg text-[#DEDEDE] hover:text-[#9D9D9D] transition-all">Home</a></li>
                    <li className=""><a href="#" className="font-bold text-lg text-[#DEDEDE] hover:text-[#9D9D9D] transition-all">Work</a></li>
                    <li className=""><a href="#" className="font-bold text-lg text-[#DEDEDE] hover:text-[#9D9D9D] transition-all">Contact</a></li>
                </ul>
                </div>
            </div>
        </header>
    </div>
  )
}
