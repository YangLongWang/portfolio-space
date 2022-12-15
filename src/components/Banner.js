import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <div border="light" style={{ height: "150px" }}>
                    <h1>
                      {`Hi I'm Longyang Wang `}
                      <span className="wrap">{text}</span>
                    </h1>
                  </div>
                  <p>
                    I'm a full-stack developer. Emerging full-stack web
                    developer who is certificate in Full Stack Web Development
                    from the University of Toronto Bootcamp with a strong
                    interest in computer technology and a focus on better user
                    experience on the web. Learned new skills in HTML, CSS,
                    JavaScript, python, node.js, express.js, and responsive web
                    design from Bootcamp. Be called an innovative practitioner
                    and problem solver with a passion for developing apps,
                    focusing on mobile-first design and development, with a
                    clean and comfortable front-end UI. Each project can achieve
                    the best readability, and the data structure is clear. Good
                    understanding of project requirements and outlines. I have
                    strong execution and coordination skills in teamwork and can
                    quickly promote the plan's development. My goal is to be an
                    excellent web developer. I like to face different challenges
                    in the process, and I feel a strong sense of accomplishment
                    when I finish the project and solve the problems encountered
                    in programming. I'm excited to use my skills and
                    characteristics to build better experiences on the web.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
