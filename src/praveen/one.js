import React, { useState } from 'react'

const One = () => {
    const [name,setName]=useState("na")
  return (
    <div>
        <h1>Praveen branch is here {name}</h1>
        <h1 onClick={()=>setName("Goutham")}>ClickerHere</h1>
    </div>
  )
}

export default One
