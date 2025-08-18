import './Vegtables.css';
import Card from '../Card/Card';
import {vegImages} from '../../assets/img/Veges/VegImage'

const veges = [{
    imagePath: vegImages.tomato,
    title: "Tomato",
    count: "1kg",
    price: 50,
  },
  {
    imagePath: vegImages.bottleGuard,
    title: "Bottle Guard",
    count: "3 Pcs",
    price: 50,
  },
  {
    imagePath: vegImages.capsicum,
    title: "Capsicum",
    count: "500 g",
    price: 40,
  },
  {
    imagePath: vegImages.coriander,
    title: "Coriander Leaves",
    count: "1 pch",
    price: 10,
  },
  {
    imagePath: vegImages.curryLeaves,
    title: "Curry leaves",
    count: "1 pch",
    price: 5,
  },
  {
    imagePath: vegImages.ladiesFinger,
    title: "Ladies Finger",
    count: "1 kg",
    price: 80,
  },
  {
    imagePath: vegImages.onion,
    title: "Onion",
    count: "1 kg",
    price: 60,
  },
  {
    imagePath: vegImages.smallOnion,
    title: "Small Onion",
    count: "1 kg",
    price: 100,
  },
  {
    imagePath: vegImages.potato,
    title: "Potato",
    count: "500 g",
    price: 30,
  },

]

const Vegetables = ({limit}) => {
  const displayVeges = limit ? veges.slice(0, limit) : veges;
  return (
    <div id="vegtables">
        <h2>Vegtables</h2>
        <div className='flex-wrap'>
          { displayVeges && displayVeges.map((item, index) =>(
              <Card key={item.title + index} cardId={item.title + index} imagePath={item.imagePath} title={item.title} count={item.count} price={item.price}/>
              
            ))
          }
        </div>
    </div>
  )
}

export default Vegetables