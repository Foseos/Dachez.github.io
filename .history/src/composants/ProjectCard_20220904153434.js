import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, id }) => {
  return (
    <Col size={10} sm={4} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}