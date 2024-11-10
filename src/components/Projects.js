import { useState } from "react";
import { Container, Tab, Nav, Modal, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Masonry from 'react-masonry-css';
import folderIcon from "../assets/img/foldericon.png"
import myworksbox from "../assets/img/myworks-box.png"

// Helper function to import all images from a folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);

const projects3D = importAll(require.context('../assets/img/3d', false, /\.(png|jpe?g|svg)$/));
const projectsGraphic = importAll(require.context('../assets/img/graphic_design', false, /\.(png|jpe?g|svg)$/));
const projectsIllustration = importAll(require.context('../assets/img/illustration', false, /\.(png|jpe?g|svg)$/));

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleCardClick = (imgUrl) => {
    setCurrentImage(imgUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  const breakpointColumnsObj = {
    default: 3,
    1400: 3,
    991: 2,
    480: 1
  };
  
  const renderProjects = (projects) => (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="projects-masonry"
      columnClassName="projects-masonry_column"
    >
      {projects.map((imgUrl, index) => (
        <ProjectCard
          key={index}
          imgUrl={imgUrl}
          onClick={() => handleCardClick(imgUrl)}
          className="project-card"
        />
      ))}
    </Masonry>
  );

  return (
    <section className="project" id="myworks">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Row>
              <Col xs={12} md={12} xl={6}>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-evenly align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <img src={folderIcon} alt="foldericon" className="mb-2 img-fluid folder-icon-img"/>
                      <p className="color-purple">3D Design</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <img src={folderIcon} alt="foldericon" className="mb-2 img-fluid folder-icon-img"/>
                      <p className="color-purple">Graphic Design</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                    <img src={folderIcon} alt="foldericon" className="mb-2 img-fluid folder-icon-img"/>
                    <p className="color-purple">Illustration</p>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} md={12} xl={6} className="mb-4 text-center">
                <img src={myworksbox} alt="myworksbox" className="myworks-box"/>
              </Col>
            </Row>

              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                  {renderProjects(projects3D)}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {renderProjects(projectsGraphic)}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {renderProjects(projectsIllustration)}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>}
        </TrackVisibility>
      </Container>

      {/* Modal for displaying image */}
      <Modal 
        show={showModal} 
        onHide={closeModal} 
        centered 
        fullscreen
        backdrop="static" 
        keyboard={false} 
        onClick={closeModal}
      >
        <Modal.Body className="d-flex align-items-center justify-content-center">
          {currentImage && <img src={currentImage} alt="Project" />}
        </Modal.Body>
      </Modal>
    </section>
  );
};
