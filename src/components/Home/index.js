import React, { Component } from 'react';
import axios  from 'axios'


import SliderWidget from '../Utils/Slider'
import Subscriptions from '../Utils/Subscribe'
import Blocks from './block'
import Poll from './poll'
import { URL_HOME } from '../Utils/paths'

class Home extends Component {


    state = {
        home: ''
    }
    
    componentDidMount(){    
        axios.get(URL_HOME)
        .then(response =>{
            console.log(response.data);
            this.setState({home:response.data})
        })
    }

    render(){
        return(
            <>
                <SliderWidget slides={this.state.home.slider} />
                <Subscriptions/>
                <Blocks blocks={this.state.home.blocks}/>
                <Poll/>
            </>
        )
}

}
export default Home 