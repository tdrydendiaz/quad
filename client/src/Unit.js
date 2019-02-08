
import React, { Component } from 'react';
import axios from 'axios';

class Unit extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: 'Initial data - set in the parent class'
      }
    }
  
    makeRequest = (e) => {
        axios.get("/server/getAllAccounts").then(response => {

            console.log(response.data);
            this.setState({
                data: response.data
            });

        });
    }
   
  
    render() {
      return (
        <div>
            <button onClick={this.makeRequest} >Click me</button>
          <h2>{this.state.data}</h2>
        </div>
      );
    }
  }
  
export default Unit;