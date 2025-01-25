import React, { useEffect, useState } from 'react'

const List = ({getItem}) => {
    const [items, setItems] = useState([])

    useEffect(() =>{
      setItems(getItem())
      console.log("getting items");
    },[getItem])




  return (
    <div>
        {items.map((item, index) => {
          return  <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default List