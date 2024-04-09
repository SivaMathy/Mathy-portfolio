import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logoPic from "../assets/croped.JPG";
import NavIcon1 from "../assets/nav-icon1.svg";
import NavIcon2 from "../assets/github.svg";
import NavIcon3 from "../assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container >
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-start col-xs-12 col-md-6">
            
            <Col size={12}  style={{ display: 'flex',alignItems: 'center' }}>
              <img
                src={logoPic}
                alt="Logo"
                style={{ borderRadius: "50%",height:"20%",width:"20%" }}
              />
              <p style={{paddingLeft:"15px"}}>
                <h6>Mathyvathana Sivalingam</h6>
                <h6>09,Rudra Mawatha,Colombo</h6>
                <h6>0769176735</h6>
                <h6>mathy14siva@gmail.com</h6>
              </p>
            </Col>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end col-xs-12 col-md-6">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mathyvathana-sivalingam-77130920a/"
                target="_blank"
              >
                <img src={NavIcon1} alt="" />
              </a>
              <a href="https://github.com/SivaMathy/" target="_blank">
                <img src={NavIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/vathana_siv/" target="_blank">
                <img src={NavIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
