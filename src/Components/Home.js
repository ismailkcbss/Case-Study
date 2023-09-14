import React from 'react'
import Navbar from './Navbar'
import {getValueByKey} from '../storage.helper'


export default function Home() {

  const token = getValueByKey("token");

  return (
    <div>
      <Navbar/>
      {
        token ? (
          <div>
            hoşgeldin 
          </div>
        ):(
          <div>Home Dashboard</div>
        )
      }

    </div>
  )
}
