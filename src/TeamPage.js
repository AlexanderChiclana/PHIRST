import React, { Component } from 'react'
import MailIcon from '../src/images/mail-icon.png'
import LinkedinIcon from '../src/images/linkedin-icon.png'

import John from './images/Guigayoma-square.jpg'
import Amiel from './images/ACBermudez.png'
import Irene from './images/Quilantang.jpg'
import Olivia from './images/olivia.png'
import Maylin from './images/Maylin.jpg'
import Arjee from './images/arjee.jpg'
import Alexander from './images/Alexander.JPG'

const members = [
    {
        name: 'Don',
        pic: '',
        bio: '',
        mail: '',
        linkedIn: ''
    },
  {
      name: 'Jen',
      pic: '',
      bio: '',
      mail: '',
      linkedIn: ''
  },
  { 
      name: 'Alexander Adia', 
      pic: Alexander, 
      bio: 
      "Alexander Adia (he/him) is a co-founder of PHIRST and is currently an affiliated researcher based out of New York, NY. His research in the Philippines focuses on the intersection of HIV, law, and policy, while his research among Filipino Americans focuses on health policy, data aggregation, and health services. His work affiliated with PHIRST has received recognition from Brown Graduate School and the APHA's Asian & Pacific Islander Caucus. He is pictured here at Sirao Flower Garden in Cebu.", 
      mail: '', 
      linkedIn: '' 
  },
  { 
      name: 'Amiel Nazer Consigna Bermudez', 
      pic: Amiel, 
      bio: 'Amiel Nazer C. Bermudez is a PhD student in epidemiology at the Department of Epidemiology, School of Public Health, Brown University. He is also a faculty member (on leave) at the Department of Epidemiology and Biostatistics, College of Public Health, University of the Philippines Manila (UP Manila). He obtained his Doctor of Medicine degree in 2009 from the College of Medicine of UP Manila under the Integrated Liberal Arts and Medicine Program (INTARMED). In 2014, he completed his Master of Public Health degree from the College of Public Health of UP Manila. Prior to coming to Brown for his doctoral studies, Amiel has undertaken research projects funded by the Department of Health (Philippines); World Health Organization (WHO); United Nations Children’s Fund (UNICEF); Asian Development Bank (ADB); Health Futures Foundation, Inc. (HFI); Philippine Business for Social Progress, Inc. (PBSP); and Johnson and Johnson’s Philippines, among others. His research interests include HIV–AIDS, communicable diseases, maternal health, intimate partner violence, child health, tobacco control, systematic reviews and meta-analysis of clinical interventions, and clinical practice guideline development. Currently, his research focuses on determinants of HIV risk in Filipino men who have sex with men and Filipina transgender women, as well as strategies to increase engagement of vulnerable persons in the HIV care continuum.', 
      mail: '', 
      linkedIn: '' 
  },
  { 
      name: 'Arjee Restar', 
      pic: Arjee, 
      bio: 'Arjee is a trans Filipina doctoral candidate in the Behavioral and Social Sciences Department. Her research engagements center on promoting structural and social-based interventions to improve the health of Filipinx transgender communities affected by a multitude of adverse health outcomes, such as HIV/AIDS, substance use, and negative mental health. This work includes advocating for institutional policies and practices support health equity.', 
      mail: '', 
      linkedIn: '' 
  },
  { 
      name: 'Irene N. Quilantang', 
      pic: Irene, 
      bio: 'Ma. Irene N. Quilantang is currently a Master of Science in Global Public Health student in the School of Public Health at Brown University. She is an Assistant Professor of Psychology and Behavioral Sciences at the University of the Philippines – Manila. She received her Master of Arts in Psychology degree from the University of the Philippines – Diliman, and received training as a National Institutes of Health (NIH) Fogarty Fellow at Brown University. Her research focus is on developing an intervention program that will increase linkage to care among people living with HIV through addressing concerns resulting from their experience of adverse events in childhood. Her broad research interests include HIV, violence against children, behavior change, and mental health. ', 
      mail: '', 
      linkedIn: '' 
  },
  { 
      name: 'John Guigayoma', 
      pic: John, 
      bio: 'John Guigayoma is a doctoral student in Behavioral and Social Health Sciences at the Brown University School of Public Health. He currently has a master in public health in Health and Social Behavior from the University of California, Berkeley. His research interests include HIV health disparities among sexual and gender minorities and underrepresented racial and ethnic populations, including Filipinos and Filipino-Americans. Before PHIRST, John was a program manager at an Asian-American HIV organization in San Francisco overseeing HIV prevention and care programs. He also worked as a research associate in HIV surveillance at the San Francisco Department of Public Health. When he is not studying, John enjoys visiting his friends and family back in Southern California.', 
      mail: '', 
      linkedIn: '' 
  },
  { 
      name: 'Maylin C. Palatino', 
      pic: Maylin, 
      bio: 'Maylin C. Palatino is an Assistant Professor at the Department of Epidemiology and Biostatistics at the College of Public Health, University of the Philippines Manila. She is currently taking ScM Biostatistics at the School of Public Health, Brown University.  She has been involved in researches and projects on HIV, tobacco and poverty in the Philippines, maternal health, and noncommunicable diseases.  She likewise provides technical assistance in various researches and clinical trials.  She has also served as resource person in various training courses in Biostatistics, health research methods, and health leadership and governance.  ', 
      mail: '', 
      linkedIn: '' 
  },
  { 
      name: 'Olivia Sison', 
      pic: Olivia, 
      bio: 'Olivia Sison is a Research Assistant Professor at the Institute of Clinical Epidemiology, National Institutes of Health, University of the Philippines Manila. She also serves as a Clinical Assistant Professor at the Department of Clinical Epidemiology, UP College of Medicine. She received her Master of Science in Public Health (Biostatistics) from the University of the Philippines Manila. She is currently a ScM Epidemiology student at the School of Public Health, Brown University. She has more than 15 years of experience in data management and analysis. Her research interests include neglected tropical diseases, cardiovascular disease and infectious disease epidemiology. ', 
      mail: '', 
      linkedIn: '' 
  }
]

const MemberRow = props => {
  return (
    <div className="icon-row">
      <div className="member-container">
        <div className="member-circle">
          <div
            className="member-frame"
            style={{ backgroundImage: `url(${props.pic})` }}
          ></div>
        </div>
      </div>
      <div className="bio-container">
        <h1>{props.name}</h1>
        <p className="medium-spacing">
            {props.bio}
        </p>
        <div className="social-row">
          <img
            alt="email"
            src={require('./images/mail-icon.png')}
            className="social-icon"
          />

          <img
            alt="email"
            src={require('./images/linkedin-icon.png')}
            className="social-icon"
          />
        </div>
      </div>
    </div>
  )
}

class TeamPage extends Component {
  render() {
    return (
      <div>
        <div className="navbar-buffer" />
        <section className="curved-bottom initiatives-section half-split">
          <div className="container">
            <div className="text-block">
              <h1>Meet Our Team</h1>
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
        <section className="white-body team-container">
          <div className="container">
            {members.map(member => (
              <MemberRow
                name={member.name}
                pic={member.pic}
                bio={member.bio}
                linkedIn={member.linkedIn}
                mail={member.mail}
              />
            ))}
          </div>
        </section>
      </div>
    )
  }
}

export default TeamPage
