import React from 'react'
import NavBar from './NavBar'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
          <div data-role="panel" id="left-panel">
                <ul data-role="listview">
                	<li data-icon="delete"><a href="#" data-rel="close">
                	Close</a></li>
                  	<li data-role="list-divider">Select a City</li>
    	            <li ><a href="#" class="city" data-rel="close">Current Location</a></li>
    	          	<li ><a href="#" class="city" data-rel="close">Chicago</a></li>
    	          	<li ><a href="#" class="city" data-rel="close">Los Angeles</a></li>
    	          	<li ><a href="#" class="city" data-rel="close">Miami</a></li>
    	          	<li ><a href="#" class="city" data-rel="close">New York</a></li>
    	          	<li ><a href="#" class="city" data-rel="close">San Francisco</a></li>
                </ul>
            </div>
      </div>
    )
  }
}
