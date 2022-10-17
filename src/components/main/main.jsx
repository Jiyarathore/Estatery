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
  const locationfilter=(location, newlist)=>{
    let ans=[]
    // console.log(mainList)
    newlist.map((e)=>{
      if(e.location.toLowerCase()===location.toLowerCase())
      ans.push(e);
    })
    // console.log(ans)
    return ans;
  }

  const pricefilter=(price, newlist)=>{
    let ans=[]
    let a=price.split('-');
    // console.log(a);
    newlist.map((e)=>{
      let b=e.price.substring(1);
      // console.log(b,a[0],a[1],b<a[1]);
      if(b>a[0] && b<=a[1]){
        ans.push(e);
      }
    })
    return ans
  }

  const handlefilter=()=>{
    if(filter.location!=="" && filter.price!==""){
      let ans=locationfilter(filter.location, list);
      ans=pricefilter(filter.price, ans);
      setmainList(ans);
      return;
    }
    if(filter.location!==""){
      setmainList(locationfilter(filter.location, list));
      return;
    }
    if(filter.price!==""){
      setmainList(pricefilter(filter.price, list));
    }
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