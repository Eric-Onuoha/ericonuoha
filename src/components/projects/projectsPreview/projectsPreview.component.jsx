import "./projectsPreview.styles.scss";
import { getScreenHeight } from "../../../utils/getScreenHeight";
import { Col, Row } from "bootstrap-4-react/lib/components/layout";
import { Container, Button } from "bootstrap-4-react/lib/components";

import Laptop from "../../../assets/images/laptop.png";
import LushOvens from "../../../assets/images/lushOvens.png";
import WIPF from "../../../assets/images/wipf.png";
import EricOnuoha from "../../../assets/images/ericOnuoha.png";

const ProjectsPreview = () => {
    const screenHeight = getScreenHeight();
    return(
        <Container fluid id="projectsPreviewComponent" style={{minHeight: (screenHeight - 90)+"px"}}>
        <Col id="projects">
            <Row id="projectsIntro">
                <h1>PROJECTS</h1>
                <p id="underline"></p>
            </Row>
            <Row id="projectsContent">
                <Col className="display col-6">
                    <h4>Lush Ovens</h4>
                    <p>Business Management Application</p>
                    <div id="viewProjects">
                        <img className="projectPreview" src={Laptop} alt="" />
                        <img className="projectDisplay" src={LushOvens} alt="" />
                    </div>
                </Col>
                <Col className="display col-6">
                    <h4>Nigerian Women Aspirants</h4>
                    <p>Organizations Website</p>
                    <div id="viewProjects">
                        <img className="projectPreview" src={Laptop} alt="" />
                        <img className="projectDisplay" src={WIPF} alt="" />
                    </div>
                </Col>
                <Col className="display col-6">
                    <h4>Nigerian Women Aspirants</h4>
                    <p>Organizations Website</p>
                    <div id="viewProjects">
                        <img className="projectPreview" src={Laptop} alt="" />
                        <img className="projectDisplay" src={WIPF} alt="" />
                    </div>
                </Col>
                <Col className="display col-6">
                    <h4>Eric Onuoha</h4>
                    <p>Personal Portfolio</p>
                    <div id="viewProjects">
                        <img className="projectPreview" src={Laptop} alt="" />
                        <img className="projectDisplay" src={EricOnuoha} alt="" />
                    </div>
                </Col>
            </Row>
        </Col>
    </Container>
    )
}; export default ProjectsPreview;