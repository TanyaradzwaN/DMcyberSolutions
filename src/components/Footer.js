import React, { useRef} from 'react'
import styled from 'styled-components';
import { Container, Row, Col,} from "react-bootstrap"
import '../pages/Home.scss'
import Swal from 'sweetalert2'
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
const DMcyberContainer = styled.div`
padding: 0 60px ;
@media (max-width: 575px) {
  padding: 0 15px;
}
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

const CyberInputs = styled.div`
  width: 48%;
@media (max-width: 575px) {
  width: 100%;

}; 

`
const CyberLinkbutton = styled.button`
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
    &:hover{background-color:#171717;color:white;border: 2px solid #02ADEF}

@media (max-width: 575px) {
    width: 180px;
    font-size: 20px;
    height: 50px;
};


`;

const CyberInputstext = styled.div`
width: 100%;
`
const CyberFlexicon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
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

function Home8(){
    const [setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4497973c-47dd-47b1-b4f0-664d637f7a85");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
        
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return(
    <Col md={6} id='cyberform' >
      <section className='home-8'>
       <CyberHeading>Get In Touch</CyberHeading> 
        <form onSubmit={onSubmit}>
          <div className='cyberInputs'>
            <CyberInputs>
              <label>Name</label>
              <input type="text" name="name" placeholder='Enter Your Name' required/>
            </CyberInputs>
            <CyberInputs>
              <label>Last Name</label>
              <input type="text" name="name" placeholder='Enter Your Name' required/>
            </CyberInputs>
          </div>
         
          <label>Your Email</label>
          <input type="email" name="email" placeholder='Enter Your Email Address' required/>
          
          <CyberInputstext>
            <label>Message </label>
            <textarea name="message" placeholder='Enter Your Email Message' required></textarea>
          </CyberInputstext>
          <CyberLinkbutton type="submit">Send</CyberLinkbutton>
          </form>
          <img src="../images/Vector1.png" alt="cyber solutions" className='cybersolutionimg2' />
      </section>
  </Col>
  
  )}
  
  function Home9() {
    return <>
          <Col md={6} >
            <section id='contact' className='home-9'>
            <img src="../images/Group5.png" alt="cyber solutions" className='cybersolutionimg' />
                <CyberHeading >
                  Need More help?
                </CyberHeading> 
                <CyberParagraph id='aboutp'>Get in touch with us today</CyberParagraph>
                <a href='tel:+16784916702' className='cybercontact'>
                  <img src="../images/call.png" alt="cyber solutions" />
                  <CyberParagraph id='aboutp'>+1 6784916702</CyberParagraph>
                </a>
                <a href='mailto: dannymuchie@dmcybersolu.com' className='cybercontact'>
                  <img src="../images/message.png" alt="cyber solutions" />
                  <CyberParagraph id='aboutp'>dannymuchie@dmcybersolu.com</CyberParagraph>
                </a>
                <a href='https://www.google.com/maps/place/Lawrenceville,+GA,+USA/@33.9545073,-84.0098426,14z/data=!4m15!1m8!3m7!1s0x88f508ebdb5f57ab:0xc3db0f7dcd03069a!2sLawrenceville,+GA,+USA!3b1!8m2!3d33.9562149!4d-83.9879625!16zL20vMHJ3eWs!3m5!1s0x88f508ebdb5f57ab:0xc3db0f7dcd03069a!8m2!3d33.9562149!4d-83.9879625!16zL20vMHJ3eWs?entry=ttu' className='cybercontact'>
                  <img src="../images/location.png" alt="cyber solutions" />
                  <CyberParagraph id='aboutp'>Lawrenceville, Georgia, United States </CyberParagraph>
                </a>
            </section>
  
          </Col></>
  }
  
  function Home10() {
 
    return <>
          <Col md={12} >
            <section id='footer'>
            <img src="../images/cyber1.png" alt="cyber solutions" className='footerlogo'/>
            <CyberFlexicon>
                <a href='tel:+16784916702' className='cybercontact'>
                  <img src="../images/ig.png" alt="cyber solutions" className='cybercontact1'/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=61561809456868' className='cybercontact'>
                  <img src="../images/FB.png" alt="cyber solutions" className='cybercontact1'/>
                </a>
                <a href='https://www.google.com/maps/place/Lawrenceville,+GA,+USA/@33.9545073,-84.0098426,14z/data=!4m15!1m8!3m7!1s0x88f508ebdb5f57ab:0xc3db0f7dcd03069a!2sLawrenceville,+GA,+USA!3b1!8m2!3d33.9562149!4d-83.9879625!16zL20vMHJ3eWs!3m5!1s0x88f508ebdb5f57ab:0xc3db0f7dcd03069a!8m2!3d33.9562149!4d-83.9879625!16zL20vMHJ3eWs?entry=ttu' className='cybercontact'>
                  <img src="../images/Twitter.png" alt="cyber solutions" className='cybercontact1'/>
                </a>
                <a href='https://youtube.com/shorts/yLyUpKTnMZY?feature=share' className='cybercontact'>
                  <img src="../images/Youtube.png" alt="cyber solutions" className='cybercontact1'/>
                </a>
                </CyberFlexicon>
                <CyberParagraph >copyright DMcyber Solutions@2024 all right reserved</CyberParagraph>
  
            </section>
  
          </Col></>
  }


  gsap.registerPlugin(ScrollTrigger, useGSAP);
 function Footer() {
  const containerRef = useRef();

  useGSAP(() => {
  

    const sections = [".home-8", ".home-9",];

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
        }
      });
    });
  }, { scope: containerRef });

  return (
    <DMcyberContainer id='Footer' ref={containerRef}>
      <Container fluid className="container-fluid" id='Footer'>
        <Row>
          <Home8 />
          <Home9 />
        </Row>
        <Row>
          <Home10 />
        </Row>
      </Container>
    </DMcyberContainer>
  )
}

export default Footer