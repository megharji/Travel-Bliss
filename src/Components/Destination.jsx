import React, {  useEffect, useState} from "react";
import Styles from './Destination.module.css';
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { asyncgetDestination } from "../store/actions/DestinationAction"; 


const Destination = () => {


  const {destinations} = useSelector((state) => state.DestinationReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(asyncgetDestination())
  
  }, [])

   
  return (

    
    <div className= {Styles.main}>
      <Nav/>
      <div className={Styles.pg2}>
      

        {destinations ? (
          destinations.map((des, index)=>(

                  <div key={index} className={Styles.cardcontent} style={{backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.450), rgba(0, 0, 0, 0.450)), url(${des.image})`,  backgroundSize: 'cover', backgroundPosition: "center"}}>
                     
                    <h1>{des.name}</h1>
                    <h2><i className="ri-sun-fill"></i> {des.days}</h2>
                    <h2><i className="ri-money-rupee-circle-fill"></i> {des.price}</h2>

                  </div>
     
          ))
        ) : (        
             <h1 >Loading...</h1>
        )
        
        }      
      </div>
    </div>
  )
}

export default Destination