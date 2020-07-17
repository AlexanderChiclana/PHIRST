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
              className="circle light tablet-none"
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
              <div className="icon-container tablet-bottom-buffer">
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
              <div className="icon-container tablet-bottom-buffer">
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
                The Red Whistle is a collaborative platform for people and organizations to come together and show their support for those living with HIV. It is an agent for change and a partner for brands, celebrities, and influencers to get educated on HIV and participate in activities that aim to reduce HIV-related stigma and discrimination.

As HIV advocates, The Red Whistle aims to empower and inspire people to come together and help each other in our commitment to promote HIV awareness and sex positivity. Using art, social media, and pop culture as tools to change people's mindsets, we hope to start discussions among young people so that they understand the issues underlying the rise of new HIV infections. Let's blow the whistle harder, sound the alarm that HIV is here so that it can be stopped.

                </p>
                {/* <Arrow message={'our service'} route={'/service'}/> */}
              </div>
            </div>

            <div className="icon-row">
              <div className="icon-container tablet-bottom-buffer">
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
