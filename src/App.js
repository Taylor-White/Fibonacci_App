import React, { Component } from 'react';
import './App.css';

var MIN_VALUE = 0;
var MAX_VALUE = 1400; //Numbers above 1476 output infinity

/* 
 * Class for the app.  If the app was larger I would break it down into pieces.  
 * For instance, there could be a class to control input, and a child class for displaying output.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: '', //Number of elements to display
                sequence: [], //Fibonacci sequence
                err_message: '' //Error Messages
            };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({count: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.calculate(this.state.Count);
  }

  //Displays elements used in fibonacci app
  render() {
    return (
      <div>
      <h2>The Fibonacci sequence!</h2>

      <form onSubmit={this.handleSubmit}>
        <label>Numbers to calculate: 
          <input value={this.state.count} onChange={this.handleChange} />
        </label>
      <input type="submit" value="Calculate!" />  
      <br />
      <p> sequence:</p>
      <p>{this.state.err_message}</p>
        <ul>{this.state.sequence.map(function(name, index){
          return <li key={index}>{index} : {name}</li>
        })}</ul>
      </form>
      </div>
    ); 
  }

  /*
   * Calculate the Fibonacci Sequence
   *
   * This function is not as efficient as it could be, because it recalculates the sequence every time 
   * the 'calculate' button is pressed instead of storing already calculated values.
   * 
   * This function displays an error message if input is not an integer, less than 0, or too large
   */
  calculate(n){

    var curr = 1;
    var sequence = [0,1];
    var err = false;
    
    if(!(typeof this.state.count==='number' || (this.state.count%1)===0)){//Check if input is an Integer
      this.setState({err_message : "Invalid Input: Value must be an integer"});
      sequence = [];
      err = true;
    }else if(this.state.count < MIN_VALUE){ //Check if input is non negative
      this.setState({err_message : "Value must be greater or equal to 0"});
      sequence = [];
      err = true;
    }else if(this.state.count > MAX_VALUE){ //Check if input is too large
      this.setState({err_message : "Input is too large"});
      sequence = [];
      err = true;
    }
    
    if(!err){ //Calculate sequence
      while(curr < this.state.count){
        sequence[curr+1] = sequence[curr] + sequence[curr-1]
        curr++;
      }
      sequence.splice(-1,1);
    }
    
    this.setState({sequence : sequence});
  }
}


export default App;
