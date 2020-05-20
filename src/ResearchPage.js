import React, { Component } from 'react'

class ResearchPage extends Component {
  render() {
    return (
      <div>
        <div className="navbar-buffer" />
        <section className="curved-bottom initiatives-section half-split">
          <div className="container">
            <div className="text-block">
              <h1>Our Research</h1>
              <p>
                PHIRST researchers leverage both qualitative and quantitative
                methods to answer research questionsa. Our work incorporrates a
                wide range of data collection methods, from primary collection
                of data through smaller community-based surveys to secondary
                analyses of large publicly available datasets. Our work in the
                Philippines mostly focuses on HIV and key impacted communities
                like transgender women, cisgender men who have sex with men, and
                young adults, while our work among Filipino Americans mostly
                focuses on chronic health. PHIRST research has been presented
                and recognized with awards at national and international
                conferences, including the APHA Annual Meeting and International
                AIDS Conference, and published in academic journals, including
                AJPH, Global Public Health, and PloS one.
              </p>
              {/* <h3 className="link-arrow">NEXT 
                  <img 
                  alt='right arrow'
                  src={require('./images/right-arrow.svg')}></img>
                  </h3> */}
            </div>
            <div className="circle light" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img
                alt="research icon"
                className="fade-in"
                src={require('./images/business-and-finance.png')}
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

export default ResearchPage
