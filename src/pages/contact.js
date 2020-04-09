import React from "react"

import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import { Row, Col, Form, Button } from "react-bootstrap"
import SEO from "../components/seo"

const contactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <div className={contactStyles.container}>
                <div className={contactStyles.header}>
                    <h1 className={contactStyles.heading}>Contact Us</h1>
                </div>

                <Row style={{marginBottom:"2rem"}}>
                    <Col>
                        <h1>Get In Touch</h1>
                    </Col>
                </Row>
                
                <Row style={{textAlign:"start",marginLeft:"2rem"}}>
                    <Col md={4} xs={12}>
                        <h2>Question?</h2>
                        <Form style={{maxWidth:"300px"}} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="John Smith" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Type your message here..." />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                    </Col>
                    <Col md={8} xs={12} style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <h2>In a hurry? Call Now.</h2>
                        <h3>+44 73 555 432 299</h3>
                    </Col>  
                </Row>
                


                
            </div>
        </Layout>
    )
}

export default contactPage