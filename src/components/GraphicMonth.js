import React from 'react';
import Axios from 'axios';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import './style/GraphicMonth.css';

export default class GraphicMonth extends React.Component{

    state= {
      graphicdates: null
    };

    componentDidMount(){
        Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
        .then(res =>{
            console.log(typeof res.data.bpi)
            this.setState({ graphicdates : res.data.bpi})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        return (
            <section className="graphic">
                <p>Último mes</p>
                <LineChart data={this.state.graphicdates} />
            </section>
        )
    }
}