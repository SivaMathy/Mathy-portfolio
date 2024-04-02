import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './projectCard'
import projImg1 from "../assets/emp.jpg";
import projImg2 from "../assets/exam.webp";
import projImg3 from "../assets/train.jpeg";
import projImg4 from "../assets/appral.webp";
import projImg6 from "../assets/phar.jpeg";
import projImg7 from "../assets/hos.jpeg";
import projImg8 from "../assets/yoga.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online Examination System",
      description: "Technologies : HTML , CSS , PHP , JavaScript , MySQL and PHP",
      imgUrl: projImg2,
    },
    {
      title: "Apparel Management System For Garments",
      description: "Technologies:-JSP, Servlets, HTML, CSS, MicrosoftSQL, Bootstrap",
      imgUrl: projImg4,
    },
    {
      title: "Online Train Ticket Booking System",
      description: "Technologies:-JSP, Servlets, HTML, CSS, MicrosoftSQL, Bootstrap",
      imgUrl: projImg3,
    },
    
  ];
  const project2=[

    {
        title: "Mobile Application For Hospital Appointment Booking System",
        description: "Technologies :- Android JAVA and Firebase",
        imgUrl: projImg1,
      },

      {
        title: "Hospital Management Tool",
        description: "Technologies:-React.js Node.js, Express.js, MongoDB along with JWT token",
        imgUrl: projImg6,
      },

      {
        title: "Real Time Yoga Assistant (Research Project)",
        description: "Technologies :- Python , React.js",
        imgUrl: projImg8,
      }
  ]


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={8}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Project Portfolio 📂</h2>
                <p>Throughout my journey, I've been fortunate to engage in a diverse range of projects that have significantly contributed to my proficiency in computer science principles and refined my abilities as a developer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                style={{height:"200px", width:"200px"}}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={""}></img>
    </section>
  )
}