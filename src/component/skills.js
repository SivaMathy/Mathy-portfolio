import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Html from "../assets/html.png";
import Angular from "../assets/angular.png";
import Spring from "../assets/spring.png";
import React from "../assets/react.png";
import Node from "../assets/node.png";
import GIT from "../assets/git.png";
import CSS from "../assets/css.png";
import Bootstarp from "../assets/bootstrap.jpeg";
import java from "../assets/java.png";
import javascript from "../assets/js.png";
import python from "../assets/python.jpg";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo.png";
import firebase from "../assets/firebase.jpg";
import agile from "../assets/agile.png";
import docker from "../assets/docker.png";
import figma from "../assets/figma.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src={Html}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img
                    src={CSS}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    src={javascript}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img
                    src={java}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>JAVA</h5>
                </div>
                <div className="item">
                  <img
                    src={python}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Python</h5>
                </div>
                
                <div className="item">
                  <img
                    src={Angular}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Angular.js</h5>
                </div>
                <div className="item">
                  <img
                    src={Spring}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>SpringBoot</h5>
                </div>
                <div className="item">
                  <img
                    src={React}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img
                    src={Node}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img
                    src={mysql}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>MySql</h5>
                </div>
                <div className="item">
                  <img
                    src={firebase}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img
                    src={mongo}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    src={docker}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img
                    src={figma}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img
                    src={GIT}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <img
                    src={agile}
                    alt="Image"
                    style={{ height: "170px", width: "170px" }}
                  />
                  <h5>Agile</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={""} alt="Image" />
    </section>
  );
};
