import React, { Component } from 'react';
import axios from 'axios';
import keys from '../../config/keys';
import PersonCard from '../PersonCard/PersonCard'

class AllPeople extends Component {
    constructor(){
        super();
        this.state = {
            persons: [],
            isLoading: true 
          }
    }
    
    componentDidMount() {
        this.getData();
        this.setState({isLoading: false})
    }

    async getData(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        let webApiUrl = 'https://api.salesloft.com/v2/people.json';
       
        axios
        .get(proxyurl+ webApiUrl, { headers: {"Authorization" : `Bearer ${keys.salesLoftAPI}`} })
        .then (results => {
            const persons = results.data;
            this.setState({persons})
            console.log(this.state)
        })

    }
        
    render() {
      
        const people = this.state.persons.data
            return (
                people ? 
                    <div> 
                        <ul> { 
                            people.map(person => 
                            <div className="row">
                            <div className="col s12 m3">
                                <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{person.first_name} {person.last_name}</span>
                                    <p>{person.email_address}</p>
                                    <p>{person.title}</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                    <a href="#">This is a link</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                            )}  
                        </ul> 
                    </div> : null
            ); 
    }
}

export default AllPeople;