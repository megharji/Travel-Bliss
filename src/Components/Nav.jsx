import{NavLink} from 'react-router-dom'
import Styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className= {Styles.navbar}>
        
            <NavLink className= {Styles.nav1} style={(e)=> {
              return{
                borderBottom: e.isActive ? "dashed" : " ",
                fontSize : e.isActive ? "2vmax" : " ", 
                      }
            }} to="/">Home</NavLink>

            <NavLink className={Styles.nav1} style={(e)=> {
              return{
                borderBottom: e.isActive ? "dashed" : " ",
                fontSize : e.isActive ? "2vmax" : " "        }
            }} to="/about">About Us</NavLink>

            <img src='./Images/image2.png' alt="" />

            <NavLink className={Styles.nav1} style={(e)=> {
              return{
                borderBottom: e.isActive ? "dashed" : " ",
                fontSize : e.isActive ? "2vmax" : " "        }
            }} to="/destination">Destination</NavLink>
            
            <NavLink className={Styles.nav1} style={(e)=> {
              return{
                borderBottom: e.isActive ? "dashed" : " ",
                fontSize : e.isActive ? "2vmax" : " "        }
            }} to="/tourinsights">Tour Insights</NavLink>


           

       
      </div>
    
  )
}

export default Nav