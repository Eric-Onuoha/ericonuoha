import { Col, Row } from "bootstrap-4-react/lib/components/layout";
import { Button } from "bootstrap-4-react/lib/components";
import { getScreenHeight } from "../../../utils/getScreenHeight";
import "./skillsPreview.styles.scss";

const SkillsPreview = () => {
    const screenHeight = getScreenHeight();
    return(
        <Col id="skillsPreviewComponent" style={{height: (screenHeight - 90)+"px"}}>
            <Col id="skills">
                <Row id="skillsIntro">
                    <h1>MY SKILLS</h1>
                    <p id="underline"></p>
                </Row>
                <Row id="skillsContent">
                    <Col>
                        <div id="skillsBubble">
                            <Button>HTML</Button>
                            <Button>JavaScript</Button>
                            <Button>Python</Button>
                            <Button>ReactJS</Button>
                            <Button>Redux</Button>
                            <Button>Firebase</Button>
                            <Button>Amazon AWS</Button>
                            <Button>MongoDB</Button>
                            <Button>NodeJS</Button>
                            <Button>ExpressJS</Button>
                            <Button>SASS</Button>
                            <Button>Bootstrap</Button>
                            <Button>GitHub</Button>
                        </div>
                        {/* <p>I'm an accomplished <span className="highlights">Software Engineer</span> adept at creating user-friendly web applications and harnessing <span className="highlights">AI</span> technologies to drive innovative solutions.</p> */}
                        
                        <p>Whether it's a full-time collaboration or a freelance engagement, I'm keen to explore opportunities that match my skills and experience. Please feel free to reach out.</p>

                        <div id="contactMe">
                            <Button>Contact Me</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Col>
    )
}; export default SkillsPreview;