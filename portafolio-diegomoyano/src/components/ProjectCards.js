import { Col } from "react-bootstrap"
const ProjectCard = ( { title, imgUrl }) => {
    return (
        <Col >
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                </div>
            </div>
        </Col>
    )
} 
export default ProjectCard;
