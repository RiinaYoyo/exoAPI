import React, { Component } from 'react';

class CardAlbum extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.albumName} de {this.props.artistTitle} </h2>
                <img src={this.props.image} alt=""/>
            </div>
        );
    }
}

export default CardAlbum;