import React, { Component } from 'react';

class CardSimilaire extends Component {
    render() {
        return (
            <div className="Card">
                <h2> {this.props.name} </h2>
                <p> <a href={this.props.url}> plus d'infos</a> </p>
                <img src={this.props.src}/>                
            </div>
        );
    }
}

export default CardSimilaire;