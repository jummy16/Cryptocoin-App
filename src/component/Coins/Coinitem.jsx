import React from 'react'
import "./coins.css"


const Coinitem = ({coin}) => {
    return (
      <div>
      <div className='table-header'>
       
        <ul key={coin.id} className='coin-container'>
              <li> {coin.market_cap_rank}</li>
              <li className='coin-img'>{coin.id}<img src={coin.image} alt={coin.id_logo}/></li>
              <li>price:{coin.current_price}</li>
              <li>24h:{coin.price_change_percentage_24h}</li>
              <li>volume:{coin.total_volume}</li>
              <li>mkt cap:{coin.market_cap}</li>
             </ul>
         </div>
         </div>
   )
  
};

export default Coinitem