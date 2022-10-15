import React from 'react';
import Filter from '../filter';
import MediaCard from '../cards';
import "./main.css";

function Main() {
  return (
    <>
        <div className='search flex'>
        <div className='prty'>Search properties to rent</div>
        <div className='search_bar'>
            <input type='text' placeholder='Search with Search Bar'/>
        </div>
        </div>
        <Filter/>
        <MediaCard/>
    </>
  )
}

export default Main