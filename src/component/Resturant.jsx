import React from 'react'

const Resturant = ({resturant}) => {
  return (
    <div key={resturant.id} className="card">
    <img alt='' width="254" height="160px" src={resturant.image} />
    <div className="restaurant-details">
        <div className="restaurant-title">{resturant.name}</div>
        <div className="restaurant-subtitle">
            {resturant.category.join(",")}
            </div>
    </div>
    <div className="restaurant-info">
        <div className="restaurant-ratings">
            <i className="material-icons star-icon">star</i>
            
            {resturant.rating} 
        </div>
         .<div className="restaurant-delivery-timings"> {resturant.deliveryTiming}</div> .
        <div className="restaurant-cost-for-two">₹{resturant.costforatawo}</div>
    </div>
    <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text"> {resturant.offers.join(" | ")}</span>
    </div>
</div>
  )
}

export default Resturant