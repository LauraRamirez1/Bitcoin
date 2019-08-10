import React from 'react';
import axios from 'axios';
import './style/CurrentValue.css';
export default class CurrentValue extends React.Component{
  
    componentPriceValue() {
        axios.get(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`)
         .then(res => {
             console.log(res.bpi.USD.rate);
          })
    }
    render() {
      return (
        <section className="currentValue">
         <p>Valor Actual</p>
         <b>$ 10.000 USD</b>
          </section>
        )
    }
}
 