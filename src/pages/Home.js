import React, { useRef } from 'react'
import styled from 'styled-components';
import { Container, Row, Col,} from "react-bootstrap"
import './Home.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";



const CyberHeading = styled.h1`
font-weight:bold;
font-size: 50px;
line-height: 60px;
font-family: 'Titillium Web', sans-serif;
color: white;
z-index: 10;

@media (max-width: 575px) {
  font-size: 30px;
  line-height: 35px;  
};    
    
@media (min-width: 768px) and (max-width: 991px) {
font-size: 25px;
line-height: 30px;  
} 

@media (min-width: 992px) and (max-width: 1199px) {
font-size: 30px;
line-height: 35px;  
}

`
const CyberLink = styled.a`
    background-color:#02ADEF;
    width: 250px;
    color:white;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 50px;
    border-radius: 5px;
    font-family: 'Jost*', sans-serif;
    cursor: pointer;
    &:hover{color:white;border: 2px solid #02ADEF}

@media (max-width: 575px) {
    width: 180px;
    font-size: 20px;
    height: 50px;
};

@media (min-width: 768px) and (max-width: 991px) {

}
@media (min-width: 992px) and (max-width: 1199px) {

}
`;

const DMcyberContainer = styled.div`
padding: 0 60px ;
margin-top: 200px;

@media (max-width: 575px) {
  padding: 0 15px;
  mask-type: 100px;
}


// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991px) {
  margin-top: 100px;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199px) {
  margin-top: 200px;
   
}
`
const DmCyber = styled.span`
color:#3ED5DD;`

const DmCyberSpan = styled.span`
color:#3ED5DD;
font-size: 21px;
font-family: 'Jost*', sans-serif;
font-weight: 500;
padding: 10px 0;
`
const CyberParagraph = styled.p`
color: white;
font-family: 'Jost*', sans-serif;
font-size: 18px;
padding: 20px 0;


@media (max-width: 575px) {
  padding: 2.5% 0;

}
@media (min-width: 768px) and (max-width: 991px) {
  padding: 3.5% 0;
  font-size: 14px;

}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199px) {
  padding: 2.5% 0;

}
`
const CyberFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 575px) {
};

@media (min-width: 768px) and (max-width: 991px) {
  padding: 3% 0;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199px) {
  padding: 2.4% 0;

}
`
const CardContent = styled.div`
  color: white;
 
  @media (min-width: 568px) and (max-width: 767px) {
  }
  /* @media (min-width: 992px) and (max-width: 1199px) {
    padding:10px 10px 15px 10px;
  }
  @media (min-width: 768px) and (max-width: 991px) {}
  padding:10px 10px 15px 10px;  */

`
const Cardheading = styled.h3`
  font-size: 19px;
  font-weight: bold;
  font-family: 'Jost*', sans-serif;
  padding: 10px 0;
 
  @media (min-width: 568px) and (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 991px) {}
  font-size : 14px;

