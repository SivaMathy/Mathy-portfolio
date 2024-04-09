import { Navbar, Nav, Container } from "react-bootstrap";
import { useState , useEffect} from "react";
import logo from "../assets/logo.png";
import NavIcon1 from "../assets/nav-icon1.svg";
import NavIcon2 from "../assets/github.svg";
import NavIcon3 from "../assets/nav-icon3.svg";
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
    const [activeLink,setActiveLink]=useState('home');
    const[scrolled,setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll =()=>{
            if(window.scrollY >50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return()=>window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
    return(
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/mathyvathana-sivalingam-77130920a/" target="_blank"><img src={NavIcon1} alt=""/></a>
                <a href="https://github.com/SivaMathy/" target="_blank"><img src={NavIcon2} alt="Icon" /></a>
                <a href="https://www.instagram.com/vathana_siv/" target="_blank"><img src={NavIcon3} alt=""/></a>
            </div>
           <Nav.Link href="#contact" onClick={()=>onUpdateActiveLink('contact')}> <button className="vvd"  href="#contact" ><span>Let's Connect</span></button> </Nav.Link>
           
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
