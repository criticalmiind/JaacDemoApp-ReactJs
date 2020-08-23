import React, { Component } from 'react'
import { ReactComponent as ReactLogo } from './../assets/burger_menu.svg'
import './DrawerBtn.css'

class DrawerBtn extends Component {
   render(){
     return (
        <button onClick={this.props.toggle} class="drawer-btn">
          <ReactLogo />
        </button>
     )
    }   
}

export default DrawerBtn