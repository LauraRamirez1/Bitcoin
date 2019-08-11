import React from 'react';
import Axios from 'axios';
import './style/CurrentValue.css';


export default class CurrentValue extends React.Component{

  constructor(props) {
    super(props);
    this.componentPriceValue=this.componentPriceValue.bind(this);
    this.state = {
      price: 0
    }
  }

  componentPriceValue() {
    Axios.get( `https://api.coindesk.com/v1/bpi/currentprice/USD.json`)
    .then(res => {
      this.setState({ price: res.data.bpi.USD.rate_float.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".")});
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.componentPriceValue()
    setInterval(() => this.componentPriceValue(), 60000);
  }

    render() {
      return (
        <section className="currentValue">
         <p>Valor Actual</p>
         <b>$ {this.state.price} USD</b>
          </section>
        )
    }
}