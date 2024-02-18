import React, { useEffect, useState } from 'react'
import Styles from './Home.module.css';
import Nav from "./Nav";
import SplashScreen from "./SplashScreen";
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'remixicon/fonts/remixicon.css'
import { gsap } from 'gsap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, transform } from "framer-motion"
import treeImage from '../../public/Images/tree.png'; 



const Home = () => {

    const locomotiveScroll = new LocomotiveScroll();
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);


  const reviewdata = [
    {
      name: `Samantha W.`,
      img: `https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D`,
      review: `This website offers a wide range of tour options to suit every traveler's preference. Whether you're looking for a cultural experience, an adventurous trek, or a relaxing getaway, they've got you covered. 5 stars!`
    },
    {
      name: `Ellie Anderson`,
      img: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8`,
      review: `As a solo traveler, safety is my top priority. I felt secure and well-taken care of throughout the entire tour. The guides were experienced and made sure everyone adhered to safety protocols. I would definitely book with them again.`
    },
    {
      name: `Manoj Sharma`,
      img: `https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlJTIwaW5kaWFufGVufDB8fDB8fHww`,
      review: `I recently booked a tour through this website and had an amazing experience! The itinerary was well-planned, the guides were knowledgeable, and the accommodations exceeded my expectations. Highly recommended!`
    },
    {
      name: `Rigo Louie`,
      img: `https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww`,
      review: `Trekking in Chadar was a feast for the senses! The towering peaks, the sparkling glaciers, and the pristine wilderness were simply breathtaking. The expert guidance of the trekking team and the sense of adventure in the air made it an experience I'll cherish forever.`
    },
    {
      name: `Riya Mathew`,
      img: `https://images.unsplash.com/photo-1653379673398-ef3ce96555c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8`,
      review: `The Kanchenjunga Base Camp Trek was both challenging and rewarding! Surrounded by the world's highest peaks, I felt humbled by the sheer magnitude of nature. The support of the guides, the camaraderie of fellow trekkers, and the sense of accomplishment at reaching base camp were unparalleled.`
    },
    {
      name: `Mihir Desai`,
      img: `https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      review: `I've traveled extensively, and I must say, this tour exceeded my expectations. The attention to detail, the quality of service, and the overall experience were top-notch. I'll be recommending this website to all my fellow travelers!`
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    



    return (
        loading ?
        <SplashScreen/>
        :
<>
        <div className= {Styles.main}>
        
                <div className= {Styles.container}>
                    <Nav/>   

                    <div className= {Styles.container1}>
                        <div className={Styles.container2}>
                            <div className={Styles.content}>
                                <h1>Travel Bliss</h1>
                            </div>
                            <div className={Styles.travel}>
                                <h1>Travel Today―――〉</h1>
                                <p> 
                                    Travel unveils wonders, broadens perspectives, and fosters connections.
                                    Embrace exploration, seek adventure, and cherish the memories created along the journey.
                                </p>
                            </div>
                            <div className={Styles.head}>
                                <div className={Styles.head1}>
                                    <div  className={Styles.head11}>
                                        <h1>Satisfied Clients</h1>
                                        <div className={Styles.head111}>
                                            <h1><i className="ri-team-fill"></i></h1>
                                            <h2>30000+</h2>
                                        </div>
                                        
                                    </div>
                                    <div  className={Styles.head11}>
                                        <h1>Camps Organised</h1>
                                        <div className={Styles.head111}>
                                                <h1><i className="ri-tent-line"></i></h1>
                                                <h2>500+</h2>
                                            </div>
                                        </div>
                                    <div  className={Styles.head11}>
                                        <h1>Incident Happened</h1>
                                        <div className={Styles.head111}>
                                            <h1><i className="ri-first-aid-kit-fill"></i></h1>
                                            <h2>0</h2>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={Styles.cardbo}>
                            <div className={Styles.cardbo1}>
                                <h1><i className="ri-facebook-circle-line"></i></h1>
                            </div>
                            <div className={Styles.cardbo1}>
                                <h1><i className="ri-whatsapp-line"></i></h1>
                            </div>
                            <div className={Styles.cardbo1}>
                                <h1><i className="ri-twitter-line"></i></h1>
                            </div>
                            <div className={Styles.cardbo1}>
                                <h1><i className="ri-instagram-line"></i></h1>
                            </div>
                        </div> 
                    </div>

                        
                </div>


            <div className={Styles.choose}>
                <h1>Why Choose Us</h1>
                <div className={Styles.content1}>
                    <div className={Styles.card}>
                        <div className={Styles.cardimage1}></div>
                        <div className={Styles.category}> Expertise and Experience</div>
                        <div className={Styles.heading}>With years of experience in the travel industry, we bring unparalleled expertise and insider knowledge to every journey. Our team of seasoned professionals is dedicated to curating exceptional travel experiences tailored to your preferences and interests.</div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.cardimage2}></div> 
                        <div className={Styles.category}> Safety and Security</div>
                        <div className={Styles.heading}> Your safety and security are our top priorities. We adhere to the highest standards of safety protocols and work closely with trusted partners and suppliers to ensure that every aspect of your journey is safe, secure, and hassle-free.</div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.cardimage3}></div>
                        <div className={Styles.category}> Exceptional Value</div>
                        <div className={Styles.heading}>We believe that extraordinary travel experiences shouldn't come with an exorbitant price tag. That's why we strive to offer exceptional value without compromising on quality, comfort, or service. With transparent pricing and no hidden fees, you can trust that you're getting the best value for your investment.</div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.cardimage4}></div>
                        <div className={Styles.category}> Unforgettable Experiences</div>
                        <div className={Styles.heading}> We're passionate about creating unforgettable experiences that inspire, excite, and enrich your life. Whether you're seeking adventure, relaxation, cultural immersion, or a combination of experiences, our meticulously crafted tours promise memories that last a lifetime.</div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.cardimage5}></div>
                        <div className={Styles.category}> Flexibility and Customization</div>
                        <div className={Styles.heading}>We understand that every traveler is unique, which is why we offer flexible tour options and customizable itineraries to suit your preferences and schedule. Whether you prefer a guided group tour or a private adventure tailored just for you, we'll create the perfect travel experience that aligns with your vision.</div>
                    </div>
                </div>
            </div>

            <div className={Styles.pg3}>
                    <motion.h1 initial={{y:'100%', rotate:'2deg', opacity: 0 }} whileInView={{y:'0' , rotate:'0deg' , opacity: 1}} transition={{ease:[0.76,0,0.24,1], duration:1}}>Treckking</motion.h1>
                    <div  className={Styles.content3}>
                        <motion.div initial={{y:'70%', rotate:'7deg', opacity: 0 }} whileInView={{y:'0' , rotate:'0deg' , opacity: 1}} transition={{ease:[0.76,0,0.24,1], duration: 1}} className={Styles.content31}>
                            <p>Trekking take you to very close to the natural landscape. Trekking also gives you unique chance to explore the 
                                culture and the people of mountain range in India. Trekking in India is very famous throughout the world.
                                We have experienced trekking guide who will provide you the best experience of your life they leads trekkers through Trekking Route while sharing 
                                knowledge of the Himalayas & local areas. 
                            </p>
                            <Link className={Styles.button} to={"/treckking"} >Know More</Link>
                        </motion.div>
                        <div className={Styles.image}>
                            <img data-scroll data-scroll-speed= '0.1' className={Styles.img1} src="https://i.pinimg.com/236x/eb/2c/89/eb2c8989fb51ce89a196b0e68aed93e7.jpg" alt=""/>
                            <img data-scroll data-scroll-speed= '0.2' className={Styles.img2} src="https://i.pinimg.com/236x/ba/3c/2c/ba3c2c622534b7433956d36dcd6b0136.jpg" alt=""/>
                            <img data-scroll data-scroll-speed= '0.2' className={Styles.img3} src="https://images.unsplash.com/photo-1663216581794-32cf10a70fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyZWNraW5nfGVufDB8fDB8fHww" alt=""/>
                        </div>
                    </div>
            </div>
            
            <div className={Styles.pg4}>
                <h1>Travel Tips and Resources</h1>
                <div className={Styles.mainpg4}>
                    <div className={Styles.tips}>
                        <div className={Styles.tips1}>
                            <p>Ensure you're prepared for your journey with our comprehensive packing checklist. From clothing and accessories to travel documents and gadgets, we've got you covered with everything you need for a seamless travel experience.</p>
                        </div>
                        <div className={Styles.tips1}>
                            <p>Protect your investment and travel with peace of mind with our recommended travel insurance options. From medical coverage to trip cancellation protection, safeguard yourself against unexpected emergencies and disruptions.</p>
                        </div>
                        <div className={Styles.tips1}>
                            <p>Stay informed about visa requirements, entry restrictions, and travel advisories for your destination. Our up-to-date information and resources help you navigate the complexities of international travel with ease.</p>
                        </div>
                        <div className={Styles.tips1}>
                            <p>Learn about currency exchange rates, ATM availability, and banking services at your destination. Our tips and recommendations ensure you have convenient access to funds and financial services during your travels.</p>
                        </div>
                        <div className={Styles.tips1}>
                            <p>Prepare for linguistic challenges and communication barriers by familiarizing yourself with common phrases and language basics. Our language guides and translation tools help facilitate meaningful interactions with locals.</p>
                        </div>
                    </div>
                    
                    <div className={Styles.linemain}>
                            <div data-scroll data-scroll-speed= '-0.5' className={`${Styles.circle1} ${Styles.circle11}`}></div>
                        {/* <div className={Styles.circle}>
                            <div className={`${Styles.circle1} ${Styles.circle12}`}></div>
                            <div className={`${Styles.circle1} ${Styles.circle13}`}></div>
                            <div className={`${Styles.circle1} ${Styles.circle14}`}></div>
                            <div className={`${Styles.circle1} ${Styles.circle15}`}></div>
                        </div> */}
                        
                        <div className={Styles.line}></div>
                        
                    </div>
                    

                    <div className={Styles.topic}>
                        <h1 className={Styles.topic1}>Packing Essentials</h1>
                        <h1 className={Styles.topic2}>Travel Insurance</h1>
                        <h1 className={Styles.topic3}>Visa and Entry Requirements</h1>
                        <h1 className={Styles.topic4}>Currency Exchange and Banking</h1>
                        <h1 className={Styles.topic5}>Language and Communication</h1>
                    </div>
                </div>
            </div>

            <div  className={Styles.pg5}>
                <h1>Most Popular Destination</h1>

                    <div className={Styles.cardcontent}>
                        <motion.div initial={{y:'60%'}} whileInView={{y:'0'}} transition={{ease:[0.76,0,0.24,1], duration:0.8}} className={`${Styles.cardcontent1} ${Styles.cardcontent11}`}>
                            <h1>Manali</h1>
                            <h2><i className="ri-money-rupee-circle-fill"></i> 22,000</h2>
                            <h2><i className="ri-sun-fill"></i> 10-15 Days </h2>
                        </motion.div>
                        <motion.div initial={{y:'60%'}} whileInView={{y:'0'}} transition={{ease:[0.76,0,0.24,1], duration:0.9}} className={`${Styles.cardcontent1} ${Styles.cardcontent12}`}>
                            <h1>France</h1>
                            <h2><i className="ri-money-rupee-circle-fill"></i> 1,38,490</h2>
                            <h2><i className="ri-sun-fill"></i> 9 Nights</h2>
                        </motion.div>
                        <motion.div initial={{y:'50%'}} whileInView={{y:'0'}} transition={{ease:[0.76,0,0.24,1], duration:1}} className={`${Styles.cardcontent1} ${Styles.cardcontent13}`}>
                            <h1>Italy</h1>
                            <h2><i className="ri-money-rupee-circle-fill"></i> 1,69,862</h2>
                            <h2><i className="ri-sun-fill"></i> 10 Days/9 Nights</h2>
                        </motion.div>
                        <motion.div initial={{y:'60%'}} whileInView={{y:'0'}} transition={{ease:[0.76,0,0.24,1], duration:1.1}} className={`${Styles.cardcontent1} ${Styles.cardcontent14}`}>
                            <h1>Lakshadweep</h1>
                            <h2><i className="ri-money-rupee-circle-fill"></i> 20,000 </h2>
                            <h2><i className="ri-sun-fill"></i> 10-12 Days </h2>                   
                        </motion.div>
                        <motion.div initial={{y:'60%'}} whileInView={{y:'0'}} transition={{ease:[0.76,0,0.24,1], duration:1.2}} className={`${Styles.cardcontent1} ${Styles.cardcontent15}`}>
                            <h1>Agra</h1>
                            <h2><i className="ri-money-rupee-circle-fill"></i> 15,000</h2>
                            <h2><i className="ri-sun-fill"></i> 10-12 Days</h2>                          
                        </motion.div>
                    
                </div> 
            </div> 

            <div className={Styles.pg6}>
                <h1>Reviews</h1>
                {/* <div> */}
                    <Slider {...settings}  className={Styles.pg6main}>
                        {reviewdata.map((d,index) => (
                        <div key={index} className={Styles.pg6content}>
                            <div className={Styles.pg6img}>
                                <img src={d.img} alt=""/>
                            </div>

                            <div className={Styles.pg6head}>
                            <h1>{d.name}</h1>
                            <p className="font-semibold text-center">{d.review}</p>
                            </div>
                        </div>
                        ))}
                    </Slider>
                {/* </div> */}
      
            </div>

            <div className={Styles.pg7}>
                <div className={Styles.pg7blog1}>
                    <img src="https://images.unsplash.com/photo-1462290625486-c142817fb94d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
                    <h1>Green Hill’s Roots</h1>
                    <p>
                        Green Hill’s roots lie in Bukit Lawang, a town near the Bohorok river in North Sumatra. The town is a gateway to the UNESCO-listed Gunung Leuser National Park, and is best known for its population of semi-wild orangutans, which emerged from a conservation project and sanctuary. 
                        <br />
                        <br />
                        I learnt that while the orangutan rehabilitation centre closed in 2002, the orangutans remained in the surrounding forest, becoming the focus of tourism in Bukit Lawang. Because the industry depends on sightings and contact with the orangutans to hook travellers, unsavoury practices have become commonplace, such as feeding the primates so visitors can snap selfies with them.
                    </p>
                </div>
                <div className={Styles.pg7blog2}>
                    <div className={Styles.pg7blog21}>
                        <img src='./Images/Dhofar.jpg'alt="" />
                        <div className={Styles.pg7blogcontent}>
                            <h1>The Dhofar</h1>
                            <p>
                            We left our desert camp around midday, having been assured the journey to Muscat would take hours and the roads might be closed. In fact it took two hours and we were dumped at the airport, very annoyed, six hours before our flight. When we came to check in, we were told that as we had not taken the first part of our flight tickets (Khasab to Muscat, cancelled by Oman Air), we could not be checked in on this ticket. 
                                <br />
                                <br />
                                   
                            </p>
                        </div>
                    </div>
                    <div className={Styles.pg7blog21}>
                        <img src="https://images.unsplash.com/photo-1584725173614-98c5925b7a02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVuaWRvcm18ZW58MHx8MHx8fDA%3D" alt="" />
                        <div className={Styles.pg7blogcontent}>
                            <h1>From Paradise to Benidorm.</h1>
                            <p>
                            Everyone has heard about the devastating tsunami of 2004 in S.E.Asia. Koh Phi Phi island was one of the most badly hit places with much loss of life. Due to the geography of the island the wave hit on two sides, many of the small bars and bungalow resorts were destroyed. We visited the island in 2006 and saw how things were gradually returning to normal. Recently we've heard from many tourists how busy Phi Phi island has become now and wanted to see for ourselves.
                                <br />
                                <br />
                                   
                            </p>
                        </div>
                    </div>
                    <div className={Styles.pg7blog21}>
                        <img src="https://images.unsplash.com/photo-1489277710675-f9125c249753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNhd3llciUyMEdsYWNpZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                        <div className={Styles.pg7blogcontent}>
                            <h1>Tracy Arm Fjord and Sawyer Glacier</h1>
                            <p>
                            Carnival Pride sailed up Stephens Passage and reached Holkham Bay, the entrance to Tracy Arm, fjord at noon. The ship continued up the fjord until Sawyer Island, where the fjord divides into North and South fjords. Susan and I had booked a small boat tour that took us up Tracy Arm, providing us with an up-close view of the fjord and its natural features.
                                <br />
                                <br />
                                   
                            </p>
                        </div>
                    </div>
                </div>
            </div>

           
            <footer className={Styles.pg8} style={{ backgroundImage: `url(${treeImage})` }}>
               
               <div className={Styles.pg8main1}>
                    <div className={Styles.pg8main}>
                        <img src='./Images/image7.png' alt=""/>
                        <h1>Travel Bliss</h1>
                       
                    </div>
                    <div className={Styles.pg8main1}>
                        <div className={Styles.pg8maincontent}>
                            <div className={Styles.pg8main11}>
                                <h1><i className="ri-mail-send-fill"></i></h1>
                                <div className={Styles.pg8main111}>
                                    <h1>Email Id</h1>
                                    <h2>travelbliss55@gmail.com</h2>
                                </div>
                            </div>
                            <div className={Styles.pg8main11}>
                                <h1><i className="ri-phone-fill"></i></h1>
                                <div className={Styles.pg8main111}>
                                    <h1>Call Us</h1>
                                    <h2>91+ 9875642358</h2>
                                </div>
                            </div>
                            <div className={Styles.pg8main12}>
                                <h1><i className="ri-map-pin-fill"></i></h1>
                                <div className={Styles.pg8main111}>
                                    <h1>Head Office</h1>
                                    <h2>311 Ashirwad, Ahmedabad St, Chinch Bunder Mumbai</h2>
                                </div>
                            </div>
                        </div>
                        
                    </div>
               </div>
               <h2>Copyright © 2024 Travel Bliss. Authority. All rights reserved </h2>
                        
            </footer>
            

        </div>

            
     {/* {loading && <SplashScreen />} */}
      
</>
    
    
  )
}

export default Home