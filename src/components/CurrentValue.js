import React from 'react';
import axios from 'axios';
import './style/CurrentValue.css';
export default class CurrentValue extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      price: '',
    }
  }
  componentPriceValue() {
    axios.get( `https://api.coindesk.com/v1/bpi/currentprice/USD.json`)
    .then(res => {
      this.setState({ price: res.bpi.USD.rate });
    })
    .catch(error => {
      console.log(error);
    });
  }

    render() {
      const { price } = this.state;
      return (
        <section className="currentValue">
         <p>Valor Actual</p>
         <b>$ {price} USD</b>
          </section>
        )
    }
}
 