import { Col, Row } from "bootstrap-4-react/lib/components/layout";
import { Button } from "bootstrap-4-react/lib/components";
import "./heroPreview.styles.scss";
import { getScreenHeight } from "../../../utils/getScreenHeight";

import EmailIcon from "../../../assets/images/email.svg";
import GitHubIcon from "../../../assets/images/github.svg";
import LinkedInIcon from "../../../assets/images/linkedin.svg";

const HeroPreview = () => {
    const screenHeight = getScreenHeight();
    return(
        <Col id="heroPreviewComponent" style={{height: screenHeight+"px"}}>
            <div id="professionalSummary">
                <h1>Hi, I'm Eric Onuoha</h1>
                <p>An experienced <span className="highlights">Software Engineer</span> adept at creating user-friendly web applications and harnessing <span className="highlights">AI</span> technologies to drive innovative solutions.</p>
                <div id="buttons">
                    <a href="https://drive.google.com/file/d/1RFBqJPtPbpSUHzk8ouS25DEU2Eycsm0o/view?usp=sharing" target="_blank"><Button id="cv">View CV</Button></a>
                    <Button id="projects">Projects</Button>
                </div>
            </div>
            <div id="contactLinks">
                <a href="mailto:ericonuo@gmail.com"><img src={EmailIcon} alt="Click to Email me" /></a>
                <a href="https://github.com/Eric-Onuoha/" target="_blank"><img src={GitHubIcon} alt="GitHub Redirect" /></a>
                <a href="https://www.linkedin.com/in/eric-onuoha-263b2a1a2/" target="_blank"><img src={LinkedInIcon} alt="LinkedIn Redirect" /></a>
            </div>
        </Col>
    )
}; export default HeroPreview;