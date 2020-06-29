import React, { Component } from 'react';
import Search from "./img/search.svg"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.inputElement=React.createRef();
  }
  componentDidMount(){
    this.inputElement.current.focus()
  }
  render(){
  return (
    <div className="App">
    <h1>Google</h1>
    <input type="text" placeholder="Tìm kiếm trên Google hoặc nhập một URL" ref={this.inputElement}/>
    <img src={Search} width="28" height="28"/>
    </div>
  );
}
}

export default App
