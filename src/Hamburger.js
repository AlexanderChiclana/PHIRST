import React, { Component } from 'react';
import './Hamburger.scss';


class Hamburger extends Component {
    render() {
        return (
            <div id="menuToggle" onClick={this.props.toggleOpen}>
                
            <div  className={this.props.isOpen ? 'checked checkbox': 'checkbox'}/>
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