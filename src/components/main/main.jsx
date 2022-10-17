import React, { useState } from 'react';
import Filter from '../filter';
import MediaCard from '../cards';
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
      if(e.location.toLowerCase()===location.toLowerCase())
        ans.push(e);
    })
    return ans;
  }

  const pricefilter=(price)=>{
    let ans=[]
    let a=price.split('-');
    console.log(a);
    list.map((e)=>{
      let b=e.price.substring(1);
      console.log(b,a[0],a[1],b<a[1]);
      if(b>a[0] && b<=a[1]){
        ans.push(e);
      }
    })
    return ans
  }

  const handlefilter=()=>{
    if(filter.location!=="" && filter.price!==""){
      setmainList(list);
      return;
    }
    if(filter.location!=="")
      setmainList(locationfilter(filter.location));
    if(filter.price!=="")
      setmainList(pricefilter(filter.price));
  }
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