import React, { Component } from 'react'
import Arrow from './Arrow.js'
import { Link } from 'react-router-dom'
import Ship from './images/SHIP.jpg'
import Pinoy from './images/pinoy-plus.jpg'
import RedWhistle from './images/red-whistle.png'
import WorkersCenter from './images/PWC.png'
import PAFPI from './images/pafpi.png'

const Partner = props => {
  return (
    <div className="icon-row">
      <div className="icon-container tablet-bottom-buffer">
        <div className="service-icon-block">
          <a href={props.link}>
          <img
            alt={`${props.name} logo`}
            title={`${props.name} logo`}
            style={{
              maxHeight: '200px',
              maxWidth: '200px',
              borderRadius: '10%',
              objectFit: 'cover'
            }}
            src={props.image}
          ></img>
          </a>
        </div>
      </div>
      <div className="text-container">
        <a href={props.link}><h3 className="">{props.name}</h3></a>
        <p className=" medium-spacing">{props.description}</p>
        {/* <Arrow message={'our research'} route={'/research'}/> */}
      </div>
    </div>
  )
}

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
                allow for effective exchange of ideas. PHIRST researchers have contributed op-eds., combining research insights alongside highlights of efforts by community-based organizations in the Philippines and the United States.
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
              <h1>Partnerships</h1>
            </div>
            <div>
         
              <Partner 
                description="Founded in 1997, Pilipino Workers Center (PWC) is a
                non-profit 501(c)3 that organizes the low-wage Pilipinx
                community in Southern California to demand better living and
                working conditions. In this current national and political
                climate where immigrant rights are being attacked and
                quickly eroded, domestic workers are pushed even more into
                vulnerable and exploitative working situations. PWC does
                their part by providing support for human trafficking
                survivors, immigration services, affordable housing,
                workforce training, education on workers’ rights, wage theft
                enforcement, free tax preparation, and a cooperative for
                homecare workers."
                image={WorkersCenter}
                name="Pilipino Workers Center"
                link="https://www.facebook.com/PWCSC/"
              />
    

    

              <Partner 
                description="The Red Whistle is a collaborative platform for people and
                organizations to come together and show their support for
                those living with HIV. It is an agent for change and a
                partner for brands, celebrities, and influencers to get
                educated on HIV and participate in activities that aim to
                reduce HIV-related stigma and discrimination. As HIV
                advocates, The Red Whistle aims to empower and inspire
                people to come together and help each other in our
                commitment to promote HIV awareness and sex positivity.
                Using art, social media, and pop culture as tools to change
                people's mindsets, we hope to start discussions among young
                people so that they understand the issues underlying the
                rise of new HIV infections. Let's blow the whistle harder,
                sound the alarm that HIV is here so that it can be stopped."
                image={RedWhistle}
                name="The Red Whistle"
                link="https://theredwhistle.com/"
              />
    
              <Partner 
                description="Pinoy Plus Association is an empowered steward of unified,
                    responsive, community-driven HIV /AIDS initiatives to
                    promote the general well-being of PLHIVs & their families."
                name="Pinoy Plus Advocacy Pilipinas Inc."
                image={Pinoy}
                link="https://www.facebook.com/PinoyPlusAssociationInc/?eid=ARCDHIIRoQtIkZAw5yYt3DWhgsm9g-XwC2LY09wZF_DIOUm6z0DGOWsp0_teMJHC1AwuGvMhvBfVAnot"
              />

              <Partner
                description="Sustained Health Initiatives of the Philippines (SHIP), Inc. is a non-stock, non-profit organization that offers high-quality, affordable HIV and primary care directly to the communities that need it most.
                             By providing HIV care, building capacity, and testing innovative approaches, SHIP aims to get more people into treatment, and save lives.
                             They create sustainable, one-stop-shop community clinics in high impact areas throughout the Philippines."
                name="Sustained Health Initiatives of the Philippines (SHIP) "
                image={Ship}
                link="http://www.ship.ph/"
              />

              <Partner 
                name="Positive Action Foundation Philippines Incorporated (PAFPI) "
                description="Positive Action Foundation Philippines Incorporated (PAFPI) was formed in 1998 by Joshua Formentera who is the founding president with the help of other persons living with HIV Philippines and AIDS (PLWHAs) and their uninfected families. This non-profit organization has a mission to empower people with HIV / AIDS and their families to live a normal, happy and productive life in the mainstream of a supportive society. The said organization also is continuing the fight for HIV Philippines and AIDS prevention and control by facilitating support responses to the needs of PLWHAs and their families. This is done through the provision of appropriate care and support services. PAFPI believes in the greater involvement of positive people in the national response to HIV Philippines and AIDS, a belief that actively pursues both the organization and advocacy programs."
                image={PAFPI}
                link="https://pafpi.org/"
              />
            </div>

            <div className="call-to-action">
              <h1>Want to learn more about PHIRST?</h1>
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

export default ServicePage
