// create your App component here

import React, { Component } from 'react';

class App extends Component {

  render() {
    return(
      <div>hi</div>
    )
  }

  componentDidMount() {
    console.log('component componentDidMount')
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(astroData => console.log(astroData))
  }
}

export default App
