import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/longyang-wang/">
                <img src={navIcon1} alt="linkedIn" />
              </a>
              <a href="https://github.com/YangLongWang">
                <img src={navIcon4} alt="github" />
              </a>
            </div>
            <p>CopyRight {new Date().getFullYear()}. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
