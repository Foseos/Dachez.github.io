import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner = () => {
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Application Developer", "Android Developer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random());
    const [index, setIndex] = useState(1);
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
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 1.3 );
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
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Bienvenue sur mon Portfolio</span>
                    <h1>{`Lucas Dachez`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Application Developer", "Android Developer" ]'><span className="wrap">{text}</span></span></h1>
                      <p>Je suis ??tudiant en BTS SIO au lyc??e g??n??ral et technologique Albert Londres ?? Cusset, dans l'Allier (03).
                            Au sein de mon BTS , il existe deux sp??cialit??s : le d??veloppement et le r??seau.
                            Pour ma part j'ai choisi la sp??cialit?? Solutions Logicielles et Applications M??tiers ou plus couramment appel??e SLAM
                        </p>
                      <button onClick={() => console.log('connect')}>Contactez moi <ArrowRightCircle size={25} /></button>
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
}