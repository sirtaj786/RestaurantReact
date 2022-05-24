import React from 'react'

import "../App"
const Offer = (props) => {
  return (
    <section className="offers">
    <div className="container">
        {props.offers.map((offer,index)=>( <img  key={index}alt='' className="offer" src={offer}/>))}
      
    </div>
</section>
  )
}

export default Offer