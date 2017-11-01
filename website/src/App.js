import React, { Component } from 'react';
import logo from './neil.jpeg';
import './App.css';
import {makeRequestMeme, makeRequestName} from './allRequests.js';
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			phase: "phase2",
			username: null,
			password: null,
			memeName: null,
			memeDescript: null,
			phaseBool: true,
			returnedData: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clickHandler = this.clickHandler.bind(this)
	}
	handleSubmit(event){
		event.preventDefault();
		if(this.state.phase === "phase1"){

		}
		else if(this.state.phase === "phase2"){
			makeRequestMeme(this.state.memeName, this.state.memeDescript)
		}
		else if(this.state.phase === "phase3"){
			this.setState({returnedData: makeRequestName(this.state.memeName)})
		}
	}
	clickHandler(){
		if(this.state.phaseBool === true){
			this.setState({phase: "phase3"})
			this.setState({phaseBool: !this.state.phaseBool})
		}
		else{
			this.setState({phase: "phase2"})
			this.setState({phaseBool: !this.state.phaseBool})
		}
	}
  render() {
	  var phase = null;
	  var returnVal = null;
	  if(this.state.phase === "phase1"){
		  phase = <div className="App-forms">
  		<form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange = {e => this.setState({username: e.target.value})} />
          </label>
  		<br />
  		<br />
  		<label>
            Password:
            <input type="password" value={this.state.password} onChange = {e => this.setState({password: e.target.value})} />
          </label>
  		<br />
  		<br />
          <input type="submit" value="Submit" />
        </form>
  	  </div>
	  }
	  else if(this.state.phase === "phase2"){
		  phase = <div className="App-forms">
  		<form onSubmit={this.handleSubmit}>
          <label>
            Meme Name:
            <input type="text" value={this.state.memeName} onChange = {e => this.setState({memeName: e.target.value})} />
          </label>
  		<br />
  		<br />
  		<label>
            Meme Description:
            <input type="text" value={this.state.memeDescript} onChange = {e => this.setState({memeDescript: e.target.value})} />
          </label>
  		<br />
  		<br />
          <input type="submit" value="Submit" />
        </form>
  	  </div>
	  }
	  else if(this.state.phase === "phase3"){
		 phase = <div className="App-forms">
	   <form onSubmit={this.handleSubmit}>
		  <label>
			Meme Name:
			<input type="text" value={this.state.memeName} onChange = {e => this.setState({memeName: e.target.value})} />
		  </label>
	   <br />
	   <br />
		  <input type="submit" value="Submit" />
		</form>
		{this.state.returnedData}
	 </div>
	 }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Neil's Patils</h1>
        </header>
		<button type="button" onClick = {this.clickHandler}> Switch Phases</button>
		{phase}
      </div>
    );
  }
}

export default App;
