import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import { axiosInstance } from '../axios.util';
export default function Home() {

  const token = window.localStorage.getItem("token");
  const [data, setData] = useState([])

  const getCase = async() => {
    const {data} = await axiosInstance.get(`/api/auth/cases`)
    setData(data)
  }
console.log(data);
  useEffect(()=>{
    getCase();
  },[])

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
