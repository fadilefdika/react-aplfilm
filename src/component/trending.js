import { Card, Container, Button } from 'react-bootstrap';
import '../style/landingpage.css';
import cp from '../asets/clapper.avif';
import cat from '../asets/kucing.jpg';
import tsl from '../asets/tsl.jpg';
import jk from '../asets/jujutsu.jpg';
import lab from '../asets/lab.jpg';
import hjp from '../asets/hjp.jpg';

const Trending = () => {
  return (
    <Container id="trending">
      <div>
        <h3 className="p-4 fw-bold text-light">Trending</h3>
      </div>
      <div className="film-trending">
        <Card style={{ width: '14rem', margin: '12px' }}>
          <Card.Img variant="top" src={cp} id="img" />
          <Card.Body>
            <Card.Title> Closer Clapper </Card.Title>
            <Card.Text className="text">Sebuah film dokumenter tentang pembuatan film.</Card.Text>
            <Button variant="primary" className="tombol">
              menonton
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '14rem', margin: '12px' }}>
          <Card.Img variant="top" src={cat} id="img" />
          <Card.Body>
            <Card.Title> The Cat </Card.Title>
            <Card.Text className="text">Apa jadinya jika kucing benar benar bukan makhluk bumi?.</Card.Text>
            <Button variant="primary" className="tombol">
              menonton
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '14rem', margin: '12px' }}>
          <Card.Img variant="top" src={tsl} id="img" />
          <Card.Body>
            <Card.Title>Prof Tesla</Card.Title>
            <Card.Text className="text">Super hero dengan kekuatan listrik yang ia temukan sendiri.</Card.Text>
            <Button variant="primary" className="tombol">
              menonton
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '14rem', margin: '12px' }}>
          <Card.Img variant="top" src={jk} id="img" />
          <Card.Body>
            <Card.Title>Sukuna Empire </Card.Title>
            <Card.Text className="text">Menceritakan masa-masa kejayaan iblis terkuat sukuna </Card.Text>
            <Button variant="primary" className="tombol">
              menonton
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '14rem', margin: '14px 30px' }}>
          <Card.Img variant="top" src={lab} id="img" />
          <Card.Body>
            <Card.Title> Fake Scientists</Card.Title>
            <Card.Text className="text">Kisah seorang fresh graduate yang mengungkap kebenaran dari spesies baru.</Card.Text>
            <Button variant="primary" className="tombol">
              menonton
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '14rem', margin: '14px 30px' }}>
          <Card.Img variant="top" src={hjp} id="img" />
          <Card.Body>
            <Card.Title> Anak Baik </Card.Title>
            <Card.Text className="text">Drama tentang Start-up tetapi han ji pyeong yang jadian dengan seo dal mi.</Card.Text>
            <Button variant="primary" className="tombol">
              menonton
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Trending;