`


gsap.registerPlugin(ScrollTrigger, useGSAP);

function Home1() {
  
  return <>
    <Col md={7} id='Cyber1' >
      <section  className="home-1" >
          <CyberHeading>
            Unlock Your Cybersecurity Potential with <DmCyber>DMcyber Solutions</DmCyber>  Accessible Learning for Everyone.
          </CyberHeading>
          <CyberParagraph>
            At DMcyber Solutions, we are dedicated to providing comprehensive cybersecurity education and awareness training for corporations. Our mission is to equip you with the skills and knowledge necessary to protect digital assets, defend against cyber threats, and build a secure online environment.
          </CyberParagraph>
          <CyberLink to="#">
            Contact Us
          </CyberLink>
      </section>
    </Col></>
}

function Home2 (){
  return<>
        <Col  md={5} id="Cyber2">
          <section  className='home-2'>
            <CyberFlex>
              <img src="../images/cyber.png" alt="cyber solutions" className='cyberimage'/>
            </CyberFlex>
          </section>
        </Col></>
}

function Home3() {
  return <>
      <Col md={6}>
        <section className='home-3' >
          <img src="../images/about.png" alt="cyber solutions" className='aboutcyber'/>
        </section>
      </Col>
</>
}

function Home4 (){
  return<>
        <Col md={6} >
          <section id='aboutdmcyber' className='home-4'>
            <DmCyberSpan>ABOUT US</DmCyberSpan>
              <CyberHeading>
                Empowering You to Secure the Digital World: <DmCyber>One Skill at a Time</DmCyber> 
              </CyberHeading> 
              <CyberParagraph>
                At DMcyber Solutions, our mission is to demystify the world of cybersecurity and make it accessible to everyone. We believe in empowering individuals and organizations with the knowledge and skills they need to safeguard their digital lives. Through our courses, hands-on training, and up-to-date resources, we strive to cultivate a community of cyber warriors ready to tackle the challenges of the digital age.
              </CyberParagraph>
              <CyberLink to="#">
                Start Training
              </CyberLink>
          </section>
        </Col></>
}

function Home5() {
  return <>
        <Col md={8} >
          <section  id='services' className='home-5'>
            <DmCyberSpan>FEATURE POINT</DmCyberSpan>
              <CyberHeading>
                 Our Services
              </CyberHeading> 
              <CyberParagraph id='aboutp'>
                 Protect your business from evolving cyber threats with our expert cybersecurity services.              
              </CyberParagraph>
          </section>
        </Col></>
}

function Home6 (){
  const itemList = [
    {
      imageUrl: "../images/Customize.png",
      altText: "Cyber solutions",
      description: "Cyber Security Awareness Training",
      topic: "Foundation of Cybersecurity",
      topic1: "Network Security",
      topic2: "Web Application Security",
      topic3: "Cyber Attacks",
      topic4: "Malware",
    },
  ]
  return(  
        <Col md={4} >
          <section className='home-6'>
          {itemList.map(({ imageUrl, altText, topic, description,topic1,topic2,topic3,topic4  }, i) => (
           <div className='aboutcard' key={i}>
              <img src={imageUrl} alt={altText} className="CardImage" />
              <CardContent className="CardContent">
                <Cardheading>{description}</Cardheading>
                <ul>
                  <li>{topic}</li>
                  <li>{topic1}</li>
                  <li>{topic2}</li>
                  <li>{topic3}</li>
                  <li>{topic4}</li>
                </ul>
              </CardContent>
           </div>  
    ))}
          </section>
        </Col>)
}

function Home7 (){
  const itemList = [
    {
      imageUrl: "../images/Training.png",
      altText: "Generalized Security Consulting",
      description: "Generalized Security Consulting",
      topic: "Security Assessment",
      topic1: "Security Strategy Development",
      topic2: "Incident Response and Disaster Recovery",
      topic3: "Compliance and Governance",
      topic4: "Ongoing Support and Optimization",
    },
    {
      imageUrl: "../images/Threat.png",
      altText: "Cyber solutions",
      description: "Penetration Testing",
      topic: "Scoping and Planning",
      topic1: "Information Gathering and Reconnaissance",
      topic2: "Vulnerability Identification and Assessment",
      topic3: "Reporting and Remediation",
      topic4: "Validation and Follow-up",
    },
    {
      imageUrl: "../images/Server.png",
      altText: "Cyber solutions",
      description: "Ransomware Mitigation and Protection",
      topic: "Prevention and Risk Reduction",
      topic1: "Backup and Recovery",
      topic2: "Network Segmentation and Isolation",
      topic3: "Incident Response and Preparedness",
      topic4: "Insurance and Regulatory Compliance",
    },
  ]

  return<>
        {itemList.map(({ imageUrl, altText, topic, description,topic1,topic2,topic3,topic4  }, i) => (
        <Col md={4} id="cybercards" className='home-7'>
           <div className='aboutcard' key={i}>
              <img src={imageUrl} alt={altText} className="CardImage" />
              <CardContent className="CardContent">
                <Cardheading>{description}</Cardheading>
                <ul>
                  <li>{topic}</li>
                  <li>{topic1}</li>
                  <li>{topic2}</li>
                  <li>{topic3}</li>
                  <li>{topic4}</li>
                </ul>
              </CardContent>
           </div>  
        </Col>
        ))}
  </>
}
function Home() {
  const containerRef = useRef();

  useGSAP(() => {

    

    gsap.from(".home-1",{
    y: -50,
    opacity: 0,
    duration: 0.7,
      
    })
    gsap.from(".home-2",{
      y: -50,
      opacity: 0,
      duration: 0.7,
      delay: 0.4,
      
    })

    const sections = [
      ".home-3", ".home-4", 
      ".home-5", ".home-6", "#.home-7"
    ];

    sections.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50, // Unified direction for simpler animation
        scrollTrigger: {
          trigger: section,
          start: "top 50%", // Start animation when the top of the section is 90% from the top of the viewport
          end: "top 50%", // End animation when the top of the section is 60% from the top of the viewport
          scrub: 1, // Smooth scrubbing effect
          toggleActions: "play none none reverse",
          markers: false,
          onEnter: (self) => {
            // Ensure the animation completes even if scrolled past quickly
            self.animation.progress(1);
          },
        }
      });
    });
  }, { scope: containerRef });

  

  return (
    <DMcyberContainer ref={containerRef}>
      <Container fluid className="container-fluid">
        <Row>
          <Home1 />
          <Home2 />
        </Row>
        <Row>
          <Home3 />
          <Home4 />
        </Row>
        <Row>
          <Home5 />
          <Home6 />
          <Home7 />
        </Row>
      </Container>
    </DMcyberContainer>
  )
}

export default Home