import React, { Component } from 'react'

export default class GifList extends Component {

  render(){
    return (
    <ul>
      {this.props.threeGifs.map( gif => <li key={gif.slug}><img src={gif.images.original.url  } alt={gif.slug} /></li>)}
    </ul>
    )
  }
}