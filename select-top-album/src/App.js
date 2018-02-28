import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
    state={
      dataAlbum:[]
    }
/*   componentWillMount(){
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=niro&api_key=11a636c5d0f84db84510dc960ce58cd8&format=json`)
      .then( response => {
        this.setState({
          dataAlbum: response.data.topalbums.album
      }, console.log(this.state.dataAlbum)) 
    })
    .catch(error=> {
      console.log(error);
    });
  } */
  
    

  handleCatChange=(e)=> {
    let selected = e.target.value
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${selected}&api_key=11a636c5d0f84db84510dc960ce58cd8&format=json`)
      .then( response => {
        this.setState({
          dataAlbum: response.data.topalbums.album
      }, console.log(this.state.dataAlbum)) 
    })
    .catch(error=> {
      console.log(error);
    });
  }
  render() {
    console.log(this.state.dataAlbum)
    return (
      <div className="App">
        <select onChange={this.handleCatChange} name="" id="">
          <option value="Niro">Niro</option>
          <option value="Lacrim">Lacrim</option>
          <option value="Ninho">Ninho</option>
        </select>
        <ol>
        {
         this.state.dataAlbum.map((el , key)=>{
          return this.state.dataAlbum.length === 0 ?
          <h1>En chargement</h1>:
           <li><strong style={{color:'red'}} > <a href={el.url}> {el.name} </a> </strong> avec {el.playcount} écoutes</li>
           })
        }
        </ol>
      </div>
    );
  }
}

export default App;
