import React from 'react';
import axios from 'axios';
import { LineChart} from 'react-chartkick';
import 'chart.js';
import './style/GraphicMonth.css';

export default class GraphicMonth extends React.Component {
  
  componentgraphicMonth() {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
   .then(res => {
       console.log(res.bpi);
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    return (
    <section className="graphic">
    <LineChart data={{"2017-05-13": 2, "2017-05-14": 5}} />
    </section>
  )}
}