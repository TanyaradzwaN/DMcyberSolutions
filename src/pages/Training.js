import React, { useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col,} from "react-bootstrap"
import './Home.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";


const DMcyberContainer = styled.div`
padding: 0 60px ;
margin-top: 130px;
@media (max-width: 575px) {
  padding: 0 15px;
  margin-top: 100px;
}
`
const DmCyber = styled.span`
color:#3ED5DD;`

const CyberParagraph = styled.p`
color: white;
font-family: 'Jost*', sans-serif;
font-size: 25px;
padding: 20px ;
margin: 180px 0;

@media (max-width: 575px) {
  padding: 2.5% 0;
  margin: 20px 0;
  font-size: 18px;



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
    <Col md={7} >
      <section  className="home-1" >
          <CyberParagraph>
            <DmCyber>DMcyber Solutions</DmCyber>  offers a robust cyber security awareness training program for everyone. 
            We will manage every aspect of your training program, including simulated cyber attacks and remedial training 
            to reinforce concepts between full training sessions. 
            <br/>
            <br/>
            We empower you to be the first line of defense against cyber threats with our tailored security 
            awareness training
          </CyberParagraph>
      </section>
    </Col></>
}

function Home2 (){
  return<>
        <Col  md={5} >
          <section  className='home-2'>
            <CyberFlex>
              <img src="../images/cyber.png" alt="cyber solutions" className='Cyberimage'/>
            </CyberFlex>
          </section>
        </Col></>
}



function Home6 (){
  const itemList = [
    {
      imageUrl: "../images/Training.png",
      altText: "Network Security",
      description: "Foundation of Cybersecurity",  
    },
    {
      imageUrl: "../images/Threat.png",
      altText: "Cyber Attacks",
      description: "Network Security",
    },
    {
      imageUrl: "../images/Customize.png",
      altText: "Cyber solutions",
      description: "Cyber Attacks",
    },
    {
      imageUrl: "../images/router.png",
      altText: "Cyber solutions",
      description: "Web Application Security",
    },
    {
      imageUrl: "../images/Threat.png",
      altText: "Cyber solutions",
      description: "Malware",

    },
  ]

  return<>
        {itemList.map(({ imageUrl, altText, description }, i) => (
        <Col md={4} id="cybercards" className='home-7'>
           <div className='aboutcard' key={i}>
              <img src={imageUrl} alt={altText} className="CardImage" />
              <CardContent className="CardContent">
                <Cardheading>{description}</Cardheading>
              </CardContent>
           </div> 
        </Col>
        ))}
  </>
}


function Training() {
  const containerRef = useRef();

  useGSAP(() => {

    const sections = [
      "#Cyber1", "#Cyber2", 
      "#services", "#cybercards"
    ];

    sections.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: index % 2 === 0 ? 100 : -100,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play none none reverse",
          markers: false
        }
      });
    });
  }, { scope: containerRef });

  

  return (
    <DMcyberContainer ref={containerRef}>
      <Container fluid className="container-fluid">
        <Row> 
          <Home2 />
          <Home1 />
        </Row>
        <Row>
          <Home6 />
        </Row>
      </Container>
    </DMcyberContainer>
  )
}

export default Training