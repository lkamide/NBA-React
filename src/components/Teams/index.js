import React, { Component } from 'react';
import axios from 'axios'


import { URL_TEAMS }   from '../Utils/paths' 

import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Team extends Component {


    state = {
        teams:[],
        filtered:[],
        keyword:''
    }


    componentDidMount(){
        axios.get(URL_TEAMS)
        .then(response =>{
            this.setState({
                teams: response.data,
                filtered: response.data
            })
        })
    }


    renderList = (filtered) => (
        filtered.map( (item, index)=>(
            <CSSTransition 
                key={index}
                timeout={500}
                classNames="fade"
            >
                <Link
                    to={`/teams/${item.name}`}
                    className="team_item"
                >
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>

            </CSSTransition>
        )
    )
    )

    searchTerm = (event) => {
        const keyword = event.target.value;
        
        if(keyword !== ''){
            const list = this.state.teams.filter( item => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            });

            this.setState({
                filtered: list,
                keyword
            })

        }else{
            this.setState({
                filtered: this.state.teams,
                keyword
            })
        }
        
       
    }


    render(){
        return(
            <div className="teams_component">
                <div className="teams_input">
                     <input
                        type="text"
                        value={this.state.keyword}
                        onChange={e => this.searchTerm(e) }
                        placeholder="Search for a team"
                     />
                </div>
                <div className="teams_container">
                    <TransitionGroup component="span">
                        {this.renderList(this.state.filtered)}
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}

export default Team;