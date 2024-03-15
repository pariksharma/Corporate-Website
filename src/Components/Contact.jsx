import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id='contact' className='block contact-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Contact Us</h2>
                <div className='subtitle'>
                    get connected with us
                </div>
            </div>
            <Form className='contact-form'>
                <Row>
                    <Col sm={4}>
                        <Form.Control type='text' placeholder='Enter your full name' required />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type='email' placeholder='Enter your email address' required />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type='tel' placeholder='enter your contact number' required />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Control as="textarea" placeholder="Enter your message..." required />
                    </Col>
                </Row>
                <div className='btn-holder'>
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
        </Container>
        <div className='google-map'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95101732545!2d76.7635740668207!3d28.644287356528732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1710495481421!5m2!1sen!2sin" loading="lazy"></iframe>
        </div>
        <Container fluid>
            <div className='contact-info'>
                <ul>
                    <li>
                        <i className='fas fa-envelope'></i>
                        hello@domain.com
                    </li>
                    <li>
                        <i className='fas fa-phone'></i>
                        000-000-0000
                    </li>
                    <li>
                        <i className='fas fa-map-marker-alt'></i>
                        Delhi, India
                    </li>
                </ul>
            </div>
        </Container>
    </section>
  )
}

export default AppContact