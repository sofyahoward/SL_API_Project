import React, { Component } from "react";
import axios from "axios";
import keys from "../../config/keys";
import PersonCard from "../PersonCard/PersonCard";
import FrequencyCount from "../FrequencyCount/FrequencyCount";
import DuplicatePpl from "../DuplicatePpl/DuplicatePpl";

// initialize state inside a stateful parent component
//persons state for the data of all people we get from the API
//showCount and showDuplicateEntries are set to false initially to toggle visibility of components upon button click 
class AllPeople extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      showCount: false,
      showDuplicateEntries: false
    };
  }
  
  componentDidMount() {
      //using proxyurl in development becuase of the CORS and the authorization header required for the API
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      let webApiUrl = "https://api.salesloft.com/v2/people.json";
      //get request for the information for all people, return a promise 
      // then set the state to the data we have received
      axios
        .get(proxyurl + webApiUrl, {
          headers: { Authorization: `Bearer ${keys.salesLoftAPI}` }
        })
        .then(results => {
          const persons = results.data;
          this.setState({ persons });
        });
    
  }

  
  //click handler for showing count of letters in an email
  handleClick = () => {
    this.setState({ showCount: !this.state.showCount });
  };
  //click handler for showing duplicate entries
  handleDuplicateEntries = () => {
    this.setState({ showDuplicateEntries: !this.state.showDuplicateEntries });
  };
  // returning three components: personCard, frequencyCount and duplicatePeople
  render() {
    return (
      <div>
        <div>
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
    );
  }
}

export default AllPeople;
