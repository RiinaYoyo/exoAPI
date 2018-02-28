import React, { Component } from 'react';

const stateLess = ({albumName,artistTitle,image}) =>{
            <div>
                <h2> {albumName} de {artistTitle} </h2>
                <img src={image} alt=""/>
            </div>
}
export default stateLess;