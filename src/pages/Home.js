import React, { useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col,} from "react-bootstrap"
import './Home.scss'
import Swal from 'sweetalert2'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const DMcyberContainer = styled.div`
padding: 0 60px ;
@media (max-width: 575px) {
  padding: 0 15px;
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

const CyberInputs = styled.div`
  width: 48%;
@media (max-width: 575px) {
  width: 100%;

}; 

`

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
gsap.registerPlugin(ScrollTrigger);

const useAnimateSection = (ref) => {
  useEffect(() => {
    const section = ref.current;
    
    gsap.fromTo(
      section.children,
      { 
        opacity: 0, 
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, [ref]);
};

function Home1() {
  const section1Ref = useRef(null);
  useAnimateSection(section1Ref);
  return <>
    <Col md={7} id='Cyber1' >
      <section className="tl" ref={section1Ref} >
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
  const section2Ref = useRef(null);
  useAnimateSection(section2Ref);
  return<>
        <Col md={5} id="Cyber2">
          <section ref={section2Ref}>
            <CyberFlex>
              <img src="../images/cyber.png" alt="cyber solutions" className='cyberimage'/>
            </CyberFlex>
          </section>
        </Col></>
}

function Home3() {
  const section3Ref = useRef(null);
  useAnimateSection(section3Ref);
  return <>
      <Col md={6}>
        <section ref={section3Ref}>
          <img src="../images/about.png" alt="cyber solutions" className='aboutcyber'/>
        </section>
      </Col>
</>
}

function Home4 (){
  const section4Ref = useRef(null);
  useAnimateSection(section4Ref);
  return<>
        <Col md={6} >
          <section id='aboutdmcyber' ref={section4Ref}>
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
  const section5Ref = useRef(null);
  useAnimateSection(section5Ref);
  return <>
        <Col md={8} >
          <section ref={section5Ref}>
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

  const section6Ref = useRef(null);
  useAnimateSection(section6Ref);
  return(
  
        <Col md={4} >
          <section ref={section6Ref}>
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
  const section7Ref = useRef(null);
  useAnimateSection(section7Ref);
  return<>
        {itemList.map(({ imageUrl, altText, topic, description,topic1,topic2,topic3,topic4  }, i) => (
        <Col md={4} id="cybercards" ref={section7Ref}>
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

  const section8Ref = useRef(null);
  useAnimateSection(section8Ref);
return(
  <Col md={6} id='cyberform' >
    <section ref={section8Ref}>
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
        <img src="../images/Group6.png" alt="cyber solutions" className='cybersolutionimg2' />

    </section>
</Col>

)}

function Home9() {
  const section9Ref = useRef(null);
  useAnimateSection(section9Ref);
  return <>
        <Col md={6} >
          <section id='contact' ref={section9Ref}>
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
  const section10Ref = useRef(null);
  useAnimateSection(section10Ref);
  return <>
        <Col md={12} >
          <section id='footer' ref={section10Ref}>
          <img src="../images/cyber1.png" alt="cyber solutions" className='footerlogo'/>
          <CyberFlexicon>
              <a href='tel:+16784916702' className='cybercontact'>
                <img src="../images/ig.png" alt="cyber solutions" className='cybercontact1'/>
              </a>
              <a href='mailto: dannymuchie@dmcybersolu.com' className='cybercontact'>
                <img src="../images/FB.png" alt="cyber solutions" className='cybercontact1'/>
              </a>
              <a href='https://www.google.com/maps/place/Lawrenceville,+GA,+USA/@33.9545073,-84.0098426,14z/data=!4m15!1m8!3m7!1s0x88f508ebdb5f57ab:0xc3db0f7dcd03069a!2sLawrenceville,+GA,+USA!3b1!8m2!3d33.9562149!4d-83.9879625!16zL20vMHJ3eWs!3m5!1s0x88f508ebdb5f57ab:0xc3db0f7dcd03069a!8m2!3d33.9562149!4d-83.9879625!16zL20vMHJ3eWs?entry=ttu' className='cybercontact'>
                <img src="../images/Twitter.png" alt="cyber solutions" className='cybercontact1'/>
              </a>
              <a href='https://www.google.com/maps/place/Lawrenceville,+GA,+USA/@33.9545073,-84.0098426,14z/data=!4m15!1m8!3m7!1s0x88f508ebdb5f57ab:0xc3db0f7dcd03069a!2sLawrenceville,+GA,+USA!3b1!8m2!3d33.9562149!4d-83.9879625!16zL20vMHJ3eWs!3m5!1s0x88f508ebdb5f57ab:0xc3db0f7dcd03069a!8m2!3d33.9562149!4d-83.9879625!16zL20vMHJ3eWs?entry=ttu' className='cybercontact'>
                <img src="../images/Youtube.png" alt="cyber solutions" className='cybercontact1'/>
              </a>
              </CyberFlexicon>
              <CyberParagraph >copyright DMcyber Solutions@2024 all right reserved</CyberParagraph>

          </section>

        </Col></>
}





function Home() {

  return (
    <DMcyberContainer >
    <Container fluid className="container-fluid LiquidCrystal">
      <Row >
        <Home1  />
        <Home2/>
      </Row>
      <Row>
        <Home3 />
        <Home4/>
      </Row>
      <Row>
        <Home5 />
        <Home6/>
        <Home7 />
      </Row>
      <Row>
        <Home8/>
        <Home9/>
      </Row>
      <Row>
        <Home10/>
      </Row>
    </Container>
    </DMcyberContainer>
  
  )
}

export default Home