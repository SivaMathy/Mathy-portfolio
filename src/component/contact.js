import { useState ,useRef} from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const libraries = ['places'];
const mapContainerStyle = {
  height:"600px",width:"500px"
};
const center = {
  lat: 6.8725039,
  lng: 79.8641736, 
};

const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: 'AIzaSyBnRsoKEg1wzdmJuIBuYVxUlfz-DqakVB4',
  libraries,
});

if (loadError) {
  return <div>Error loading maps</div>;
}

if (!isLoaded) {
  return <div>Loading maps</div>;
}


  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vqnhc7r', 'template_c858lw9', form.current, {
        publicKey: 'i3DtolVsTt-qK98EB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ succes: true, message: 'Message sent successfully'});
          

        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
       
        },
      );
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                //  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" style={{height:"600px",width:"400px"}}/>
                <GoogleMap className={isVisible ? "animate__animated animate__zoomIn" : ""}
        mapContainerStyle={mapContainerStyle}
        zoom={20}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {
                      status.message &&
                      
                      // <Col>
                      //   <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      // </Col>
                      <div class={status.success === false ? "danger" :"alert alert-success"} role="alert">
  {status.message}
</div>
                      
                    }
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12}  className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} name="from_name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} name="email"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} name="phone" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} name="message"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}