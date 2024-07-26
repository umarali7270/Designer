import React from 'react'
import GallaryImg1 from "./img/gallry/gallary4.png"
import GallaryImg2 from "./img/gallry/gallary1.png"
import GallaryImg3 from "./img/gallry/gallary2.png"
import GallaryImg4 from "./img/gallry/gallary3.png"
export default function Gallary() {
  return (
    <div>
        <section className="md:pt-[157px] md:pb-[120px]  bg-[#202020] px-5">
            <div className="max-w-[1250px] mx-auto">
                <a href="#" className="text-[#DEDEDE] font-bold text-base leading-4 flex gap-6 items-center mb-20"><span>
                    
<svg width="16" height="33" viewBox="0 0 16 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.29289 32.7071C7.68342 33.0976 8.31658 33.0976 8.70711 32.7071L15.0711 26.3431C15.4616 25.9526 15.4616 25.3195 15.0711 24.9289C14.6805 24.5384 14.0474 24.5384 13.6569 24.9289L8 30.5858L2.34315 24.9289C1.95262 24.5384 1.31946 24.5384 0.928933 24.9289C0.538409 25.3195 0.538409 25.9526 0.928933 26.3431L7.29289 32.7071ZM7 4.37114e-08L7 32L9 32L9 -4.37114e-08L7 4.37114e-08Z" fill="#DEDEDE"/>
</svg>

                    </span>Featured Work</a>
                <div className="md:grid md:grid-cols-2 grid-cols-1 gap-6 flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-5">
                        <div className="relative md:w-full md:h-[888px] gallery overflow-hidden w-[350px] h-[450px] ">
                            <img src={GallaryImg1} alt="GallaryImg" className="object-cover md:h-full flex mb-6 rounded md:w-full w-[350px] h-[450px]  " />
                            <span className= " flex items-center justify-center text-[#DEDEDE] text-4xl rounded absolute top-0 right-full  md:h-full md:w-full w-[350px] h-[450px] bg-[#00000099] transition-all ">InVersion</span>
                        </div>
                        <div className="relative md:w-full md:h-[888px] gallery overflow-hidden w-[350px] h-[450px] ">
                            <img src={GallaryImg2} alt="GallaryImg" className="object-cover md:h-full flex mb-6 rounded md:w-full w-[350px] h-[450px]  " />
                            <span className= " flex items-center justify-center text-[#DEDEDE] text-4xl rounded absolute top-0 right-full  md:h-full md:w-full w-[350px] h-[450px] bg-[#00000099] transition-all ">InVersion</span>
                        </div>
                    </div>
                    <div className=" md:pt-[138px] flex flex-col gap-5">
                    <div className="relative md:w-full md:h-[888px] gallery overflow-hidden w-[350px] h-[450px] ">
                            <img src={GallaryImg3} alt="GallaryImg" className="object-cover md:h-full flex mb-6 rounded md:w-full w-[350px] h-[450px]  " />
                            <span className= " flex items-center justify-center text-[#DEDEDE] text-4xl rounded absolute top-0 right-full  md:h-full md:w-full w-[350px] h-[450px] bg-[#00000099] transition-all ">InVersion</span>
                        </div>
                        <div className="relative md:w-full md:h-[888px] gallery overflow-hidden w-[350px] h-[450px] ">
                            <img src={GallaryImg4} alt="GallaryImg" className="object-cover md:h-full flex mb-6 rounded md:w-full w-[350px] h-[450px]  " />
                            <span className= " flex items-center justify-center text-[#DEDEDE] text-4xl rounded absolute top-0 right-full  md:h-full md:w-full w-[350px] h-[450px] bg-[#00000099] transition-all ">InVersion</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
