import React, { useState } from 'react'

const Myapp = () => {
  const [name]=useState("nani")
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  )
}

export default Myapp
