import React from 'react'
import VisualImg from "./img/viaual/visualImg1.png"
import VisualImg2 from "./img/viaual/visualImg2.png"
import VisualImg3 from "./img/viaual/visualImg3.png"
import VisualImg4 from "./img/viaual/visualImg4.png"
import VisualImg5 from "./img/viaual/visualImg5.png"
import VisualImg6 from "./img/viaual/visualImg6.png"

export default function Visual() {
  return (
    <div>
        <section className="md:pt-[120px] md:pb-[120px]  pt-14 pb-[100px] bg-[#202020] px-5">
            <div className="max-w-[1250px] mx-auto">
                <h2 className="font-bold md:text-[36px] md:leading-[49px] text-center text-[28px] leading-[38px] mb-[34px] text-[#DEDEDE] md:mb-[65px]">Visual Explorations</h2>
                <div className="md:grid md:grid-cols-3 flex flex-col md:gap-6 gap-4 items-center">
                  <div className="md:w-[408px] w-full h-[200px] md:h-[408px]">
                    <img src={VisualImg} alt="" className="w-full h-[208px] flex rounded md:w-[408px] md:h-[408px] visual-cards-card " />
                  </div>
                  <div className="md:w-[408px] w-full h-[200px] md:h-[408px]">
                    <img src={VisualImg2} alt="" className="w-full h-[208px] flex rounded md:w-[408px] md:h-[408px] visual-cards-card " />
                  </div>
                  <div className="md:w-[408px] w-full h-[200px] md:h-[408px]">
                    <img src={VisualImg3} alt="" className="w-full h-[208px] flex rounded md:w-[408px] md:h-[408px] visual-cards-card " />
                  </div>
                  <div className="md:w-[408px] w-full h-[200px] md:h-[408px]">
                    <img src={VisualImg4} alt="" className="w-full h-[208px] flex rounded md:w-[408px] md:h-[408px] visual-cards-card " />
                  </div>
                  <div className="md:w-[408px] w-full h-[200px] md:h-[408px]">
                    <img src={VisualImg5} alt="" className="w-full h-[208px] flex rounded md:w-[408px] md:h-[408px] visual-cards-card " />
                  </div>
                  <div className="md:w-[408px] w-full h-[200px] md:h-[408px]">
                    <img src={VisualImg6} alt="" className="w-full h-[208px] flex rounded md:w-[408px] md:h-[408px] visual-cards-card " />
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}
