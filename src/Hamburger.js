import React, { Component } from 'react';
import './Hamburger.scss';


class Hamburger extends Component {
    state={
        isOpen: false
    }

    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
          }))
    }
    render() {
        return (
            <div id="menuToggle" onClick={this.toggleOpen}>
                
            <div  className={this.state.isOpen ? 'checked checkbox': 'checkbox'}/>
            <span></span>
            <span></span>
            <span></span>
            {/* <ul id="menu">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul> */}
          </div>
        );
    }
}

export default Hamburger;