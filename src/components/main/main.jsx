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
    console.log(ans)
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
  const prtyfilter=(property_type, newlist)=>{
    let ans=[]
    console.log(mainList)
    newlist.map((e)=>{
      if(e.property_type===property_type)
      ans.push(e);
    })
    console.log(ans)
    return ans;
  }
  const handlefilter=()=>{
    if(filter.location!=="" && filter.price!=="" && filter.property_type!=="" ){
      let ans=locationfilter(filter.location, list);
      ans=pricefilter(filter.price, ans);
      ans=prtyfilter(filter.property_type,ans);
      setmainList(ans);
      return;
    }
    if(filter.location!==""){
      setmainList(locationfilter(filter.location, list));
      return;
    }
    if(filter.price!==""){
      setmainList(pricefilter(filter.price, list));
      return;
    }
    if(filter.property_type!==""){
      setmainList(prtyfilter(filter.property_type, list));
      return;
    }
  }
  return (
    <>
        <div className='search '>
        <div className='prty'>Search properties to rent</div>
        
        </div>
        <Filter filter={filter} setFilter={setFilter} handlefilter={handlefilter}  />
        <MediaCard list={mainList}/>
    </>
  )
}

export default Main