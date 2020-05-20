import React, { useState } from 'react';
import './Timeline.scss'


const MenteeList = [
    {
      "name": "Victoria Ching",
      "credentials": "BSN, MPM",
      "startYear": 1994,
      "endYear": 1994,
      "researchArea": "Nurses caring for HIV/AIDS patients",
      "currentPosition": "Manager, Patient Safety Department Quality Improvement and Safety Division, The Medical City"
    },
    {
      "name": "Laufred Hernandez",
      "credentials": "MA",
      "startYear": 1994,
      "endYear": 1994,
      "researchArea": "Masculinities and HIV/AIDS vulnerability among male sex workers in the Philippines",
      "currentPosition": "Associate Professor of Medical Anthropology, University of Philippines Manila"
    },
    {
      "name": "Josephine Hilario",
      "credentials": "BSN",
      "startYear": 1994,
      "endYear": 1994,
      "researchArea": "Knowledge, attitudes, beliefs, among health care workers in the care of HIV/AIDS patients",
      "currentPosition": "Private practice"
    },
    {
      "name": "Noel Juban",
      "credentials": "MD",
      "startYear": 1994,
      "endYear": 1994,
      "researchArea": "Counseling intervention to improve HIV knowledge, attitudes, and practices among Filipina commercial sex workers",
      "currentPosition": "Professor of Community Medicine, Department of Clinical Epidemiology, College of Medicine University of the Philippines Manila"
    },
    {
      "name": "Manuel Reyes",
      "credentials": "MD",
      "startYear": 1994,
      "endYear": 1994,
      "researchArea": "Epidemiology of HIV/AIDS",
      "currentPosition": "(deceased)"
    },
    {
      "name": "Fe Ricon",
      "credentials": "PhD",
      "startYear": 1994,
      "endYear": 1994,
      "researchArea": "Values, knowledge, and perceptions toward HIV and sex behaviors among Filipina college women",
      "currentPosition": "Professor of Psychology and Education, Palawan State University, Philippines"
    },
    {
      "name": "Josefina Tayag",
      "credentials": "PhD",
      "startYear": 1994,
      "endYear": 1994,
      "researchArea": "Best practices in HIV/AIDS prevention in selected sentinel sites in the Philippines",
      "currentPosition": "Former Vice-Chancellor for Academic Affairs, University of Philippines Manila"
    },
    {
      "name": "Jordor Lim",
      "credentials": "MD",
      "startYear": 1996,
      "endYear": 1996,
      "researchArea": "Prevalence of HIV-1 among STD clinic patients in Metro Manila, Philippines",
      "currentPosition": "Chair, Infection Control, Memorial Medical Centre- Philippine General Hospital"
    },
    {
      "name": "Liza Gonzales",
      "credentials": "MD",
      "startYear": 1997,
      "endYear": 1997,
      "researchArea": "Prevalence of HIV among pregnant women at the Philippine General Hospital",
      "currentPosition": "General Hospital, University of the Philippines Manila"
    },
    {
      "name": "Julius Hafalla",
      "credentials": "PhD",
      "startYear": 1997,
      "endYear": 1998,
      "researchArea": "Genetic diversity of HIV-1 isolates from the Philippines",
      "currentPosition": "Associate Professor of Immunology and Royal Society University Research Fellow, London School of Hygiene and Tropical Medicine"
    },
    {
      "name": "Guadalupe Natividad-Villanueva",
      "credentials": "MD",
      "startYear": 1997,
      "endYear": 1997,
      "researchArea": "HIV in plasma and cervicovaginal secretion in Filipino women",
      "currentPosition": "Physician, Hospital and Medical Centre,�Muntinlupa, Philippines"
    },
    {
      "name": "Nymia Pimentel-Simbulan",
      "credentials": "DrPH",
      "startYear": 1997,
      "endYear": 1998,
      "researchArea": "Risk behaviors and prevalence of HIV/STDs among women prisoners in Metro Manila",
      "currentPosition": "Professor of Sociology and Public Health, Vice Chancellor for Academic Affairs, University of the Philippines Manila"
    },
    {
      "name": "Erlinda Samonte",
      "credentials": "EdD",
      "startYear": 1997,
      "endYear": 1998,
      "researchArea": "Process and outcome evaluation of HIV prevention and education program",
      "currentPosition": "Psychological counselor in private practice"
    },
    {
      "name": "Mario Santiago",
      "credentials": "PhD",
      "startYear": 1997,
      "endYear": 1998,
      "researchArea": "Genetic diversity of HIV-1 isolates from the Philippines",
      "currentPosition": "Associate Professor of Medicine, University of Colorado Denver"
    },
    {
      "name": "Grace Katherine Juliano",
      "credentials": "MD",
      "startYear": 1998,
      "endYear": 1999,
      "researchArea": "Cervical dysplasia among HIV-seropositive and HIV-seronegative women",
      "currentPosition": "Assistant Professor, Dept of OB-GYN, University of the Philippines Manila"
    },
    {
      "name": "Dorothy Agdamag",
      "credentials": "MD",
      "startYear": 2001,
      "endYear": 2001,
      "researchArea": "HIV viral load assays using NASBA for blood and genital tract secretions",
      "currentPosition": "Private practice"
    },
    {
      "name": "Concepcion Fajardo Ang",
      "credentials": "RMT",
      "startYear": 2003,
      "endYear": 2003,
      "researchArea": "TB testing and HIV counseling strategies",
      "currentPosition": "Medical Technologist, Medical Research Laboratory, Philippine"
    },
    {
      "name": "Jaime Montoya",
      "credentials": "MD, MSc, PhD",
      "startYear": 2003,
      "endYear": 2003,
      "researchArea": "Molecular epidemiological analysis of tuberculosis among Filipino HIV patients",
      "currentPosition": "Professor of Infectious Diseases, Philippine General Hospital, University of the Philippines Manila and Executive Director, Philippine Department of Sciences and Technology � Philippine Council for Health Research and Development (DOST-PCHRD), Republic of the Philippines"
    },
    {
      "name": "Reynaldo Imperial",
      "credentials": "PhD",
      "startYear": 2004,
      "endYear": 2004,
      "researchArea": "Principles of HIV/STD research, study design, and epidemiology",
      "currentPosition": "Professor of Health and Social Sciences, University of the Philippines Manila"
    },
    {
      "name": "Angelina Mirasol",
      "credentials": "MD",
      "startYear": 2004,
      "endYear": 2004,
      "researchArea": "Blood banking and infectious disease markers in blood donation",
      "currentPosition": "Assistant Professor of Hematology, Philippine General Hospital, University of the Philippines Manila"
    },
    {
      "name": "Edelwisa Segurbre Mercado",
      "credentials": "MS",
      "startYear": 2006,
      "endYear": 2006,
      "researchArea": "Research techniques in HIV drug resistance and genotyping",
      "currentPosition": "Head of the Molecular Biology Laboratory, Research Institute for Tropical Medicine, Manila"
    }
  ]

