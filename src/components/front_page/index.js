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
<Content/>
   </div>
   </>
  )
}

export default Front