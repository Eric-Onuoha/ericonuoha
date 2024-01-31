import "./projectsPreview.styles.scss";
import { getScreenHeight } from "../../../utils/getScreenHeight";
import { Col, Row } from "bootstrap-4-react/lib/components/layout";
import { Container, Button } from "bootstrap-4-react/lib/components";

// import Laptop from "../../../assets/images/laptop2.png";
import LushOvens from "../../../assets/images/lushOvens.png";
import WIPF from "../../../assets/images/wipf.png";
import EricOnuoha from "../../../assets/images/ericOnuoha.png";

const ProjectsPreview = () => {
    const screenHeight = getScreenHeight();
    return(
        <Container fluid id="projectsPreviewComponent" style={{minHeight: (screenHeight - 90)+"px"}}>
        <Col id="projects">
            <Row id="projectsIntro">
                <h1>Projects</h1>
                <p id="underline"></p>
            </Row>
            <Row id="projectsContent">
                <Col className="viewProjects display col-6">
                    <h4>LUMAN</h4>
                    <p>Bakery Business Management Application</p>
                    <img className="projectDisplay" src={LushOvens} alt="" />
                </Col>
                <Col className="viewProjects display col-6">
                    <h4>Lush Ovens</h4>
                    <p>Business Management Application</p>
                    <img className="projectDisplay" src={WIPF} alt="" />
                </Col>
                <Col className="viewProjects display col-6">
                    <h4>Lush Ovens</h4>
                    <p>Business Management Application</p>
                    <img className="projectDisplay" src={WIPF} alt="" />
                </Col>
                <Col className="viewProjects display col-6">
                    <h4>Lush Ovens</h4>
                    <p>Business Management Application</p>
                    <img className="projectDisplay" src={EricOnuoha} alt="" />
                </Col>
            </Row>
        </Col>
    </Container>
    )
}; export default ProjectsPreview;