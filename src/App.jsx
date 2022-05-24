
import './App.css';
import Navbar from './component/Navbar';
import Offer from './component/Offer';
import Resturants from './component/Resturants';
import userInfo from '../src/data/userInfo.json'
import Filters from './component/Filters';
import offers from '../src/data/offers.json';
import resturants from '../src/data/resturants.json'
import { useState } from 'react';

const filters={ 

   1: "Cost High to Lost",



   2: "Cost Lost to High",


   3:"Ratings",


   4:"Delivery Time",


   5:"Relevance"

}
function App() {
  const [filterBy,setFilterBy]=useState("")
  const [data,setData]=useState(resturants)
  const updateFilter=(newFilter)=>{
    //TODO
    // if(newFilter===filterBy){
    //   setFilterBy("")
    //   setData(resturants)
    // }
    //console.log(newFilter)
   
    switch(newFilter){
      case "1":{
        setFilterBy(1)
        data.sort((a,b)=>b.costforatawo-a.costforatawo)
       
        setData([...data])
        break;
      }
      case "2":{
        setFilterBy(2)
        data.sort((a,b)=>a.costforatawo-b.costforatawo)
        console.log(data.map((d)=>d.costforatawo))
        setData([...data])
        break;
      }
      default:{
        setData(resturants)
        break;
      }

    }
    
  }
  return (
    <div >
      <Navbar {...userInfo.location}/>
      <Offer  offers={offers}/>
      <section className="near-you">
      <Filters  filters={filters} currentFilteredBy={filterBy} updateFilter={updateFilter}/>
      <Resturants resturants={resturants}/>
      </section>
    </div>
  );
}

export default App;
