import React from 'react'
import PrototyeImg from './img/prototype/prototype.png'
import ProtoCardImg from './img/prototype/cardsiImg/card1.png'
import ProtoCardImg2 from './img/prototype/cardsiImg/card2.png'

export default function Prototype() {
  return (
    <div>
        <section className="bg-[#202020] md:pt-[100px] md:pb-[115px] pt-[99px] pb-[110px] bgImgPrototype">
                <div className="md:mb-[234px] mb-[226px]">
                    <img src={PrototyeImg} alt=""  className="bg-gray-500 lg:w-full w-full h-full mx-auto lg:h-[769px] proimg block" />
                </div>
            <div className="max-w-[1250px] mx-auto px-5 ">
                <div className="flex   flex-col md:gap-[275px] gap-[226px]">
                    <div className="flex md:justify-between md:flex-row  flex-col-reverse gap-16">
                        <img src={ProtoCardImg} alt="img" className="flex bg-gray-500 w-full md:w-[506px] md:h-[763px] sm:h-[577px] object-cover prototypeImg" />
                        <div className="md:w-[612px] w-full md:mt-auto md:mb-auto ">
                            <p className="text-[#a5a5a5] mb-3 font-bold text-base leading-4 uppercase">solution 1</p>
                            <h3 className="text-[#dedede] font-bold text-[32px] md:leading-[54px] leading-[44px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        </div>
                    </div>
                    <div className="flex md:justify-between md:flex-row flex-col gap-16">
                        <div className="md:w-[612px] mt-auto mb-auto">
                            <p className="text-[#a5a5a5] mb-3 font-bold text-base leading-4 uppercase">solution 2</p>
                            <h3 className="text-[#dedede] font-bold text-[32px] md:leading-[54px] leading-[44px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        </div>
                        <img src={ProtoCardImg2} alt="img" className="flex bg-gray-500 md:w-[506px] md:h-[763px] w-full  sm:h-[577px] object-cover prototypeImg" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
