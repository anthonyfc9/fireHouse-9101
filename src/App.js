import React from 'react';
import './App.css';
import data from './data/firehouse.json'
import House from './Components/House'
import HouseList from './Components/HouseList'
class App extends React.Component {
constructor(){
  super();
  this.state={
    fireData:data,
    currentHouse:null
  }
}

selectFireHouse(obj){
  this.setState({currentHouse:obj})
}



  render(){
  return (
    <div className="App">
<h1>fires!_!</h1>

<House current={this.state.currentHouse}/>
<HouseList houses={this.state.fireData}
  selectFireHouse={this.selectFireHouse.bind(this)}
/>
    </div>
  );
}}

export default App;
