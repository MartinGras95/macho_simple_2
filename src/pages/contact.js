import React from "react"

import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import { Row, Col } from "react-bootstrap"
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
                        <h2>Reservations</h2>
                        <p>gogopizzareserve@gmail.com</p>
                        <p>+44 73746 892 22</p>
                    </Col>
                    <Col md={4} xs={12}>
                        <h2>Enquiries</h2>
                        <p>gogopizzaenquire@gmail.com</p>
                    </Col>
                    <Col md={4} xs={12}>
                    <h2>Address</h2>
                    <div style={{lineHeight:"4px"}}>
                        <p>123</p>
                        <p>Some Street</p>
                        <p>Edinburgh</p>
                        <p>EH9 3UJ</p>
                    </div>
                </Col>
                </Row>
                <Row>
                    <Col>
                        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  
                            <input type="hidden" name="bot-field" />  
                            <input type="hidden" name="form-name" value="contact" />  
                            <div className="field half first">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="6" />
                            </div>
                            <ul className="actions">
                                <li>
                                <input type="submit" value="Send Message" className="special" />
                                </li>
                                <li>
                                <input type="reset" value="Clear" />
                                </li>
                            </ul>
                        </form>
                    </Col>
                </Row>

                
            </div>
        </Layout>
    )
}

export default contactPage