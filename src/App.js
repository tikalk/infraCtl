import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgType: 'm2.Large',
      osType: 'Ubuntu',
    };
  }

  onImgTypeChange(e) {
    this.setState({ imgType: e.target.value });
  }
  onOsChange(e) {
    this.setState({ osType: e.target.value });
  }

  onSend() {
    fetch('http://localhost:8989/create-image',{
      method: 'POST',
      body: this.state,
    }).then(res => {
      res.json().then(value => {
        alert(value.message);        
      })
    })
  }

  render() {
    return (
      <div className="App container">
        <h1>For Haggai</h1>
        <span>
           <select name='img-type' value={this.state.imgType} onChange={this.onImgTypeChange.bind(this)}>
             <option>m2.Large</option>
             <option>m1.Large</option>
             <option>t3.Large</option>
           </select>
        </span>
        <span>
           <select name='os-type' value={this.state.osType} onChange={this.onOsChange.bind(this)}>
             <option>Ubuntu</option>
             <option>RedHat</option>
           </select>
        </span>
        <span>
          <a className="btn" onClick={this.onSend.bind(this)}>Select</a>
        </span>
      </div>
    );
  }
}

export default App;
