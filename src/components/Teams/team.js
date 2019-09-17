import React, { Component } from 'react';
import axios from 'axios'
import { URL_TEAMS } from '../Utils/paths'

class Team extends Component {


    state={
        data:[]
    }

    componentDidMount(){
        axios.get(`${URL_TEAMS}?name=${this.props.match.params.id}`)
        .then(response =>{
            this.setState({
                data: response.data[0]
            })
        })
    }

    renderSquad = (squad) =>(
        squad ?
            squad.map( item =>(
                <div key={item.name} className="item player_wrapper" >
                    <img  alt={item.name} src={`/images/avatar.png`} />
                    <h4>{item.name }</h4>
                </div>
            ))
        :null
    )



    renderData = (data) =>( 
        data ? 
            <div className="team_data_wrapper">
                <div className="left">
                    <img  alt={data.name}  src={`/images/teams/${data.logo}`} />
                </div>
                <div className="right">
                     <h1>{data.name}</h1>
                     <p>{data.description}</p>
                     <hr/>
                     <div className="squad">
                            {this.renderSquad(data.squad)}
                     </div>
                </div>
            </div>
        :null
    )

    render(){
        return(
            <div className="team_data">
                {this.renderData(this.state.data)}
            </div>
        )
    }
}

export default Team