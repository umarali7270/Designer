import React from 'react'
import PersonalImg from "./img/personal/personal1.png"
import PersonalImg2 from "./img/personal/personal2.png"
import PersonalImg3 from "./img/personal/personal3.png"

export default function Personal() {
  return (
    <div>



        <section className="md:pt-[120px] md:pb-[120px]  pt-14 pb-[100px] bg-[#202020] px-5">
            <div className="max-w-[1250px] mx-auto">
                <h2 className="font-bold md:text-[36px] md:leading-[49px] text-center text-[28px] leading-[38px] mb-[34px] text-[#DEDEDE] md:mb-[65px]">Personal Projects</h2>
                <div className="md:grid md:grid-cols-3 flex flex-col md:gap-6 gap-6 items-center">
                    <div className="w-full h-full  overflow-hidden rounded">
                      <img src={PersonalImg} alt="" className="flex rounded box-card w-full md:h-full h-[400px]" />
                    </div>
                    <div className="w-full h-full  overflow-hidden rounded">
                      <img src={PersonalImg2} alt="" className="flex rounded box-card w-full md:h-full h-[400px]" />
                    </div>
                    <div className="w-full h-full  overflow-hidden rounded">
                      <img src={PersonalImg3} alt="" className="flex rounded box-card w-full md:h-full h-[400px]" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
