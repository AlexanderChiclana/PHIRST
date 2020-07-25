import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import MailIcon from '../src/images/mail-icon.png'
import LinkedinIcon from '../src/images/linkedin-icon.png'

import John from './images/Guigayoma-square.jpg'
import Amiel from './images/ACBermudez.png'
import Irene from './images/Quilantang.jpg'
import Olivia from './images/olivia.png'
import Maylin from './images/Maylin.jpg'
import Arjee from './images/arjee.jpg'
import Alexander from './images/Alexander.JPG'
import Jen from './images/Jennifer-Nazareno.jpg'
import Don from './images/Don-Operario.jpg'
import Susan from './images/susan.jpg'
import Maria from './images/Maria.jpg'
import Emily from './images/Emily.jpg'

const members = [
  {
    name: 'Don Operario',
    pic: Don,
    bio:
      'Don Operario is Professor of Public Health in the Department of Behavior and Social Sciences in the School of Public Health. He was trained as a Social and Health Psychologist (BA, UCLA; MS, PhD, UMass Amherst; Postdoctoral Fellow, UC San Francisco). He was previously on the faculty of the University of Oxford (Department of Social Policy and Social Work) and before that was at the University of California San Francisco (Center for AIDS Prevention Studies - Department of Medicine). His research addresses two inter-related areas. The first general area concerns the social psychological determinants of HIV, sexual health, and related health issues (substance use, mental health) in diverse communities, with an emphasis on developing and evaluating theory-based social and behavioral interventions for members of high-risk groups. A second research area concerns the lived experiences associated with social inequality, with an emphasis on understanding the perspectives of disadvantaged group members and addressing associated health and psychosocial disparities. He conducts research addressing both U.S. domestic and international public health issues.',
    mail: 'don_operario@brown.edu',
    linkedIn: 'https://www.linkedin.com/in/don-operario-58067b12a/',
    brown: 'https://vivo.brown.edu/display/doperari'
  },
  {
    name: 'Susan Cu-Uvin',
    pic: Susan,
    bio:
      "Dr. Susan Cu-Uvin is Professor of Obstetrics and Gynecology and Medicine at the Alpert School of Medicine, Brown University and Professor of Health Services, Policy and Practice at the School of Public Health.  She is the Director of the Brown Global Health Initiative and the Principal Investigator of the Brown/Tufts AIDS International Training Research Program. She is the director of the Providence/Boston Center for AIDS Research (CFAR). She had been NIH funded since 1996 and the Principal Investigator of several RO1s to assess HIV dynamics in the female genital tract. She was a co-investigator of the CDC funded study to understand the natural history of HIV in women (HERS) and the study to understand the natural history of HIV and AIDS in the era of highly active antiretroviral therapy (SUN). She had a K24 Mid-Career Investigator Award in Patient Oriented Research which allowed her to mentor several junior investigators locally as well as internationally.  She has been a co-investigator in studies related to mucosal immunity, microbicides, STI's  and immune reconstitution in the female genital tract. She is a member of the Public Health Service Task Force/Perinatal Antiretroviral Guidelines Working Group, Office of AIDS Research Advisory Council and the NIH advisory committee on HIV related research in women and girls. She is a member of the NIH advisory committee on HIV related research in microbicides and chairs the HPV Working Group, USPHS/IDSA Guidelines for the Prevention and Treatment of Opportunistic Infections. She was the recipient of  the Constance B. Wofsy Women’s Health Investigator Award from the AIDS Clinical Trials Group.  She is a memvber of the Adult / Adolescent HIV Guidelines and the CDC STD Treatment Guidelines.",
    mail: 'susan_uvin@brown.edu',
    linkedIn: 'https://www.linkedin.com/in/cu-uvin-susan-48510228/',
    brown: 'https://vivo.brown.edu/display/suvinmd',
    gScholar: 'https://scholar.google.com/citations?user=r80atv8AAAAJ&hl=en'
  },
  {
    name: 'Jennifer Nazareno',
    pic: Jen,
    bio:
      'Jennifer Nazareno, Ph.D. is an Assistant Professor of Public Health & Entrepreneurship. She has a dual appointment in the Dept. of Behavioral & Social Sciences in the School of Public Health (SPH) and the Nelson Center for Entrepreneurship. Jennifer’s specialty areas include medical sociology and health; qualitative methodology; women’s migration, labor and entrepreneurship. Jennifer is currently completing her book manuscript, Hidden Health Care: Immigrant Filipina Nurses Building Businesses in the Shadows of the U.S. Long-Term Care Industry. It’s the first book to examine the emergence of immigrant Filipino women entrepreneurs in the United States starting as early as the 1970’s. Her paper, “Welfare State Replacements: Deinstitutionalization, Privatization and the Outsourcing to Immigrant Women Enterprise,” won the 2020 Best Article Award from the Association for Asian American Studies, Filipino Studies Section.  Jennifer’s peer-reviewed publications can be found in the International Journal of Health Services; Social Science & Medicine; American Journal of Industrial Medicine; Medical Care; International Journal of Entrepreneurial Behavior & Research; Aging & Society; and American Journal of Public Health. Jennifer was the 2019 & 2020 recipient of the prestigious Dean’s Award for Excellence in Teaching. She is the first faculty member at SPH to win this award in consecutive years. She was also the recipient of other coveted awards including the 2020 Barrett Hazeltine Mentorship Award in Entrepreneurship and the 2020 Alpert School of Medicine PC+PM Research Mentorship Award. She currently teaches PHP 1680U Intersectionality and Health Inequities and UNIV 1089 Global Dynamics and Critical Perspectives on Immigrant Entrepreneurship in the United States.',
    mail: 'jennifer_nazareno@brown.edu',
    linkedIn: '',
    brown: 'https://vivo.brown.edu/display/jnazaren'
  },
  {
    name: 'Alexander Adia',
    pic: Alexander,
    bio:
      "Alexander Adia (he/him) is a co-founder of PHIRST and is currently an affiliated researcher based out of New York, NY. His research in the Philippines focuses on the intersection of HIV, law, and policy, while his research among Filipino Americans focuses on health policy, data aggregation, and health services. His work affiliated with PHIRST has received recognition from Brown Graduate School and the APHA's Asian & Pacific Islander Caucus. He is pictured here at Sirao Flower Garden in Cebu.",
    mail: 'alexander_adia@alumni.brown.edu',
    linkedIn: 'https://www.linkedin.com/in/alexander-adia-109342a8/',
    gScholar: 'https://scholar.google.com/citations?user=c9uHL7UAAAAJ&hl=en'
  },
  {
    name: 'Amiel Nazer Consigna Bermudez',
    pic: Amiel,
    bio:
      'Amiel Nazer C. Bermudez is a PhD student in epidemiology at the Department of Epidemiology, School of Public Health, Brown University. He is also a faculty member (on leave) at the Department of Epidemiology and Biostatistics, College of Public Health, University of the Philippines Manila (UP Manila). He obtained his Doctor of Medicine degree in 2009 from the College of Medicine of UP Manila under the Integrated Liberal Arts and Medicine Program (INTARMED). In 2014, he completed his Master of Public Health degree from the College of Public Health of UP Manila. Prior to coming to Brown for his doctoral studies, Amiel has undertaken research projects funded by the Department of Health (Philippines); World Health Organization (WHO); United Nations Children’s Fund (UNICEF); Asian Development Bank (ADB); Health Futures Foundation, Inc. (HFI); Philippine Business for Social Progress, Inc. (PBSP); and Johnson and Johnson’s Philippines, among others. His research interests include HIV–AIDS, communicable diseases, maternal health, intimate partner violence, child health, tobacco control, systematic reviews and meta-analysis of clinical interventions, and clinical practice guideline development. Currently, his research focuses on determinants of HIV risk in Filipino men who have sex with men and Filipina transgender women, as well as strategies to increase engagement of vulnerable persons in the HIV care continuum.',
    mail: 'amiel_nazer_bermudez@brown.edu',
    linkedIn: 'https://www.linkedin.com/in/acbermudez/'
  },
  {
    name: 'Arjee Restar',
    pic: Arjee,
    bio:
      'Arjee is a trans Filipina doctoral candidate in the Behavioral and Social Sciences Department. Her research engagements center on promoting structural and social-based interventions to improve the health of Filipinx transgender communities affected by a multitude of adverse health outcomes, such as HIV/AIDS, substance use, and negative mental health. This work includes advocating for institutional policies and practices support health equity.',
    mail: 'arjee_restar@brown.edu',
    linkedIn: 'https://www.linkedin.com/in/arjeerestar/',
    gScholar: 'https://scholar.google.com/citations?user=oPWDJngAAAAJ&hl=en'
  },
  {
    name: 'Emily Yoshioka',
    bio:
      'Emily Yoshioka is an affiliated researcher based in Seattle, Washington. She currently holds a master of public health in Health Behavior and undergraduate degrees in public health and ethnic studies from Brown University. Overall, her broad interests are in promoting health equity across race, ethnicity, gender, and sexuality, particularly in regards to sexual and mental health outcomes. She works to address complex, socially relevant issues with social justice and public health lenses. ',
    pic: Emily,
    mail: 'emily_yoshioka@brown.edu',
    linkedIn: 'https://www.linkedin.com/in/emily-yoshioka/'
  },
  {
    name: 'Irene N. Quilantang',
    pic: Irene,
    bio:
      'Ma. Irene N. Quilantang is currently a Master of Science in Global Public Health student in the School of Public Health at Brown University. She is an Assistant Professor of Psychology and Behavioral Sciences at the University of the Philippines – Manila. She received her Master of Arts in Psychology degree from the University of the Philippines – Diliman, and received training as a National Institutes of Health (NIH) Fogarty Fellow at Brown University. Her research focus is on developing an intervention program that will increase linkage to care among people living with HIV through addressing concerns resulting from their experience of adverse events in childhood. Her broad research interests include HIV, violence against children, behavior change, and mental health. ',
    mail: 'irene_quilantang1@brown.edu',
    linkedIn: 'https://www.linkedin.com/in/ma-irene-quilantang-9776a8167/',
    brown: 'https://www.brown.edu/academics/public-health/content/quilantang'
  },
  {
    name: 'John Guigayoma',
    pic: John,
    bio:
      'John Guigayoma is a doctoral student in Behavioral and Social Health Sciences at the Brown University School of Public Health. He currently has a master in public health in Health and Social Behavior from the University of California, Berkeley. His research interests include HIV health disparities among sexual and gender minorities and underrepresented racial and ethnic populations, including Filipinos and Filipino-Americans. Before PHIRST, John was a program manager at an Asian-American HIV organization in San Francisco overseeing HIV prevention and care programs. He also worked as a research associate in HIV surveillance at the San Francisco Department of Public Health. When he is not studying, John enjoys visiting his friends and family back in Southern California.',
    mail: 'john_guigayoma@brown.edu',
    linkedIn: ''
  },
  {
    name: 'Maria Isabel Diaz',
    pic: Maria,
    bio:
      "Maria Isabel Diaz is a Masters student in Global Public Health in the School of Public Health at Brown University. She is a Brown University alumna with a Bachelor's degree in Neuroscience. Her research interests include the social determinants of substance use and recovery in Filipinx/Filipinx-Americans in both the Philippines and the United States.",
    mail: 'maria_isabel_diaz@brown.edu',
    linkedIn: 'https://www.linkedin.com/in/maria-isabel-diaz-7284509b/'
  },
  {
    name: 'Maylin C. Palatino',
    pic: Maylin,
    bio:
      'Maylin C. Palatino is an Assistant Professor at the Department of Epidemiology and Biostatistics at the College of Public Health, University of the Philippines Manila. She is currently taking ScM Biostatistics at the School of Public Health, Brown University.  She has been involved in researches and projects on HIV, tobacco and poverty in the Philippines, maternal health, and noncommunicable diseases.  She likewise provides technical assistance in various researches and clinical trials.  She has also served as resource person in various training courses in Biostatistics, health research methods, and health leadership and governance.  ',
    mail: 'maylin_palatino@brown.edu',
    linkedIn: '',
    gScholar: 'https://scholar.google.com.ph/citations?user=-3qjr8QAAAAJ&hl=en'
  },
  {
    name: 'Olivia Sison',
    pic: Olivia,
    bio:
      'Olivia Sison is a Research Assistant Professor at the Institute of Clinical Epidemiology, National Institutes of Health, University of the Philippines Manila. She also serves as a Clinical Assistant Professor at the Department of Clinical Epidemiology, UP College of Medicine. She received her Master of Science in Public Health (Biostatistics) from the University of the Philippines Manila. She is currently a ScM Epidemiology student at the School of Public Health, Brown University. She has more than 15 years of experience in data management and analysis. Her research interests include neglected tropical diseases, cardiovascular disease and infectious disease epidemiology. ',
    mail: 'olivia_sison@brown.edu',
    linkedIn: 'https://www.linkedin.com/in/olivia-sison-7b826b49/',
    gScholar: 'https://scholar.google.com.ph/citations?user=DdeSBikT1tsC&hl=en'
  }
]

