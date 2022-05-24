import React from 'react'
import Resturant from './Resturant'

// import img10 from "../assets/restauran10.jpeg"


const Resturants = (props) => {
  return (
    <div className="container divider">
    <div className="cards">
        {props.resturants.map((resturant) =>(
             
       <Resturant key={resturant.id} resturant={resturant}/>
        ))}
       
        </div>
        </div>
   
  )
}

export default Resturants