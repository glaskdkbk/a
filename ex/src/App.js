import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const getUserInfo = async(userName) => {
  const API_KEY = 'RGAPI-4e27dd08-b0b8-44d6-95fc-8b856a74a462'
  const url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${API_KEY}`
  try {
    const {data } =await axios({
      url,
      method: 'GET',
      mode: 'no-cors',
      headers: {
        
        
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        
      },
     
    });
    console.log(data);
    return data;
  }catch(err){
    console.log(err.message)
  }
  
  
}

const userInfo = getUserInfo('hide on bush')
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
