import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{height:"200px", width:"350px"}}>
        <img src={imgUrl} className="img-projects" style={{height:"200px", width:"350px"}}/>
        <div className="proj-txtx" >
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}