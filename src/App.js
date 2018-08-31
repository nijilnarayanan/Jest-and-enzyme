import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.onInputChange = this.onInputChange.bind(this)
  }
  
  onInputChange(e){
    const input = e.target.value;
    const regex = (/^\d{16}$/).test(input);

    console.log(regex);
    if(!regex){
      e.preventDefault();
   }
  }
  render() {
    return (
      <div className="cardnumber">
      <label>Enter Card Number : </label>
        <input type='text' className='cardnumber' onChange={this.onInputChange} maxLength="16"/>
       </div> 
    );
  }
}

export default App;
