import React from "react"

import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import { Row, Col } from "react-bootstrap"

const contactPage = () => {
    return (
        <Layout>
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

                
            </div>
        </Layout>
    )
}

export default contactPage