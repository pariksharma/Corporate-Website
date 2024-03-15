import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
    {
      id: 1,
      plan: 'Basic',
      price: '£49',
      features: ['Wireframing', 'Visual Design', '5 pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.google.com'
    },
    {
      id: 2,
      plan: 'Premium',
      price: '£149',
      features: ['Wireframing', 'Visual Design', '15 pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      plan: 'Ultimate',
      price: '£349',
      features: ['Wireframing', 'Visual Design', 'Unlimited pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.twitter.com'
    }
  ]

function AppPricing() {
  return (
    <section id='pricing' className='block pricing-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Pricing &amp; plans</h2>
                <div className='subtitle'>
                    check our pricing and plans
                </div>
            </div>
            <Row>
                {pricingData.map((pricing, index) => {
                    return <Col sm={4} key={index}>
                        <div className='heading'>
                            <h3>{pricing.plan}</h3>
                            <span className='price'>{pricing.price}</span>
                        </div>
                        <div className='content'>
                        <ListGroup>
                            {pricing.features.map((feature, index) => {
                                return <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                            })}
                        </ListGroup>
                        </div>
                        <div className='btn-holder'>
                            <a href={pricing.link} className='btn btn-primary'>Order Now</a>
                        </div>
                    </Col>
                })}
            </Row>
        </Container>
    </section>
  )
}

export default AppPricing