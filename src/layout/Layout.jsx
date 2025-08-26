import React from 'react'
import Profile from '../page/Profile'
import AwardsWinnings from '../page/Award'
import SummarySection from '../page/SummarySection'
import CareerJourney from '../page/CareerJourney'
import MentorSection from '../page/MentorSection'
const Layout = () => {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,#000000_0%,#082231_33.48%)] max-w-6xl mx-auto">
        <Profile />
        <SummarySection />
        <CareerJourney />
        <AwardsWinnings />
        <MentorSection />
      </div>


    </>
  )
}

export default Layout