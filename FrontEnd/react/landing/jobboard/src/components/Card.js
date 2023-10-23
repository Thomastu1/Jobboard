import React, {useState} from 'react';
import { Container, Card, Button, Row, Col, Modal } from 'react-bootstrap';
import "../style/pages/Card.css"



const Cardj = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
        <Container className='cardjob'>
      <Row >
      <Col sm={3}>
        <Card className='bodc'>
          <Card.Img src='https://media.glassdoor.com/sqll/28187/capgemini-engineering-squareLogo-1619089249697.png' ></Card.Img>
          <Card.Body >
            <Card.Title>Capgemini</Card.Title>
            <Card.Text>
              Recherche Alternant rapidement
            </Card.Text>
            <Button className='but' variant='primary' onClick={handleShowModal}>En savoir plus</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='bodc'>
          <Card.Img src='https://eodhistoricaldata.com/img/logos/MI/tot.png' ></Card.Img>
          <Card.Body>
            <Card.Title>Total</Card.Title>
            <Card.Text>
              Recherche Alternant rapidement
            </Card.Text>
            <Button className='but' variant='primary' onClick={handleShowModal}>En savoir plus</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='bodc'>
          <Card.Img src='https://brandlogos.net/wp-content/uploads/2014/10/marlboro-logo.png' ></Card.Img>
          <Card.Body>
            <Card.Title>Malboro</Card.Title>
            <Card.Text>
              Recherche Alternant rapidement
            </Card.Text>
            <Button className='but' variant='primary' onClick={handleShowModal}>En savoir plus</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={3}>
        <Card className='bodc'>
          <Card.Img src='https://freepngimg.com/thumb/categories/1803.png' ></Card.Img>
          <Card.Body>
            <Card.Title>Nike</Card.Title>
            <Card.Text>
              Recherche Alternant rapidement
            </Card.Text>
            <Button className='but' variant='primary' onClick={handleShowModal}>En savoir plus</Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>
        <Modal show={showModal} onHide={handleCloseModal} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Capgemini</Modal.Title>
        </Modal.Header>
        <Modal.Body  >
            <p>Description de l'annonce : Recherche Alternant rapidement</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
    );
};

export default Cardj;