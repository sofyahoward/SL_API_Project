import React, { Component } from 'react';
import axios from 'axios';
import keys from '../../config/keys';
import PersonCard from '../PersonCard/PersonCard'
import FrequencyCount from '../FrequencyCount/FrequencyCount';
import DuplicatePpl from '../DuplicatePpl/DuplicatePpl';

class AllPeople extends Component {
    constructor(){
        super();
        this.state = {
            persons: [],
            showCount: false,
            showDuplicateEntries: false
          }
    }
    
    componentDidMount() {
        this.getData();
    }

    async getData(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        let webApiUrl = 'https://api.salesloft.com/v2/people.json';
       
        axios
        .get(proxyurl+ webApiUrl, { headers: {"Authorization" : `Bearer ${keys.salesLoftAPI}`} })
        .then (results => {
            const persons = results.data;
            this.setState({persons})
            console.log(this.state.persons)
        })
    }
    
    handleClick = () => {
        this.setState({ showCount: !this.state.showCount})
    }

    handleDuplicateEntries = () => {
        this.setState({ showDuplicateEntries: !this.state.showDuplicateEntries})
    }
        
    render() {
        return (
            <div>
                <div style={{marginLeft: '15%'}}>
                    <PersonCard people={this.state.persons.data} />
                </div>
                <div>
                    <FrequencyCount 
                        people={this.state.persons.data}
                        handleClick={this.handleClick}
                        showCount={this.state.showCount}
                    />
                    <DuplicatePpl 
                        people={this.state.persons.data}
                        handleDuplicates={this.handleDuplicateEntries}
                        showDuplicates={this.state.showDuplicateEntries}
                    />
                </div>
            </div>  
        )
    }
}

export default AllPeople;