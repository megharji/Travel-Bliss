import React from 'react'
import Styles from './About.module.css';
import Nav from "./Nav";
const About = () => {
  return (
    
    <div className={Styles.pg1} >
      <Nav/>
        <div className={Styles.content2} >
         
          <div className={Styles.content21}>
          <img className={Styles.contentimg3} src="./Images/pre1.png" alt="" />
            <img className={Styles.contentimg1} src='./Images/plane1.png' alt="" />
            <img className={Styles.contentimg2} src='./Images/guy.png' alt="" />
          </div>
            <div className={Styles.content22}>
              <p> Welcome to Travel Bliss, your trusted companion in unforgettable journeys and seamless travel experiences. 
                  We pride ourselves on being more than just a tour guide service—we're your dedicated partners in 
                  crafting memorable adventures. With our commitment to excellence and personalized service, we strive to make every trip with us 
                  an enriching and fulfilling experience. Our comprehensive range of services encompasses hotel bookings, flight arrangements, 
                  and transportation facilities, ensuring that every aspect of your travel is meticulously taken care of. Whether you're seeking 
                  a luxurious retreat, an adventurous escapade, or a cultural exploration, we have the expertise and resources to curate the perfect 
                  itinerary tailored to your preferences and interests.
              </p>
            </div>
        </div>
    </div>
    
  )
}

export default About