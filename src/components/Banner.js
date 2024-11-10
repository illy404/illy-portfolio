import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png"
import folderIcon from "../assets/img/foldericon.png"
import 'animate.css'
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "I am an illustrator", "I am an illustrator", "I am an illustrator" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return (
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={`${isVisible ? "animate__animated animate__fadeIn" : ""} banner-maintab ps-5 pe-5`}>
                      <h1 className="color-purple fw-bold mx-auto">{`Hi, it’s Illy!`} 
                        <br />
                        <span className="txt-rotate" dataPeriod="1000" data-rotate={toRotate}>
                          <span className="wrap">{text}</span>
                        </span>
                      </h1>
                    </div>
                  }
                </TrackVisibility>

                {/* Flexbox container for the links */}
                <div className="d-flex justify-content-evenly mt-4">
                  {/* Flex item 1 */}
                  <div className="text-center mx-3">
                    <Nav.Link href="#about" className="text-decoration-none">
                      <img src={folderIcon} alt="About" className="mb-2 img-fluid folder-icon-img"/>
                      <p className="color-purple">About Me</p>
                    </Nav.Link>
                  </div>

                  {/* Flex item 2 */}
                  <div className="text-center mx-3">
                    <Nav.Link href="#myworks" className="text-decoration-none">
                      <img src={folderIcon} alt="My Works" className="mb-2 img-fluid folder-icon-img"/>
                      <p className="color-purple">My Works</p>
                    </Nav.Link>
                  </div>

                  {/* Flex item 3 */}
                  <div className="text-center mx-3">
                    <Nav.Link href="#contact" className="text-decoration-none">
                      <img src={folderIcon} alt="Contact" className="mb-2 img-fluid folder-icon-img"/>
                      <p className="color-purple">Contact</p>
                    </Nav.Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img" className="header-img"/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
    )
}