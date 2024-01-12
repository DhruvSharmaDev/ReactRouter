import React from 'react'
import { useEffect ,useState } from 'react'
const Github = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://api.github.com/users/DhruvSharmaDev")
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      setData(data);
    })

  },[])
  return (
    <div className='bg-gray-700 text-center text-3xl'>Github Repos:{data.public_repos}</div>
  )
}

export default Github