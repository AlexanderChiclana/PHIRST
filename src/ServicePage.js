import React, { Component } from 'react'
import Arrow from './Arrow.js'

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
                PHIRST researchers engage in active conversation and
                collaboration with leaders of community-based organizations to
                allow for effective exchange of ideas. PHIRST researchers have
                contributed op-eds. combining research insights alongside
                highlights of efforts by community-based organizations in the
                Philippines.
              </p>
              {/* <h3 className="link-arrow">NEXT 
              <img 
              alt='right arrow'
              src={require('./images/right-arrow.svg')}></img>
              </h3> */}
            </div>
            <div
              className="circle light"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                alt="map of phillipines"
                className="fade-in"
                src={require('./images/maps-and-flags.png')}
                style={{ height: '60%' }}
              ></img>
            </div>
          </div>
        </section>
        {/* <section className="white-body team-container">
        </section> */}

        <section className="white-body">
          <div className="container">

          <div className="body-heading">
          <h1>Partnerships
            </h1>   
          </div>
        <div>
            <div className="icon-row">
              <div className="icon-container">
                <div className="service-icon-block">
                  <img
                    alt="map of usa"
                    style={{
                      height: '200px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                    src={require('./images/PWC.png')}
                  ></img>
                </div>
              </div>
              <div className="text-container">
                <h3 className="">Pilipino Workers Center</h3>
                <p className=" medium-spacing">
                  Founded in 1997, Pilipino Workers Center (PWC) is a non-profit
                  501(c)3 that organizes the low-wage Pilipinx community in
                  Southern California to demand better living and working
                  conditions. In this current national and political climate
                  where immigrant rights are being attacked and quickly eroded,
                  domestic workers are pushed even more into vulnerable and
                  exploitative working situations. PWC does their part by
                  providing support for human trafficking survivors, immigration
                  services, affordable housing, workforce training, education on
                  workers’ rights, wage theft enforcement, free tax preparation,
                  and a cooperative for homecare workers.
                </p>
                {/* <Arrow message={'our research'} route={'/research'}/> */}
              </div>
            </div>

            <div className="icon-row">
              <div className="icon-container">
                <div className="service-icon-block">
                  <img
                    alt="map of usa"
                    src={require('./images/red-whistle.png')}
                  ></img>
                </div>
              </div>

              <div className="text-container">
                <h3 className="">The Red Whistle</h3>
                <p className="medium-spacing">
                  The Red Whistle is a collaborative platform for people to come
                  together and show their support to those living with HIV and
                  AIDS. It is also an agent and partner for brands to show their
                  support to HIV and AIDS advocacy. As HIV advocates, The Red
                  Whistle aim to empower and inspire people to come together and
                  help each other in the battle against HIV and AIDS. Using pop
                  culture as a way to change mindsets, we hope to start
                  discussions among the youth so that they will sound the alarm
                  and spread the word that HIV is here — and that it must be
                  stopped.
                </p>
                {/* <Arrow message={'our service'} route={'/service'}/> */}
              </div>
            </div>

            <div className="icon-row">
              <div className="icon-container">
                <div className="service-icon-block">
                  <img
                    alt="map of usa"
                    style={{ height: '150px' }}
                    src={require('./images/pinoy-plus.jpg')}
                  ></img>
                </div>
              </div>
              <div className="text-container">
                <h3 className="">Pinoy Plus Advocacy Pilipinas Inc.</h3>
                <p className=" medium-spacing">
                  Pinoy Plus Association is an empowered steward of unified,
                  responsive, community-driven HIV /AIDS initiatives to promote
                  the general well-being of PLHIVs & their families.
                </p>
                {/* <Arrow message={'training program'} route={'/training'}/> */}
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ServicePage
