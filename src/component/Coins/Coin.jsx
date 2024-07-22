import React,{useEffect,useState} from 'react'
import "./coins.css"
import axios from "axios"
import Coinitem from './Coinitem'



const Coin = () => {
  const [coins, setCoins] = useState([])
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false%27"

    useEffect(()=>{axios.get(url).then((res)=>
      {
        console.log(res.data);
        setCoins(res.data)
        // console.log(coin);
      })
      .catch((err)=>{
        // console.log(err);
      });
    }, []);
  return (
    <div className='coin-header'>
        <h2>Authorized Coins with current rate</h2>
        <div className='table-header'>
            <ul>
                <li> #</li>
                <li>coin</li>
                <li>price</li>
                <li>24h</li>
                <li>volume</li>
                <li>mkt cap</li>
            </ul>
        </div>

        {coins.map((data, index)=>{
          return <Coinitem coin={data} key={data.id}/>

})}
        
    </div>
  )
}

export default Coin