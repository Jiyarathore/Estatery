import { Typography } from '@mui/material'
import React from 'react'
import Content from '../content'
import Header from '../navbar/header'
import './style.css'

function Front() {
  return (
   <>
<Header/>
   <div className='front'>
    {/* <img src='https://sprec.com/wp-content/uploads/2016/07/home-mast.jpg'/>
<Typography>
MODERN SERVICED APARTMENTS: A PLACE TO CALL YOUR OWN — FOR HOWEVER LONG YOU STAY
</Typography> */}
<Content/>
   </div>
   </>
  )
}

export default Front