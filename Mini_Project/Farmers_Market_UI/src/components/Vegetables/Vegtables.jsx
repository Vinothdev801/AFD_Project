import './Vegtables.css';
import Card from '../Card/Card';
import { useFarmerMarket } from '../../context/FarmerMarketContext';

const Vegetables = ({limit}) => {
  const {veges} = useFarmerMarket();
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