const MemberRow = props => {
  const [isOpen, toggleOpen] = useState(false)

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
          {isOpen ? props.bio : props.bio.substring(0, 600) + ' '}

          {props.bio.length > 500 && !isOpen && (
            <span
              className="read-more"
              onClick={() => toggleOpen(prevOpen => !prevOpen)}
            >
              ... Read More
            </span>
          )}
        </p>
        <div className="social-row">
          <a href={`mailto:${props.mail}`}>
            <img
              alt={`email ${props.name}`}
              title={`Email ${props.name}`}
              src={require('./images/mail-icon.png')}
              className="social-icon"
            />
          </a>

          {props.gScholar && (
            <a href={props.gScholar} rel="noreferrer noopener" target="_blank">
              <img
                alt={`google scholar`}
                title={`${props.name} Google Scholar`}
                src={require('./images/g-scholar.png')}
                className="social-icon"
              />
            </a>
          )}

          {props.linkedIn && (
            <a href={props.linkedIn} rel="noreferrer noopener" target="_blank">
              <img
                alt="linked in"
                src={require('./images/linkedin-icon.png')}
                className="social-icon"
              />
            </a>
          )}

          {props.brown && (
            <a href={props.brown} rel="noreferrer noopener" target="_blank">
              <img
                alt="brown profile"
                src={require('./images/brown_logo.png')}
                className="social-icon"
                style={{ width: 'auto' }}
              />
            </a>
          )}

          {props.rGate && (
            <a href={props.rGate} rel="noreferrer noopener" target="_blank">
              <img
                alt="research gate profile"
                src={require('./images/rg-logo.png')}
                className="social-icon"
                style={{ borderRadius: '50%' }}
              />
            </a>
          )}
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
                Founded in 2019, PHIRST is made up students and faculty at the
                School of Public Health, Brown University. Co-Founders include
                Dr. Don Operario, Dr. Susan Cu-Uvin, Dr. Jennifer Nazareno and
                Alex Adia, MPH. We collaborate and utilize a team-based approach
                to examining the health of people in the Philippines and
                Filipino Americans.
              </p>
              {/* <h3 className="link-arrow">NEXT 
              <img 
              alt='right arrow'
              src={require('./images/right-arrow.svg')}></img>
              </h3> */}
            </div>

            <div className="tablet-centered">
              <div
                className="circle light"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  alt="team"
                  src={require('./images/team.jpeg')}
                  style={{
                    height: '90%',
                    width: '90%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section className="white-body team-container">
          <div className="container">
            {members.map(member => (
              <MemberRow {...member} />
            ))}

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
              </Link>{' '}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default TeamPage
