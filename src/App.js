import React, { useState } from 'react';
import './App.css';

// React Bootstrap import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Toast from 'react-bootstrap/Toast';

// Asset Import
import jumbotronImage from './img/jumbotron_cc.jpg'

const ContactToast = ({ children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Contact</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Contact Me</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
}

function App() {
  const jumboStyle = {
    backgroundImage: 'url(' + jumbotronImage + ')',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  return (
    <div className="App">

    <Jumbotron style={ jumboStyle }>

      <div class="d-flex justify-content-around">
      <div class="p-2">

      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <ContactToast>
          We now have Toasts
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ContactToast>
      </p>
      </div>
      </div>
    </Jumbotron>
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    <div class="d-flex justify-content-center">
    <div class="p-2">Flex item 1</div>
      <div class="p-2">Flex item 2</div>
      <div class="p-2">Flex item 3</div>
    </div>
</div>
  );
}

export default App;
