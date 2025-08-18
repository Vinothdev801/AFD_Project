import React from 'react'
import Card from '../Card/Card'
import logo from '../../assets/img/logo.png'
const flowers = [
    {
        title: "flower 1 ",
        price: 100,
        imagePath: logo
    },
    {
        title: "flower 1 ",
        price: 100,
        imagePath: logo
    },
    {
        title: "flower 1 ",
        price: 100,
        imagePath: logo
    },
    {
        title: "flower 1 ",
        price: 100,
        imagePath: logo
    },
    {
        title: "flower 1 ",
        price: 100,
        imagePath: logo
    },
]
const Flowers = ({limit}) => {
  const displayFlowers = limit ? flowers.slice(0, limit) : flowers;
  return (
    <div id='flowers'style={{padding: "20px 60px"}}>
        <h2>Flowers</h2>
        <div className='flex flex-wrap'>
          { displayFlowers && displayFlowers.map((item, index) =>(
              <Card key={item.title + index} cardId={item.title + index} imagePath={item.imagePath} title={item.title} price={item.price}/>
            ))
          }
        </div>
    </div>
  )
}

export default Flowers