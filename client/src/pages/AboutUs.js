import React, { useState } from "react";
import {Card, CardGroup, Col, Container, Nav, Row} from 'react-bootstrap'
import EntryModal from "../components/EntryModal";
import {PrimaryColor, SecondaryColor, ActionColor, VocalHeader} from '../components/Styles.js'

const programmers = [
  {
    name: "Asher Bay", 
    image: "https://cdn10.bigcommerce.com/s-npe4l/products/1157/images/1335/B-MZ-SMSHD---HIGH__85441.1477602947.1280.1280.jpg?c=2",
    GitHub: "https://github.com/MRKnutson/",
    LinkedIn: "www.linkedin.com/in/michaelrknutson",
    email: "mrknutson44@gmail.com",
    blurb: "Some stuff about Asher and how great he is at Coding!"

},
{
  name: "Michael Knutson", 
  image: "https://res.cloudinary.com/djhlv2nfc/image/upload/v1642024460/Vocal/Images/IMG_4372_qcefm7.jpg",
  GitHub: "https://github.com/MRKnutson/",
  LinkedIn: "https://linkedin.com/in/michaelrknutson",
  email: "mrknutson44@gmail.com",
  blurb: "I come from a biological and statistical background. After helping to design a server that can be deployed on research vessels I realized my passion was in programming. It didn't take me long to decide to become a full-time developer!"

},
{
  name: "Denis Plank", 
  image: "https://cdn10.bigcommerce.com/s-npe4l/products/1157/images/1335/B-MZ-SMSHD---HIGH__85441.1477602947.1280.1280.jpg?c=2",
  GitHub: "https://github.com/MRKnutson/",
  LinkedIn: "www.linkedin.com/in/michaelrknutson",
  email: "mrknutson44@gmail.com",
  blurb: "Some stuff about Denis and how great he is at Coding!"

},
{
  name: "Ruby Reed", 
  image: "https://res.cloudinary.com/djhlv2nfc/image/upload/v1642119399/Vocal/Images/DD4625AA-BAE3-4897-9B6D-424C6CB78A44_1_201_a_kkxazz.jpg",
  GitHub: "https://github.com/rubyreed/",
  LinkedIn: "https://www.linkedin.com/in/ruby-reed-454844134/",
  email: "rubysreed@gmail.com",
  blurb: "After earning a Bachelor's in Biological Science I spent some time traveling and trying to figure out my career... I finally landed on coding! And I'm loving it. "

}
]

const AboutUs = () => {

  const renderProgrammers = () =>{
    return programmers.map((developer)=>{
      return(
        <Col key = {developer.name}>
        <Card style ={{
          width: "25rem",
          boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          marginTop: "45px",
          height: "45rem"
          }}>
          <Card.Img variant = "top" src = {developer.image} style = {{
             maxWidth: "25rem"
            }}/>
          <Card.Body>
            <Card.Title>{developer.name}</Card.Title>
            <Card.Text>{developer.blurb}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Nav>
              <Nav.Item>
                <Nav.Link href = {developer.GitHub}>
                  <img src = "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" 
                  style = {{height: "3rem"}}
                  />
                </Nav.Link>
                <Nav.Link href = {developer.LinkedIn}>
                  <img src = "https://www.passionateinmarketing.com/wp-content/uploads/2021/11/linledin-B2Binstitute.png"
                  style = {{height: "2rem"}}
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Footer>
        </Card>
        </Col>
      )
    })
  };
  return (
    <Container>
      <VocalHeader>About Us</VocalHeader>

      <Row md = {1} lg = {2}>
        {renderProgrammers()}
      </Row>

    </Container>
  )
}

export default AboutUs;