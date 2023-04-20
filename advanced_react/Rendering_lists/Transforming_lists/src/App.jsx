import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const data = [
  {
      id: "1",
      title: "tiramisu",
      description: "the best tamisu in town",
      Image: "https://th.bing.com/th/id/OIP.a1PcbcSxeGFbSlcyY1VCDwHaE7?pid=ImgDet&rs=1",
      price: "$5.00",
  },
  {
      id: "2",
      title: "chocolate cake",
      description: "the best chocolate cake in town",
      Image: "https://th.bing.com/th/id/OIP.a1PcbcSxeGFbSlcyY1VCDwHaE7?pid=ImgDet&rs=1",
      price: "$5.00",
  },
  {
      id: "3",
      title: "cheese cake",
      description: "the best cheese cake in town",
      Image: "https://th.bing.com/th/id/OIP.a1PcbcSxeGFbSlcyY1VCDwHaE7?pid=ImgDet&rs=1",
      price: "$5.00",
  },

];


const topDessers = data.map(dessert=> {
  return{
    content:`${dessert.title} - ${dessert.price}`,
    price: dessert.price,
  }
})
function App() {
  const listItems = topDessers.map(dessert => {
    const itemText = `${dessert.content}`
    return <li>{itemText}</li>
  })
  return (
    <div>
      <ol>
        {listItems}

      </ol>
    </div>
  )
    
}
export default App
