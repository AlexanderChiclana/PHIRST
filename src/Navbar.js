import React, { Component } from 'react'
import  {Link, useLocation } from 'react-router-dom'
import Logo from './Logo.js'
import Hamburger from './Hamburger.js'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          downPage: true,
          visible: true
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
    

    const visible = prevScrollpos > currentScrollPos || currentScrollPos < 500
    // const visible = currentScrollPos > 500
    // const downPage = currentScrollPos > 550
    const topPage = currentScrollPos < 10
    const downPage = true

    this.setState({
      prevScrollpos: currentScrollPos,
      topPage: topPage,
      visible: visible,
      downPage: downPage
    })
  }

  render() {
    return (
      <div 
      className="navigation-bar"
      style={{
        top: this.state.visible ? '0px' : '-140px',
        transition: 'top 300ms',
        boxShadow: this.state.topPage ? 'none' : '0 2px 4px -1px rgba(0,0,0,0.2)'

      }}  
      >
         <div style={{opacity: this.state.downPage ? 1 : 0, transition: 'opacity 1s' }}>
           <Link to={'/'}><Logo /></Link>
         </div>
        
        <div className='navigation-routes'>
        <Link to={'/team'}><div className='route'>team</div></Link>
          <Link to={'/service'}><div className='route'>service</div></Link>
           <Link to={'/training'}><div className='route'>training</div></Link>
           <Link to={'/research'}><div className='route'>research</div></Link>
           <Link to={'/contact'}><div className='route'>contact</div></Link>

        </div>
        <Hamburger />

      </div>
    )
  }
}

export default Navbar
