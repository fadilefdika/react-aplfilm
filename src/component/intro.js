import { Col, Container, Row, Button } from 'react-bootstrap';
import '../style/intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title text-black">Selamat Hancuk</div>
            <div className=" intro-btn mt-2 text-center">
              <Button variant="dark">disini lengkap</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
