import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Styles from './Treckking.module.css';
import Nav from "./Nav";
import LocomotiveScroll from 'locomotive-scroll';
import Kuari  from "../../public/Images/Kuari.jpg"
import Pin  from "../../public/Images/Pin.jpg"
import kanchenjunga  from "../../public/Images/kanchenjunga.jpg"
import Chadar  from "../../public/Images/Chadar.jpg"
import roopkund from "../../public/Images/roopkund.jpg"
import Kinner  from "../../public/Images/Kinner.avif"


const Treckking = () => {
  
  const locomotiveScroll = new LocomotiveScroll();


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const [items, setItems] = useState([
    { 
      id: 1, 
      imageUrl: Kuari, 
      heading: 'Kuari Pass Trek', 
      info: 'Kuari pass is a mountain lovers’ delight. You have an unending vista of the biggest mountains in India opening up right from day one. You even get to see the clearest view of the full face of Mt Nanda Devi, India’s highest mountain.  ' , 
      city: 'Uttarakhand',
      duration: "6 Days",
      HighestAltitude: "12,516 ft",
      TrekDistance: "32 Kms",
      Price: "₹ 9,850",
    },
    { 
      id: 2, 
      imageUrl: Pin, 
      heading: 'Pin Parvati Pass Trek', 
      info: 'The Pin Parvati Pass is a thrilling challenge for any seasoned trekker. It’s a long expedition that gives trekkers a massive dose of adventure, beauty and a sense of achievement.' , 
      city: 'Himachal Pradesh',
      duration: "11 Days",
      HighestAltitude: "17,400 ft",
      TrekDistance: "80 Kms",
      Price: "₹ 38500",
    },
    { 
      id: 3, 
      imageUrl: kanchenjunga,
      heading: 'Kanchenjunga Base Camp',
      info: 'As per the geographical facts, Kangchenjunga along with its five great massifs forms the third highest peaks in the world. These five massifs are Himalaya in Sikkim region started witnessing heavy footfall in the year 1988. Initially, trekking in the area was restricted so as to preserve its ecosphere.' , 
      city: 'Sikkim',
      duration: "11 Days",
      HighestAltitude: "8586 ft",
      TrekDistance: "90 Kms",
      Price: "₹ 14,700",
      
    },
    { 
      id: 4, 
      imageUrl: Chadar, 
      heading: 'Chadar Trek',
      info: 'The journey begins at Leh, a mountain town. Leh. The only method to get to Leh is via flight, and is surrounded by snow, giving it a completely white appearance. You can get an image of the mountains covered in snow during the flight as it lowers towards Leh. ' , 
      city: 'Ladakh Himalayas',
      duration: "9 Days",
      HighestAltitude: "11,100 ft",
      TrekDistance: "105 Kms",
      Price: "₹ 19,950", 
    },
    { 
      id: 5, 
      imageUrl: roopkund, 
      heading: 'Roopkund Trek',
      info: 'If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure ' , 
      city: 'Uttarakhand', 
      duration: "8 Days",
      HighestAltitude: "16,499 ft",
      TrekDistance: "53 Kms",
      Price: "₹ 13,850",
    },
    { 
      id: 6, 
      imageUrl: Kinner, 
      heading: 'Kinner Kailash Trek' ,
      info: 'Kinner Kailash is the exact point where the gods reside. Considered as one of the most challenging treks, the path leading to this mountain is certainly not an easy one and not everyone’s cup of tea.' , 
      city: 'Himachal Pradesh',
      duration: "10 Days",
      HighestAltitude: "17,200 ft",
      TrekDistance: "50 Kms",
      Price: "₹ 23,000",
    }

  ]);
 

  const handleNext = () => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const firstItem = updatedItems.shift();
      updatedItems.push(firstItem);
      return updatedItems;
    });
  };

  const handlePrev = () => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const lastItem = updatedItems.pop();
      updatedItems.unshift(lastItem);
      return updatedItems;
    });
  };

  return (
    <div  className={Styles.main}>
      <Nav/>
      <div ref={ref} className={Styles.animation}>
        
        <motion.h1
          style={{ y: textY }}
          className={Styles.head}
        >
        TRECKKING
        </motion.h1>

        <motion.div
          className={Styles.head1}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1689164358195-70d1ec201055?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div
          className={Styles.head2}
          style={{
            backgroundImage: `url('./Images/image11.png')`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
      
      <div className={Styles.container5}>
        <h1>Destination Guides</h1>
        <div className={Styles.container}>
            <div id={Styles.slide} className={Styles.slide}>
              {items.map(item => (

                <div key={item.id} className={Styles.item} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.307), rgba(0, 0, 0, 0.252)),url(${item.imageUrl})` }}>
                  <div className={Styles.content}>
                    <div className={Styles.name}><h1>{item.heading}</h1></div>
                    <div className={Styles.des1}>{item.city}</div>
                    <div className={Styles.des2}>{item.info}</div>
                    <div className={Styles.des3}>Duration: {item.duration}</div>
                    <div className={Styles.des3}>Price: {item.Price}</div>
                    <div className={Styles.des3}>Trek Distance: {item.TrekDistance}</div>
                    <div className={Styles.des3}>Highest Altitude: {item.HighestAltitude}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={Styles.buttons}>
              <button id={Styles.prev} onClick={handlePrev}><i className="ri-arrow-left-line"></i></button>
              <button id={Styles.next} onClick={handleNext}><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>

      <div className={Styles.conta}>
        <h1>Trekking Tips and Advice</h1>
        <div className={Styles.mainpg4}>
            <div className={Styles.tips}>
                <div className={Styles.tips1}>
                    <p>Research and choose a trekking route that matches your fitness level, experience, and interests. Consider factors such as altitude, terrain difficulty, weather conditions, and the duration of the trek.</p>
                </div>
                <div className={Styles.tips1}>
                    <p>Trekking can be physically demanding, especially at high altitudes and challenging terrain. Engage in regular cardiovascular and strength training exercises to improve your endurance, stamina, and muscle strength.</p>
                </div>
                <div className={Styles.tips1}>
                    <p>Pack essential items only and prioritize lightweight, moisture-wicking clothing that provides insulation and protection against the elements. Include items such as a sturdy backpack, hiking boots, waterproof jacket, extra layers, hat, sunglasses, sunscreen, first aid kit, water bottle, snacks, navigation tools, and emergency supplies.</p>
                </div>
                <div className={Styles.tips1}>
                    <p>Drink plenty of water to stay hydrated throughout your trek, especially at high altitudes where dehydration is common. Pack energy-boosting snacks and meals rich in carbohydrates, protein, and healthy fats to fuel your body during long hikes.</p>
                </div>
                <div className={Styles.tips1}>
                    <p>Trek with a companion or in a group whenever possible for safety and companionship. Inform someone trustworthy about your trekking plans, itinerary, and expected return time. Stay connected with reliable communication devices, such as mobile phones or satellite communicators.</p>
                </div>
                
            </div>
            
            <div className={Styles.linemain}>
                <div className={Styles.circle}>
                    <div className={`${Styles.circle1} ${Styles.circle11}`}></div>
                    <div className={`${Styles.circle1} ${Styles.circle12}`}></div>
                    <div className={`${Styles.circle1} ${Styles.circle13}`}></div>
                    <div className={`${Styles.circle1} ${Styles.circle14}`}></div>
                    <div className={`${Styles.circle1} ${Styles.circle15}`}></div>
                </div>
                
                <div className={Styles.line}></div>
                
            </div>
            

            <div className={Styles.topic}>
                <h1 className={Styles.topic1}>Plan Your Trekking Route</h1>
                <h1 className={Styles.topic2}>Get in Shape</h1>
                <h1 className={Styles.topic3}>Pack Light, Pack Right</h1>
                <h1 className={Styles.topic4}>Stay Hydrated and Nourished</h1>
                <h1 className={Styles.topic5}>Travel Responsibly and Safely</h1>
            </div>

        </div>
      </div>

      <div className={Styles.pg4}>
        <h1>Gear and Equipment</h1>
        <div className={Styles.pg4main}>
          <div className={Styles.Clothing}>
              <h1>✺ Clothing :</h1>
              <h2>❁ Jackets (Fiber or down)</h2>
              <h2>❁ Woolen shirts and thick sweaters.</h2>
              <h2>❁ Waterproof jacket with hood or poncho.</h2>
              <h2>❁ Tracksuit.</h2>
              <h2>❁ Track shoes</h2>
              <h2>❁ Trousers</h2>
              <h2>❁ Thermal Underwear and Thermal coat</h2>
              <h2>❁ 2 pair of loose fitting long shorts/ skirts</h2>
              <h2>❁ Pair of Gloves</h2>
              <h2>❁ Pair of sandals</h2>
              <h2>❁ Thermal underwear.</h2>
              <h2>❁ Woolen hat</h2>
              <h2>❁ Long sleeved shirt</h2>
              <h2>❁ Towel and Hankies.</h2>
              <h2>❁ Light weight walking boots</h2>
              <h2>❁ 2 pairs of thin socks and 2 pair of woolen socks</h2>
          </div>
          <div className={Styles.Equipment}>
              <h1>✺ Equipment's and Accessories :</h1>
              <h2>❁ Snow glasses and sunglasses</h2>
              <h2>❁ Trekking Sticks.</h2>
              <h2>❁ Duffle bag or kit bag to carry to gear while trekking.</h2>
              <h2>❁ 2-4 plastics bags 2-4 large plastic bags to separate clean clothes from dirty ones. 6-10 smaller plastic bags to dispose garbage.</h2>
              <h2>❁ Daypack bag to carry your personal requirements.</h2>
              <h2>❁ Water Bottle, water purifying tablets</h2>
              <h2>❁ Toilet articles and towels, Toilet paper</h2>
              <h2>❁ Umbrella (optional)</h2>
              <h2>❁ Headlamp, Torch, Candles</h2>
              <h2>❁ Matches / Lighters</h2>
              <h2>❁ Binocular, Camera, trekking map and compass, pillow, knife,  passport photograph, reading materials, pencil, rubber, pen and notebook, lip guard</h2>
              <h2>❁ Toilet papers.</h2>
          </div>
          
        </div>
      </div>

      <div className={Styles.pg5}>
        <h1>Some of our Trekking tour Insights</h1>
        <div className={Styles.mainscrolldiv}>

          <div className={Styles.cover}>
    
            <div className={Styles.scrollimages}>

              <img className={Styles.childimg} src="https://wondersoftibet.com/wp-content/uploads/2018/07/Trekking-in-the-Himalayas.jpg" alt="" draggable="false"/>
              <img className={Styles.childimg} src="https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?cs=srgb&dl=pexels-saikat-ghosh-914128.jpg&fm=jpg" alt="" draggable="false"/>
              <img className={Styles.childimg} src="https://images.unsplash.com/photo-1611154045963-d9decc1fa2f6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" draggable="false"/>
              <img className={Styles.childimg} src="https://i.pinimg.com/originals/af/6d/02/af6d02379646a6e9d5df75d777f93d79.jpg" alt="" draggable="false"/>
              <img className={Styles.childimg} src="https://media2.thrillophilia.com/images/photos/000/141/735/original/1548224730_20180114_104738.jpg?" alt="" draggable="false"/>
              <img className={Styles.childimg} src="https://images.unsplash.com/photo-1484264883846-eb04404af310?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" draggable="false"/>
              <img className={Styles.childimg} src="./Images/trek7.jpg" alt="" draggable="false"/>
              <img className={Styles.childimg} src="./Images/trek8.jpg" alt="" draggable="false"/>
              <img className={Styles.childimg} src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" draggable="false"/>
              <img className={Styles.childimg} src="./Images/trek9.jpg" alt="" draggable="false"/>          
              <img className={Styles.childimg} src="./Images/trek10.jpg" alt="" draggable="false"/>                   
              <img className={Styles.childimg} src="./Images/trek11.jpg" alt="" draggable="false"/>      
              <img className={Styles.childimg} src="./Images/trek12.jpg" alt="" draggable="false"/>    
              <img className={Styles.childimg} src="./Images/trek13.jpg" alt="" draggable="false"/>      
            </div>  


          </div>

        </div>
        <h2>⮘―――――Scroll―――――⮚ </h2>
      </div>
      
     

      <div className={Styles.pg6} id="team">
        <h1>Our Trek Guide Members</h1>
        <div className={Styles.pg6team}>
            <div className={Styles.pg6team1}>
                <h1>Darsh Sharma</h1>
            </div>
            <div className={Styles.pg6team2}>
                <h1>Aditi Patel</h1>
            </div>
            <div className={Styles.pg6team3}>
                <h1>Aadhya Varma</h1>
              
            </div>
            <div className={Styles.pg6team4}>
                <h1>Daksh Yadav</h1>
            </div>
            <div className={Styles.pg6team5}>
                <h1>Aryan Patel</h1>
            </div>
        </div>
    </div>
     

    </div>
  );
}

export default Treckking