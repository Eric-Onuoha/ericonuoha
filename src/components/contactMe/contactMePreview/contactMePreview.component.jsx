import { getScreenHeight } from "../../../utils/getScreenHeight";
import { Col, Row } from "bootstrap-4-react/lib/components/layout";
import { Container, Button } from "bootstrap-4-react/lib/components";
import "./contactMePreview.styles.scss";

const ContactMePreview = () => {
    const screenHeight = getScreenHeight();

    return (
        <Container fluid id="contactMeComponent" style={{minHeight: (screenHeight - 90)+"px"}}>
            <div id="contactIntro">
                <h1>Send me a message!</h1>
                <p>I'd love to hear from you. I'll receive it and I'll respond.</p>
                <p id="underline"></p>
            </div>
            <form id="contactForm">
                <div id="sendersDetails">
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input id="name" name="name" type="text" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" placeholder="Enter your email address" />
                    </div>
                </div>
                <div id="message">
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" rows={2} placeholder="Leave your message here ..."></textarea>
                </div>
                <button>Send</button>
            </form>
        </Container>
    )
}; export default ContactMePreview;