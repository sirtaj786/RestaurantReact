// // const Filters = ({filters,currentfilteredBy,updateFilter}) => {
//   return (
//     <div classNameName=" container restaurants">
//         <h1>50 restuarants</h1>
//     <div classNameName="restuarant-options">
//     <div classNameName="restuarant-options"> </div>
//         {Object.entries(filters).map(([key,value]) =>{
          
//             <div 
//             key={key}
//             classNameName="restuarant-options"
//             onClick={()=> updateFilter(key)}
//             >
//                 {value}
//                 </div>
//         })}
import React from 'react'

const Filters = ({filters,currentFilteredBy,updateFilter}) => {
  return (
    
      <div className="container restaurants">
    <h1>50 restaurants</h1>

    <div className="restaurant-options">
      
      {Object.entries(filters).map(([key,value])=>(
        <div key={key} className="restaurant-option" onClick={()=>updateFilter(key)}>
          {value}
          </div>

      ))}
       
        </div>
        </div>
    
  );
};

export default Filters