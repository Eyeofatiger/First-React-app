import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SSL_OP_NO_TICKET } from 'constants';

function ShowBanner(props){
  if(props.time>45){
    return(
      <div className="rest_block">Time to have rest!</div>
    )
  } else {
    return(
      <div className="work_block">Time to work!</div>
    )
  }

}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerId = setInterval(
      ()=>this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  tick(){
    this.setState({
      date: new Date()}
    )
  }
  render(){
    return(
      <div>
        <ShowBanner time ={this.state.date.getSeconds()} />
        <h1>Current time : {this.state.date.toLocaleTimeString()} </h1>
      </div>
    )
  }
}

export default Clock;
