import React, { Component } from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

export default class GifListContainer extends Component {

  state = {
    firstThreeGifs: []
  }

  search = (e, query) => {
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(gifs => this.setState({
        firstThreeGifs: gifs.data.slice(0, 3)
      }))
  }

  render() {
    return (
      <div>
        <GifSearch search={ this.search }/>
        <GifList threeGifs={ this.state.firstThreeGifs }/>
      </div>
    )
  }
}