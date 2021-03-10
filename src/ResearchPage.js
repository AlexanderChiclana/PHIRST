import React, { Component } from 'react'
import axios from 'axios'

const localData = {
  publications: [
    {
      year: 2014,
      title: "“Can I Ever Retire? Making a Case for the “Retireable Wage” of Immigrant Filipino Caregivers in Los Angeles. ",
      authors: 'Nazareno, J., Parreñas, R., Fan, Y.K.',
      url: 'https://irle.ucla.edu/old/publications/documents/CanIEverRetirePolicyReportIRLE.pdf',
      journal: 'Institute for Research on Labor and Employment (IRLE), University of California, Los Angeles.  Report to the Pilipino Workers Center (PWC), Los Angeles.'
    },
    {
      year: 2018,
      title: 'Global dynamics of immigrant entrepreneurship: Changing trends, ethnonational variations, and reconceptualizations ',
      authors: 'Jennifer Nazareno, Min Zhou, Tianlong You',
      url:'https://www.researchgate.net/profile/Min_Zhou3/publication/327094154_Global_dynamics_of_immigrant_entrepreneurship_Changing_trends_ethnonational_variations_and_reconceptualizations/links/5c9cd39945851506d7305911/Global-dynamics-of-immigrant-entrepreneurship-Changing-trends-ethnonational-variations-and-reconceptualizations.pdf',
      journal:'International Journal of Entrepreneurial Behavior & Research'
    },
    {
      year: 2020,
      title:
        'Sword and Shield: Perceptions of law in empowering and protecting HIV-positive men who have sex with men in Manila, Philippines.',
      authors:
        'Adia, A. C., Restar, A. J., Lee, C. J., Payawal, M. P., Quilantang, M. I., Nazareno, J., & Operario, D.',
      url: 
        'https://pubmed.ncbi.nlm.nih.gov/31134838/?from_term=alexander+adia&from_page=2&from_pos=3',
      journal: 'Global public health, 15(1), 52–63.'
    },
    {
      year: 2020,
      title:
        'Health Conditions, Outcomes, and Service Access Among Filipino, Vietnamese, Chinese, Japanese, and Korean Adults in California, 2011-2017',
      authors: 'Adia AC, Nazareno J, Operario D, Ponce NA.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/32078359/?from_term=alexander+adia&from_page=2&from_pos=2',
      journal:
        'Am J Public Health. 2020;110(4):520‐526. doi:10.2105/AJPH.2019.305523'
    },
    {
      year: 2020,
      title:
        'Barriers and facilitators to uptake of condoms among Filipinx transgender women and cisgender men who have sex with men: A situated socio-ecological perspective',
      authors:
        'Restar, A. J., Adia, A., Nazareno, J., Hernandez, L., Sandfort, T., Lurie, M., Cu-Uvin, S., & Operario, D.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/31630622/?from_term=arjee+restar&from_page=3&from_pos=5',
      journal: 'Global public health, 15(4), 520–531.'
    },
    {
      year: 2020,
      title:
        'Reimagining the Future of HIV Service Implementation in the Philippines Based on Lessons from COVID-19.',
      authors: 'Quilantang, M., Bermudez, A., & Operario, D.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/32451938/?from_term=don+operario+philippines&from_filter=ds1.y_10&from_pos=7',
      journal: 'AIDS and behavior, 1–3. Advance online publication.'
    },
    {
      year: 2019,
      title:
        'Prioritizing HIV Services for Transgender Women and Men Who Have Sex With Men in Manila, Philippines: An Opportunity for HIV Provider Interventions.',
      authors:
        'Restar, A. J., Chan, R., Adia, A., Quilantang, M. I., Nazareno, J., Hernandez, L., Cu-Uvin, S., & Operario, D.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/31592803/?from_term=arjee+restar&from_page=2&from_pos=3',
      journal:
        'The Journal of the Association of Nurses in AIDS Care : JANAC, 10.1097/JNC.0000000000000131. Advance online publication.'
    },
    {
      year: 2019,
      title:
        'Collective Coping Strategies for HIV-Related Challenges Among Men Who Have Sex With Men in Manila, Philippines.',
      authors: 'Adia AC, Ng MJ, Quilantang MI, et al. ',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/31550192/?from_term=alexander+adia&from_pos=10',
      journal:
        'AIDS Educ Prev. 2019;31(5):479‐490. doi:10.1521/aeap.2019.31.5.479'
    },
    {
      year: 2019,
      title:
        'Collective Coping Strategies for HIV-Related Challenges Among Men Who Have Sex With Men in Manila, Philippines.',
      authors:
        'Adia, A. C., Ng, M. J., Quilantang, M. I., Restar, A. J., Hernandez, L. I., Imperial, R. H., Nazareno, J., & Operario, D. (2019).',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/31550192/?from_term=arjee+restar&from_pos=10',
      journal:
        'AIDS education and prevention : official publication of the International Society for AIDS Education, 31(5), 479–490.'
    },
    {
      year: 2019,
      title:
        'Gender affirmative HIV care framework: Decisions on feminizing hormone therapy (FHT) and antiretroviral therapy (ART) among transgender women.',
      authors:
        'Restar, A. J., Santamaria, E. K., Adia, A., Nazareno, J., Chan, R., Lurie, M., Sandfort, T., Hernandez, L., Cu-Uvin, S., & Operario, D.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/31634378/?from_term=arjee+restar&from_pos=2',
      journal: 'PloS one, 14(10), e0224133.'
    },
    {
      year: 2019,
      title: 'The missing trans women of science, medicine, and global health.',
      authors: 'Restar AJ, Operario D.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/30739673/?from_term=arjee+restar&from_pos=3',
      journal:
        'Lancet. 2019;393(10171):506‐508. doi:10.1016/S0140-6736(18)32423-1'
    },
    {
      year: 2018,
      title:
        '"An Evil Lurking Behind You": Drivers, Experiences, and Consequences of HIV-Related Stigma Among Men Who Have Sex With Men With HIV in Manila, Philippines.',
      authors:
        'Adia, A. C., Bermudez, A., Callahan, M. W., Hernandez, L. I., Imperial, R. H., & Operario, D.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/30148671/?from_term=alexander+adia&from_pos=7',
      journal:
        'AIDS education and prevention : official publication of the International Society for AIDS Education, 30(4), 322–334.'
    },
    {
      year: 2018,
      title:
        'Welfare State Replacements: Deinstitutionalization, Privatization and the Outsourcing to Immigrant Women Enterprise.',
      authors: 'Nazareno J.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/?term=jennifer+nazareno&filter=ds1.y_10',
      journal:
        'International journal of health services : planning, administration, evaluation, 48(2), 247–266.'
    },
    {
      year: 2018,
      title:
        'Trends and emerging directions in HIV risk and prevention research in the Philippines: A systematic review of the literature.',
      authors:
        'Restar, A., Nguyen, M., Nguyen, K., Adia, A., Nazareno, J., Yoshioka, E., Hernandez, L., & Operario, D.',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/30517178/?from_term=arjee+restar&from_pos=7',
      journal: 'PloS one, 13(12), e0207663. '
    },
    {
      year: 2016,
      title:
        '24-hour care: Work and sleep conditions of migrant Filipino live-in caregivers in Los Angeles.',
      authors: 'Riley, K., Nazareno, J., & Malish, S. (2016).',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/27747910/?from_term=jennifer+nazareno&from_filter=ds1.y_10&from_pos=8',
      journal: 'American journal of industrial medicine, 59(12), 1120–1129.'
    }
  ]
}

