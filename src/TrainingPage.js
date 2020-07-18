import React, { Component } from 'react'

class TrainingPage extends Component {
  render() {
    return (
      <div>
        <div className="navbar-buffer" />
        <section className="curved-bottom initiatives-section half-split">
          <div className="container">
            <div className="text-block">
              <h1>Our Training</h1>
              <p>
              Funded by a grant from the Fogarty International Center, PHIRST hosts researchers from the University of the Philippines, Manila for short-term visits and graduate degrees. PHIRST leadership also conducts working sessions in the Philippines to advance local research efforts. Ultimately, a key component of PHIRST is to advance the development of the next generation of researchers focused on issues impacting Filipinos and Filipino Americans. 
              </p>
              {/* <h3 className="link-arrow">NEXT 
              <img 
              alt='right arrow'
              src={require('./images/right-arrow.svg')}></img>
              </h3> */}
            </div>
            <div className="circle light tablet-none" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img
                alt="person teaching"
                className="fade-in"
                src={require('./images/educational.png')}
                style={{ height: '60%' }}
              ></img>
            </div>
          </div>
        </section>
        <section className="white-body team-container"></section>
      </div>
    )
  }
}

export default TrainingPage