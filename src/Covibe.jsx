import React from "react";

export default function Covibe() {
  return (
    <div>
      <section className="md:pt-32 md:pb-[100px] pt-14 pb-[61px] px-5 bg-[#202020]">
        <div className="max-w-[1250px] mx-auto">
          <div className="lg:w-[344px] md:w-full sm:w-full w-full">
            <p className="text-[#959595] font-bold text-base leading-4 mb-3 ">Covibe</p>
            <h2 className="text-[#dedede] md:font-semibold font-bold md:text-2xl text-[30px] mb-20 leading-10 md:mb-[112px]">Co-working spaces for tech startups</h2>
          </div>
          <ul className="md:flex grid grid-cols-2 gap-20 lg:w-[1000px] md:w-full md:justify-between md:mb-[290px] mb-[126px]" >
            <li className=""><a href="#" className="uppercase text-[#a5a5a5] flex gap-3 flex-col md:text-base md:leading-4 md:font-bold text-base leading-4 font-bold  ">client<span className="text-[#dedede] capitalize font-bold text-xl leading-9 md:font-bold md:text-xl">Covibe</span></a></li>
            <li className=""><a href="#" className="uppercase text-[#a5a5a5] flex gap-3 flex-col md:text-base md:leading-4 md:font-bold text-base leading-4 font-bold  ">role<span className="text-[#dedede] capitalize font-bold text-xl leading-9 md:font-bold md:text-xl">Product Designer</span></a></li>
            <li className=""><a href="#" className="uppercase text-[#a5a5a5] flex gap-3 flex-col md:text-base md:leading-4 md:font-bold text-base leading-4 font-bold  ">industry<span className="text-[#dedede] capitalize font-bold text-xl leading-9 md:font-bold md:text-xl">Co-working</span></a></li>
            <li className=""><a href="#" className="uppercase text-[#a5a5a5] flex gap-3 flex-col md:text-base md:leading-4 md:font-bold text-base leading-4 font-bold  ">duration<span className="text-[#dedede] capitalize font-bold text-xl leading-9 md:font-bold md:text-xl">2 Months</span></a></li>
          </ul>
          <div className="lg:w-[1248px] w-full md:w-[700px] md:mb-[88px] mb-12">
            <p className="text-[#a5a5a5] mb-3 font-bold text-base leading-4 uppercase">defining the problem</p>
            <h2 className="text-[#dedede] font-bold text-[32px] md:leading-[54px] leading-[44px]">Designing a product that helps new startups setup their business in a coworking space with budget constraints.</h2>
          </div>
          <a href="#" className="font-bold text-base leading-4 border-b-2 text-[#a5a5a5] inline-block pb-3  uppercase">launch prototype</a>

        </div>
      </section>
    </div>
  );
}
