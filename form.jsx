import React from 'react';
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      email:'',
      city:'',
      state:'',
      country:'',
    };
  }
  
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let emai = event.target.email;
    let city = event.target.city;
    let state = event.target.state;
    let countr = event.target.country;
      }
  render() {
    return (      
      <form style={{backgroundColor: "lightblue"}}>
      <h1>Hello {this.state.name} {this.state.age} {this.state.email} {this.state.city} {this.state.state} {this.state.country}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
       <p>Enter your email:</p>
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />
       <p>Enter your city:</p>
       <select
        value={this.state.city}>
        <option value="Delhi">Delhi</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Noida">Noida</option>
      </select>
       <p>Enter your state:</p>
       <select value={this.state.state}>
        <option value="UP">UP</option>
        <option value="Haryana">Haryana</option>
        <option value="Punjab">Punjab</option>
      </select>
       <p>Enter your country:</p>
       <select value={this.state.country}>
        <option value="INDIA">INDIA</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
      </form>
     
    );
  }
}
export default Forms;