const Publication = props => {
  const { year, title, authors, url, journal } = props
  return (
    <div className="pub-row">
      <div className="pub-year">
        <div className="year-dot">
          <h4>{year}</h4>
        </div>
      </div>

      <div className="pub-content">
        <h4>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>

        <p>
          {authors}

          <br />
          <i>{journal}</i>
        </p>
      </div>
    </div>
  )
}

class ResearchPage extends Component {

  state = {
    publications: []
  }

  getPublications = () => {
    axios.get('https://cdn.contentful.com/spaces/fxjn6hn7ptqk/environments/master/entries?access_token=7Cp2qRcbgPNokFoPZjpxbZKyYewJdeCypE94i6Lm71Q&content_type=publication&order=-fields.year').then((res) => {
      console.log(res)
      this.setState({
        publications: res.data.items
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  
  componentDidMount(){
    this.getPublications()
  }

  render() {
    return (
      <div>
        <div className="navbar-buffer" />
        <section className="curved-bottom initiatives-section half-split">
          <div className="container">
            <div className="text-block">
              <h1>Our Research</h1>
              <p>
                Our work in the Philippines mostly focuses on HIV and key
                impacted communities like transgender women, cisgender men who
                have sex with men, and young adults, while our work among
                Filipino Americans mostly focuses on chronic health conditions. PHIRST
                research has been presented and recognized with awards at
                national and international conferences, including the APHA
                Annual Meeting and International AIDS Conference, and published
                in academic journals, including AJPH, Global Public Health, and
                PloS one.
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
                alt="research icon"
                className="fade-in"
                src={require('./images/business-and-finance.png')}
                style={{ height: '60%' }}
              ></img>
            </div>
          </div>
        </section>
        <section className="white-body">
          <div className="container">
            <div className="body-heading">
              <h1>Publications</h1>
            </div>
            <div className="pub-list">  
            {this.state.publications.map((publication, index) => (
              <Publication {...publication.fields} key={index} />
            ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ResearchPage
