import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { white } from 'color-name'

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div className="navbar-buffer" />
        <section className="white-body">
          <div className="container contact">
            <div className="team-photo-container">
              <img
                alt="team"
                className="team-photo"
                src={require('./images/dinner.jpeg')}
              />
            </div>
            <div className="contact-info">
              <h1>Contact Us</h1>
              <p>
                We have weekly team meetings to discuss research ideas and
                future projects. Training encompasses research methodology and
                team member provide their expertise in relation to both
                quantitative and qualitative projects. For inquiries about
                training, please contact either Jennifer Nazareno or Don
                Operario. For all other inquiries, please contact Alex Adia.
              </p>
              <div className="contact-links">
                <a href="mailto:jennifer_nazareno@brown.edu">
                  <p>
                    <span style={{ marginRight: '10px' }}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    Jennifer_Nazareno@Brown.edu
                  </p>
                </a>
                <a href="mailto:don_operario@brown.edu">
                  <p>
                    <span style={{ marginRight: '10px' }}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    Don_Operario@Brown.edu
                  </p>
                </a>
                <a href="mailto:alexander_adia@alumni.brown.edu">
                  <p>
                    <span style={{ marginRight: '10px' }}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    Alexander_Adia@Alumni.Brown.edu
                  </p>
                </a>
                <a href="https://twitter.com/BrownPHIRST">
                  <p>
                    <span style={{ marginRight: '10px' }}>
                      {' '}
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    BrownPHIRST
                  </p>
                </a>
              </div>
              {/* <FontAwesomeIcon icon={['fab', 'twitter']} className="footer-icon"/> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ContactPage
