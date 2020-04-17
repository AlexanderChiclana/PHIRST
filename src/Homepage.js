import React, { Component } from 'react'
import Hero from './Hero.js'
import Arrow from './Arrow.js'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <img
          alt="map of usa"
          src={require('./images/usa black.png')}
          style={{ height: '200px', position: 'absolute', left: '30px' }}
        ></img>

        <section className="angled-top icon-section"></section>

        <section className="curved-bottom initiatives-section half-split">
          <div className="container">
            <div className="text-block">
              <h1>Our Initiatives</h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim vevniam, quis nostrud exercitation ullamco laboris
                nisi ut "Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris
              </p>
              {/* <h3 className="link-arrow">NEXT 
              <img 
              alt='right arrow'
              src={require('./images/right-arrow.svg')}></img>
              </h3> */}
            <Arrow message={'All Inititaives'}/>

            </div>
            <div className="circle light">
            <img alt='map of phillipines' src={require('./images/philipine black.png')} style={{height: '100%'}}></img>
            </div>
          </div>
        </section>

        <section className="curved-top community-section">
          <div className="white-fill"> </div>
        </section>

        <section className="curved-bottom initiatives-section"></section>

        <section className="curved-top community-section">
          <div className="white-fill"> </div>
        </section>
      </div>
    )
  }
}

export default Homepage
