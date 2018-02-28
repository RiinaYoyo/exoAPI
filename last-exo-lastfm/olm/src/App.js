import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import CardAlbum from './cardAlbum';
import stateLess from './stateless'
class App extends Component {
  state={
    dataAlbum:[]
  }
  componentWillMount(){
    axios.get('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rap&limit=1&api_key=11a636c5d0f84db84510dc960ce58cd8&format=json')
    .then( response => {
    this.setState({
      dataAlbum:response.data.albums.album
    }) 
    })
    .catch(error=> {
      console.log(error);
    });
}
  render() {
    console.log(this.state.dataAlbum)
    return (
      <div className="App">
      <h1>Smart</h1>
      {
        this.state.dataAlbum.map((el,i)=>{
          return <stateLess albumName={el.name} artistTitle={el.artist.name} image={el.image[3]['#text']}  /> 

        })
      }
      <h1>Deep</h1>
      <CardAlbum/>
      </div>
    );
  }
}

export default App;
