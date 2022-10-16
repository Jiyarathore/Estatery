import React from 'react';
import Filter from '../filter';
import MediaCard from '../cards';
import { useState } from 'react';
import "./main.css";
import { list } from '../data/data';

function Main() {
const filtered_data={
  "location":["all","A","B","C"],
  "price":["all","<$1000", "between $1000 to $2000", "between $2000 to $3000",">$3000"],
  "property_type":["all","house","rent","office"]
}
const [filter,setFilter]= useState({
  "location":0,
  "price":0,
  "property_type":0,
})

  return (
    <>
        <div className='search flex'>
        <div className='prty'>Search properties to rent</div>
        <div className='search_bar'>
            <input type='text' placeholder='Search with Search Bar'/><i class="fa-regular fa-circle-chevron-down"></i>
        </div>
        </div>
        <Filter setFilter={setFilter}/>
        <MediaCard list={list}/>
    </>
  )
}

export default Main