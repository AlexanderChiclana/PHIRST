import React, { Component } from 'react'
import Testimonial from './Testimonial.js'
import Olivia from './images/olivia.png'
import Maylin from './images/Maylin.jpg'
import Irene from './images//Quilantang.jpg'
import { Link } from 'react-router-dom'

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
                Funded by a grant from the Fogarty International Center, PHIRST
                hosts researchers from the University of the Philippines, Manila
                for short-term visits and graduate degrees. PHIRST leadership
                also conducts working sessions in the Philippines to advance
                local research efforts. Ultimately, a key component of PHIRST is
                to advance the development of the next generation of researchers
                focused on issues impacting Filipinos and Filipino Americans.
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
                alt="person teaching"
                className="fade-in"
                src={require('./images/educational.png')}
                style={{ height: '60%' }}
              ></img>
            </div>
          </div>
        </section>
        <section className="white-body team-container">
          <div className="container">
            <h1>Member Testimonials</h1>
            <div className="testimonials">
              <Testimonial
                name="Olivia Sisson"
                photo={Olivia}
                position="PHIRST Member"
                quote="  I am very grateful to be part of PHIRST and working alongside with
          other scholars and great mentors. This group has provided a space
          where we can share our own work, ask for technical assistance, and
          learn from each other, with the common goal of improving the health
          and well-being of Filipinos and Filipino-Americans. The training
          opportunities given to us and the chance to do our graduate programs
          at the Brown University will definitely build our capacity to carry
          out our research projects and improve our teaching strategies when we
          return to our home country and university  "
              />

              <Testimonial
                name="Ma. Irene N. Quilantang"
                photo={Irene}
                position="PHIRST Member"
                quote="  Being a part of PHIRST has been life-changing for me, both professionally and personally. My interactions with my mentors and colleagues at PHIRST have inspired me to continue translating science into service, and to continue taking up space in institutions that often overlook the communities I represent.  PHIRST has strengthened my commitment to serve the Filipino people, and for that I will forever be grateful  "
              />

              <Testimonial
                name="Maylin Palatino"
                photo={Maylin}
                position="PHIRST Member"
                quote="  Being part of PHIRST has helped me grow as a researcher by providing valuable input and support. It has helped me widen my perspective about service and society. The group has also been my family away from home  "
              />

              <Testimonial
                name="Olivia Sisson"
                photo={Olivia}
                position="PHIRST Member"
                quote="  I am very grateful to be part of PHIRST and working alongside with
          other scholars and great mentors. This group has provided a space
          where we can share our own work, ask for technical assistance, and
          learn from each other, with the common goal of improving the health
          and well-being of Filipinos and Filipino-Americans. The training
          opportunities given to us and the chance to do our graduate programs
          at the Brown University will definitely build our capacity to carry
          out our research projects and improve our teaching strategies when we
          return to our home country and university  "
              />
            </div>

            <div className="call-to-action">
              <h1>Interested in our training?</h1>
              <p>
                We have weekly team meetings to discuss research ideas and
                future projects. Training encompasses research methodology and
                team member provide their expertise in relation to both
                quantitative and qualitative projects.
              </p>

              <Link to={'/contact'}>
                <div className="button">Contact Us</div>
              </Link>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default TrainingPage
