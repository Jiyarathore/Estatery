import React from 'react';
import Filter from '../filter';
import MediaCard from '../cards';
import { useState } from 'react';
import "./main.css";
import { list } from '../data/data';

function Main() {
  const [mainList, setmainList] = useState(list);
  const [filter,setFilter]= useState({
    "location": "",
    "when": "",
    "price": "",
    "property_type": "",
  })
  const locationfilter=(location)=>{
    let ans=[]
    list.map((e)=>{
      if(e.location.toLowerCase()===location.toLowerCase()){
        ans.push(e);
      }
      console.log(e.location)
    })

    return ans;
  }

  const pricefilter=(price)=>{
    let ans1=[]
    list.map((e)=>{

      // console.log(e)
      if(e.price===price){
        ans1.push(e)
      }

      console.log(price)
    })
    return ans1
  }

  const handlefilter=()=>{
    if(filter.location!=="")
      setmainList(locationfilter(filter.location));
    // else
    //   setmainList(list);

      if(filter.price!=="")
      setmainList(pricefilter(filter.price));
    else
      setmainList(list);
  }
// console.log("dbuo")
  // const pricefilter=(price)=>{
  //   let ans1=[]
  //   list.map((e)=>{

  //     // console.log(e)
  //     if(e.price===price){
  //       ans1.push(e)
  //     }

  //     console.log(price)
  //   })
  //   return ans1
  // }
  // const handlepricefilter=()=>{
  //   if(filter.price!=="")
  //     setmainList(pricefilter(filter.price));
  //   else
  //     setmainList(list);
  // }
  return (
    <>
        <div className='search flex'>
        <div className='prty'>Search properties to rent</div>
        <div className='search_bar'>
            <input type='text' placeholder='Search with Search Bar'/><i className="fa-regular fa-circle-chevron-down"></i>
        </div>
        </div>
        <Filter filter={filter} setFilter={setFilter} handlefilter={handlefilter}  />
        <MediaCard list={mainList}/>
    </>
  )
}

export default Main