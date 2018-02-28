import React, { Component } from 'react';
import axios from'axios';
import CardSimilaire from './cardSimilaire'

class App extends Component {

  state={
    dataArtiste:[],
    bioArtiste:[],
    imageArtiste:"",
    statArtiste:[],
    similarArtist:[],
    tagsArtist:[],
  }

  componentDidMount(){
    axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Lacrim&api_key=11a636c5d0f84db84510dc960ce58cd8&format=json')
    .then( response => {
/*      console.log(response); 
 */        this.setState({
        dataArtiste:response.data.artist,
        bioArtiste:response.data.artist.bio,
        imageArtiste:response.data.artist.image[3]["#text"],
        statArtiste:response.data.artist.stats,
        similarArtist:response.data.artist.similar.artist,
        tagsArtist:response.data.artist.tags.tag
    }) 
    })
    .catch(error=> {
      console.log(error);
    });
    }
  

  render() {
    const {dataArtiste,
          bioArtiste,
          imageArtiste,
          statArtiste,
          similarArtist,
          tagsArtist}= this.state;
/*     console.log(dataArtiste.image[])
 */
    
    return (
      <div className="App">
        <h1 style={{textAlign:'center'}} >{dataArtiste.name}   </h1>
        <div style={{display:'flex' , justifyContent:'space-around'}}>
          <a href={imageArtiste}> <img src={imageArtiste} /> </a>
          <div className="tags" style={{display:'flex' , flexDirection:'column', justifyContent:'space-around'}}>
          {
            tagsArtist.map((el,id)=>{
              return <a href={el.url}> <button> {el.name} </button></a>
            })
          }
          </div>
        </div>
        <p>Biographie :</p> {bioArtiste.summary} <br/> <a href={dataArtiste.url}>En voir plus </a> <br/> <br/>
        <ul> <strong> Stats:</strong>
          <li>listeners : {statArtiste.listeners} </li>
          <li>playcount : {statArtiste.playcount} </li>
        </ul>
        <div>
          <h2  style={{textAlign:'center'}}>Artistes Similaires:</h2>
          <div style={{display:'flex' , justifyContent:'space-between', flexWrap:'wrap'}}>
          {
            similarArtist.map((el,id)=>{
              return <CardSimilaire name={el.name} url={el.url} src={el.image[2]["#text"]}/>
            })
          }
          </div>
         
        </div>
      </div>
    );
  }
}

export default App;
