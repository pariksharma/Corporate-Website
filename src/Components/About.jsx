import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img from '../assets/images/img1.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';


function AppAbout() {
    const html = 80;
    const Responsive = 60;
    const photoshop = 50;
  return (
    <section id='about' className='block about-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>About Us</h2>
                <div className='subtitle'>
                    Learn more about us
                </div>
            </div>
            <Row>
                <Col sm={6}>
                    <Image src={img} />
                </Col>
                <Col sm={6}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus similique minima quae expedita quam facere possimus, asperiores provident tenetur deserunt temporibus aperiam magni numquam fuga officiis architecto ex saepe autem nihil obcaecati sint veritatis ratione!</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ea nostrum sapiente enim id! Cum quas reiciendis, facere dolorem optio quod, non illo harum tempore soluta maiores ea voluptatem! Sapiente.</p>
                    <div className='progress-block'>
                        <h4>HTML / CSS / JAVASCRIPT</h4>
                        <ProgressBar now={html} label={`${html}%`} />
                    </div>
                    <div className='progress-block'>
                        <h4>RESPONSIVE</h4>
                        <ProgressBar now={Responsive} label={`${Responsive}%`} />
                    </div>
                    <div className='progress-block'>
                        <h4>PHOTOSHOP</h4>
                        <ProgressBar now={photoshop} label={`${photoshop}%`} />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AppAbout