const Mentee = (props) => {
    const { name, credentials, startYear, endYear, researchArea, currentPosition } = props
    
    const initials = () => {
        const nameArr = name.split(' ')
        return nameArr[0].charAt(0) + nameArr[nameArr.length - 1].charAt(0)
    }

    return ( 
        <div className="timeline">
        <span className="timeline-icon"></span>
        <div className="timeline-content">
            <h3 className="title">{name} {credentials}</h3>
            <p className="description">
            <span style={{fontWeight: 'bold'}}>Current Position - </span> {currentPosition}
                <br />
                <br />
               <span style={{fontWeight: 'bold'}}>Research - </span> {researchArea}
            </p>
        </div>
        <div className="icon">
            {/* <i className="fa fa-globe"></i> */}
                {/* <i> AC</i> */}
                <span className='initial'>
                        { 
                            initials()
                        }
                </span>
            <span className="year">{startYear === endYear ? startYear : `${startYear} - ${endYear}`}</span>
        </div>
    </div>
     );
}
 

const Timeline = () => {

    const [visibleMentees, expandTimeline] = useState(4)

    
        return (
            <div className="container">
            
            <div className="row  timeline-container">
                <div className="col-md-12">
          
                    <div className="main-timeline">
                
                    {   MenteeList.map(member => (<Mentee {...member}/>))}
                  
                    </div>
                </div>
            
            </div>

        </div>
        );
}

export default Timeline;