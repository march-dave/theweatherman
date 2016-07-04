import React from 'react'
import NavBar from './NavBar'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <h1>The Weather man!</h1> 
      </div>
    )
  }
}
