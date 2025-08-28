import React from 'react'
import Card from '../Card/Card'
import './Flowers.css'
import { useFarmerMarket } from '../../context/FarmerMarketContext';


const Flowers = ({limit}) => {
  const {flowers} = useFarmerMarket();
  const displayFlowers = limit ? flowers.slice(0, limit) : flowers;
  return (
    <div id='flowers'>
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