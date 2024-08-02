import React from "react";
import ImgHero from "../img/hero/hero.png"


export default function Hero() {
  return (
    <div>
      <section className="md:pt-[210px] md:pb-[157px] pt-[145px] pb-[128px] px-5 bg-[#202020] ">
        <div className="max-w-[1250px] mx-auto md:flex md:flex-row flex flex-col-reverse justify-between">
          <div className="max-w-[600px]">
            <h1 className="font-bold md:text-[64px] text-[36px] md:leading-[70px] leading-[40px] md:text-start text-center text-[#DEDEDE] mb-6">
              Hi, I am Umarali A Product Designer based in City.
            </h1>
            <p className="text-[#959595] md:font-semibold md:text-2xl md:mb-16 text-lg text-center md:text-start mb-12">
              I help businesses and companies reach their goals by designing
              user-centric digital products & interactive experiences.
            </p>
            <a href="#" className="flex items-center md:mx-0 justify-center mx-auto gap-4 md:py-6 md:px-[100px] bg-[#9D9D9D] md:w-[400px] w-[242px] py-[20px] px-[22px]  text-[#FFFFFF]"><span>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
<path d="M20.6429 1H2.35715C1.72597 1 1.21429 1.51167 1.21429 2.14286V15.8571C1.21429 16.4883 1.72597 17 2.35715 17H20.6429C21.274 17 21.7857 16.4883 21.7857 15.8571V2.14286C21.7857 1.51167 21.274 1 20.6429 1Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M1.21429 2.71436L11.5 9.00007L21.7857 2.71436" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg></span> hi@yourname.com</a>
          </div>
          <div className="">
            <img src={ImgHero} alt="" className="flex md:w-full w-[240px] mx-auto mb-[64px]" />
          </div>
        </div>
      </section>
      
    </div>
  );
}
