import React from 'react'
import Profile from '../page/Profile'
import AwardsWinnings from '../page/Award'
import SummarySection from '../page/SummarySection'
import CareerJourney from '../page/CareerJourney'
import MentorSection from '../page/MentorSection'
import GraphicDesign from '../page/GraphicDesign'
import Ui_page from '../page/Ui_page'
import cap from '../assets/Ashwani (2)/cap.png'
import Motion from '../page/Motion'
import Contact from '../page/Contact'
const Layout = () => {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,#000000_0%,#082231_33.48%)] max-w-6xl mx-auto">
        <Profile />
        <SummarySection />
        <CareerJourney />
        <AwardsWinnings />
        <MentorSection />
        <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) text-white mt-20 mb-[80px]  pl-[127px]">

          <div className="flex items-center  gap-[50px]">
            {/* Graduation Cap Icon */}
            <div>
              <img src={cap} alt="Graduation Cap" className="w-38 h-38" />
            </div>

            {/* Text Content */}
            <div className="p-2 space-y-2" >
              <h1 className="text-3xl lg:text-6xl font-bold  poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent">
                Graduate in Bachelor <br /> of arts
              </h1>
              <span className="text-xl   text-[#cadfeb] poppins-thin">CCS University</span>
            </div>
          </div>
        </section>
        <GraphicDesign />
        <Ui_page/>
        <Motion/>
        <Contact/>
      </div>


    </>
  )
}

export default Layout