import React, { Component } from 'react'

export default class GifSearch extends Component {

  // constructor(props) {
  //   super(props)
    state = {
      userInput: ''
    }
  // }

  updateInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.search(e, this.state.userInput)}>
        <input type='text'
          value={this.state.userInput}
          onChange={(e) => this.updateInput(e)} />
        <input className="btn primary success" type='submit' value="Search" />

      </form>
    )
  }

}