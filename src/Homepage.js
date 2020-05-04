import React, { Component } from 'react'
import Hero from './Hero.js'
import Arrow from './Arrow.js'
import CircleLogo from './CircleLogo.js'

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
                Training is an effort by student and faculty at the Brown School
                of Public Health to advance the health of people in the
                Philippines and Filipino Americans. Though we are mostly focused
                on doing so through the development of knowledge through
                scholarship, we are committed to developing this knowledge
                alongside community partners and contributing to research and
                advocacy infrastructure while doing this research. PHIRST is a
                collective effort focused on building a critical mass of
                scholar-advocates; and a collaborative, team-based approach to
                improving Filipino and Filipino American health
              </p>
              {/* <h3 className="link-arrow">NEXT 
              <img 
              alt='right arrow'
              src={require('./images/right-arrow.svg')}></img>
              </h3> */}
              {/* <Arrow message={'All Inititaives'} /> */}
            </div>
            {/* <div className="circle light"> */}
              {/* <Logo height={''}/> */}
              {/* <img
                alt="map of phillipines"
                src={require('./images/philipine black.png')}
                style={{ height: '100%' }}
              ></img> */}
            {/* </div> */}
            <CircleLogo />
          </div>
        </section>

        <section className="angled-top icon-section">
          <div className="container">
            <div className="icon-row">
              <div className="icon-container">
                <div className="circle-small"></div>
              </div>

              <div className="text-container">
                <h1 className="light-font">Service</h1>
                <p className="light-font medium-spacing">
                  PHIRST would not have been started without community-based
                  organizations and their invaluable contributions to our work,
                  so a key goal of PHIRST is to leverage our research into
                  advocacy and contributions to our community partners'
                  missions. PHIRST researchers engage in active conversation and
                  collaboration with leaders of community-based organizations to
                  allow for effective exchange of ideas. PHIRST researchs have
                  contributed op-eds. combining research insights alongside
                  highlights of efforts by community-based organizations in the
                  Philippines.
                </p>
              </div>
            </div>

            <div className="icon-row">
              <div className="icon-container">
                <div className="circle-small"></div>
              </div>
              <div className="text-container">
                <h1 className="light-font">Training</h1>
                <p className="light-font medium-spacing">
                  Training has been a core component of PHIRST since its
                  inception, as several Brown undergraduate and graduate
                  students have benefited from opportunities and mentorship from
                  PHIRST leadership. Funded by a grant from the Fogarty
                  International Center, PHIRST hosts researchers from the
                  University of the Philippines,. Manila for short-term visits
                  and graduate degrees.PHIRST leadership also conducts working
                  sessions in the Philippines to advance local research efforts.
                  Ultimately, a key component of PHIRST is to advance the
                  development of the next generation of researchers focused on
                  issues impacting Filipinos and Filipino Americans.
                </p>
              </div>
            </div>

            <div className="icon-row">
              <div className="icon-container">
                <div className="circle-small"></div>
              </div>
              <div className="text-container">
                <h1 className="light-font">Research</h1>
                <p className="light-font medium-spacing">
                  PHIRST researchers leverage both qualitative and quantitative
                  methods to answer research questionsa. Our work incorporrates
                  a wide range of data collection methods, from primary
                  collection of data through smaller community-based surveys to
                  secondary analyses of large publicly available datasets. Our
                  work in the Philippines mostly focuses on HIV and key impacted
                  communities like transgender women, cisgender men who have sex
                  with men, and young adults, while our work among Filipino
                  Americans mostly focuses on chronic health. PHIRST research
                  has been presented and recognized with awards at national and
                  international conferences, including the APHA Annual Meeting
                  and International AIDS Conference, and published in academic
                  journals, including AJPH, Global Public Health, and PloS one.
                </p>
              </div>
            </div>
          </div>
        </section>

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
              <Arrow message={'all inititaives'} />
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

        <section className="curved-top community-section">
          <div className="white-fill"> </div>
        </section>

        {/* <section className="curved-bottom initiatives-section"></section> */}

        {/* <section className="curved-top community-section">
          <div className="white-fill"> </div>
        </section> */}

        <section className="white-body"></section>
      </div>
    )
  }
}

export default Homepage
