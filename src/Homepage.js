import React, { Component } from 'react'
import Hero from './Hero.js'
import Arrow from './Arrow.js'
import CircleLogo from './CircleLogo.js'
import Timeline from './Timeline.js'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Hero />
        {/* <img
          alt="map of usa"
          src={require('./images/usa black.png')}
          style={{ height: '200px', position: 'absolute', left: '30px' }}
        ></img> */}
        <section className="mission half-split">
          <div className="container">
            <div className="text-block">
              <h1>We are PHIRST</h1>
              <p>
                The Brown Philippine Health Initiative for Research, Service, &
                Training is an effort by students and faculty at the Brown
                School of Public Health to advance the health of people in the
                Philippines and Filipino Americans. Though we are mostly focused
                on doing so through the development of knowledge through
                scholarship, we are committed to developing this knowledge
                alongside community partners and contributing to research and
                advocacy infrastructure while doing this research. PHIRST is a
                collective effort focused on building a critical mass of
                scholar-advocates; and a collaborative, team-based approach to
                improving Filipino and Filipino American health is a fundamental
                aspect of PHIRST.
              </p>
              {/* <h3 className="link-arrow">NEXT 
              <img 
              alt='right arrow'
              src={require('./images/right-arrow.svg')}></img>
              </h3> */}
              {/* <Arrow message={'All Inititaives'} /> */}
            </div>
              {/* <Logo height={''}/> */}
              <div className="circle light" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

              <img
                alt="map of phillipines"
        
                src={require('./images/brown-transparent.png')}
                style={{ height: '200px'}}
              ></img> 
              </div>
         

          
          
          </div>
        </section>

        <section className="angled-top icon-section">
          <div className="container">
            <div className="icon-row">
              <div className="icon-container">
                <div
                  className="circle-small"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    alt="map of usa"
                    src={require('./images/business-and-finance.png')}
                    style={{
                      height: '65%',
                      filter:
                        'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)'
                    }}
                  ></img>
                </div>
              </div>
              <div className="text-container">
                <h1 className="light-font">Research</h1>
                <p className="light-font medium-spacing">
                  PHIRST researchers leverage both qualitative and quantitative
                  methods to answer research questions. Our work incorporates a
                  wide range of data collection methods, from primary collection
                  of data through smaller community-based surveys to secondary
                  analyses of large publicly available datasets.
                </p>
                <Arrow message={'our research'} route={'/research'} />
              </div>
            </div>

            <div className="icon-row">
              <div className="icon-container">
                <div
                  className="circle-small"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    alt="map of usa"
                    src={require('./images/maps-and-flags.png')}
                    style={{
                      height: '80%',
                      filter:
                        'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)'
                    }}
                  ></img>
                </div>
              </div>

              <div className="text-container">
                <h1 className="light-font">Service</h1>
                <p className="light-font medium-spacing">
                  PHIRST would not have been started without community-based
                  organization partnerships and their invaluable contributions
                  to the work, so a key goal of PHIRST is to leverage our
                  research into advocacy and contributions to our community
                  partners' missions.
                </p>
                <Arrow message={'our service'} route={'/service'} />
              </div>
            </div>

            <div className="icon-row">
              <div className="icon-container">
                <div
                  className="circle-small"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    alt="map of usa"
                    src={require('./images/educational.png')}
                    style={{
                      height: '60%',
                      filter:
                        'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)'
                    }}
                  ></img>
                </div>
              </div>
              <div className="text-container">
                <h1 className="light-font">Training</h1>
                <p className="light-font medium-spacing">
                  Training has been a core component of PHIRST since its
                  inception, as several Brown undergraduate and graduate
                  students have benefited from opportunities and mentorship from
                  PHIRST leadership.
                </p>
                <Arrow message={'training program'} route={'/training'} />
              </div>
            </div>
          </div>
        </section>

        <section className="curved-bottom initiatives-section half-split">
          <div className="container tablet-reverse">
            <div className="text-block">
              <h1>Mentorship</h1>
              <p>
                A central component of our mission is to foster community and
                provide mentorship to students interested in improving Filipino
                and Filipino American health. Below is a timeline of former
                students mentored by Dr. Operario since 1994.
              </p>
              {/* <h3 className="link-arrow">NEXT 
              <img 
              alt='right arrow'
              src={require('./images/right-arrow.svg')}></img>
              </h3> */}
              {/* <Arrow message={'past trainees'} /> */}
            </div>
            <div
              className="circle light"
              style={{ overflow: 'hidden', border: '15px solid white' }}
            >
              <img
                alt="Don mentoring a student"
                src={require('./images/mentoring.PNG')}
                style={{ height: '100%' }}
              ></img>
            </div>
          </div>
        </section>

        <section className="curved-top community-section">
          <div className="white-fill"> </div>
        </section>

        {/* <section className="curved-bottom initiatives-section"></section> */}

        {/* <section className="curved-top community-section">
          <div className="white-fill"> </div>
        </section> */}

        <section className="white-body">
          <div
            className="container timeline-header"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <h1>PHIRST Alumni</h1>
          </div>
          <Timeline />
        </section>
      </div>
    )
  }
}

export default Homepage
