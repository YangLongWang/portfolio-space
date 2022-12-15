import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.png";
// import projImg5 from "../assets/img/project-img5.png";
// import projImg6 from "../assets/img/project-img6.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      name: "iBetter - Habits Tracker",
      description:
        "iBetter was developed to help you be better at tracking and accomplishing your good habits.",
      language: "HANDLEBARS/JAVASCRIPT/CSS",
      github: "https://github.com/Vinyldude8896/iBetter",
      deployment: "https://ibetter.herokuapp.com",
      imgUrl: projImg1,
    },
    {
      name: "Movie Search",
      description: "A movie search website.",
      language: "HTML/JAVASCRIPT/BULMA/CSS",
      github: "https://github.com/EnzoTragnone/Movie-Search",
      deployment: "https://enzotragnone.github.io/Movie-Search/",
      imgUrl: projImg2,
    },
    {
      name: "The Tech Blog",
      description:
        "A CMS-style blog site so that people can publish articles, blog posts, and any thoughts and opinions.",
      language: "HANDLEBARS/JAVASCRIPT/CSS",
      github: "https://github.com/YangLongWang/Tech-Blog",
      deployment: "https://tech-blog-app-6408.herokuapp.com",
      imgUrl: projImg3,
    },
    {
      name: "Text Editor",
      description:
        "To create notes or code snippets with or without an internet connection.",
      language: "JAVASCRIPT",
      github: "https://github.com/YangLongWang/Text-Editor",
      deployment: "https://text-editor-app-6408.herokuapp.com/",
      // imgUrl: projImg4,
    },
    {
      name: "Weather Dashboard",
      description:
        "Seeing the weather outlook for multiple cities, travelers can plan a trip accordingly",
      language: "HTML/JAVASCRIPT/CSS",
      github: "https://github.com/YangLongWang/Weather-Dashboard",
      deployment: "https://yanglongwang.github.io/Weather-Dashboard/",
      // imgUrl: projImg5,
    },
    {
      name: "Coding Quiz",
      description: "Practice coding assignment",
      language: "HTML/JAVASCRIPT/CSS",
      github: "https://github.com/YangLongWang/Coding-Quiz",
      deployment: "https://yanglongwang.github.io/Coding-Quiz/",
      // imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
