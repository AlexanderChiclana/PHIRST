import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from './Logo.js'
import Hamburger from './Hamburger.js'

class NavbarLink extends Component {
  state = {
    isCurrent: false
  }

  render() {
    const { route, location } = this.props

    return (
      <div>
        <Link to={`/${route}`}>
          <div
            className={
              location.pathname.includes(route) ? 'route active' : 'route'
            }
          >
            {route}
          </div>
        </Link>
      </div>
    )
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      prevScrollpos: window.pageYOffset,
      prevWindowWidth: window.innerWidth,
      isOpen: false,
      downPage: true,
      topPage: true,
      visible: true
    }
    this.showRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged()
    }
  }

  onRouteChanged = () => {
    this.setState({
      isOpen: false
    })
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos, isOpen } = this.state

    const currentScrollPos = window.pageYOffset

    const visible =
      isOpen || prevScrollpos > currentScrollPos || currentScrollPos < 500
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

  handleResize = () => {
    const { prevWindowWidth } = this.state

    const currentWindowWidth = window.innerWidth

    const hasWindowChanged = prevWindowWidth !== currentWindowWidth

    if (hasWindowChanged) {
      this.setState({
        isOpen: false
      })
    }
  }

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="navigation-bar"
          style={{
            top: this.state.visible ? '0px' : '-140px',
            transition: 'top 300ms, box-shadow 700ms',
            boxShadow:
              this.state.topPage || this.state.isOpen
                ? 'none'
                : '0 2px 4px -1px rgba(0,0,0,0.2)'
          }}
        >
          <div
            style={{
              opacity: this.state.downPage ? 1 : 0,
              transition: 'opacity 1s'
            }}
          >
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>

          <div className="navigation-routes">
            {/* <Link to={'/research'}><div className='route'>research</div></Link> */}

            {this.props.location.pathname !== '/' && (
              <div>
                <Link to={`/`}>
                  <div className="route">home</div>
                </Link>
              </div>
            )}

            <NavbarLink location={this.props.location} route="research" />
            <NavbarLink location={this.props.location} route="service" />
            <NavbarLink location={this.props.location} route="training" />
            <NavbarLink location={this.props.location} route="team" />
            <NavbarLink location={this.props.location} route="contact" />
          </div>
          <Hamburger toggleOpen={this.toggleOpen} isOpen={this.state.isOpen} />
        </div>
        <div
          className="mobile-nav"
          style={{
            height: this.state.isOpen ? '450px' : '0vh',
            boxShadow: this.state.isOpen && '0 2px 4px -1px rgba(0,0,0,0.2)'
          }}
        >
          <div className="mobile-navigation-routes">
            <div>
              
            {this.props.location.pathname !== '/' && (
              <div>
                <Link to={`/`}>
                  <div className="route">home</div>
                </Link>
              </div>
            )}
            
              <NavbarLink location={this.props.location} route="research" />
              <NavbarLink location={this.props.location} route="service" />
              <NavbarLink location={this.props.location} route="training" />
              <NavbarLink location={this.props.location} route="team" />
              <NavbarLink location={this.props.location} route="contact" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Navbar)
