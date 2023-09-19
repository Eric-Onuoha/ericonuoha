import "./landingPagePreview.styles.scss";
import {Col, Row} from "bootstrap-4-react/lib/components/layout";

import Hero from "../../../components/hero/hero.component";
import Skills from "../../../components/skills/skils.component";
import Projects from "../../../components/projects/projects.component";

const LandingPagePreview = () => {
    return(
        <Col id="landingPagePreviewComponent">
            <Row>
                <Hero></Hero>
            </Row>
            <Row>
                <Skills></Skills>
            </Row>
            <Row>
                <Projects></Projects>
            </Row>
        </Col>
    )
}; export default LandingPagePreview;