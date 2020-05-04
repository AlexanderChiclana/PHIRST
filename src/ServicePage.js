import React, { Component } from 'react'

class ServicePage extends Component {
  render() {
    return (
      <div>
        <div className="navbar-buffer" />
        <section className="curved-bottom initiatives-section half-split">
          <div className="container">
            <div className="text-block">
              <h1>Our Service</h1>
              <p>
                PHIRST would not have been started without community-based
                organizations and their invaluable contributions to our work, so
                a key goal of PHIRST is to leverage our research into advocacy
                and contributions to our community partners' missions. PHIRST
                researchers engage in active conversation and collaboration with
                leaders of community-based organizations to allow for effective
                exchange of ideas. PHIRST researchs have contributed op-eds.
                combining research insights alongside highlights of efforts by
                community-based organizations in the Philippines.
              </p>
              {/* <h3 className="link-arrow">NEXT 
              <img 
              alt='right arrow'
              src={require('./images/right-arrow.svg')}></img>
              </h3> */}
            </div>
            <div className="circle light">
              <img
                alt="map of phillipines"
                src={require('./images/philipine black.png')}
                style={{ height: '100%' }}
              ></img>
            </div>
          </div>
        </section>
        <section className="white-body team-container"></section>
      </div>
    )
  }
}

export default ServicePage
