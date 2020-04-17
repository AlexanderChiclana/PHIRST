import React, { Component } from 'react'
import Logo from './Logo.js'
import Hamburger from './Hamburger.js'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: false
        }
        this.showRef = React.createRef()
      }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset

    // const visible = prevScrollpos > currentScrollPos && currentScrollPos > 150
    const visible = currentScrollPos > 500


    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    })
  }

  render() {
    return (
      <div 
      className="navigation-bar"
      style={{
        top: this.state.visible ? '0px' : '-140px',
        transition: 'top 300ms'
      }}  
      >
        <div><Logo /></div>
        <div className='navigation-routes'>

          <div className='route'>about</div>
          <div className='route'>initiatives</div>
          <div className='route'>community</div>
          <div className='route'>research</div>
          <div className='route'>contact</div>

        </div>
        <Hamburger />

      </div>
    )
  }
}

export default Navbar
