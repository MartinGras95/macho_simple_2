import React from "react"

import footerStyles from "./footer.module.scss"
import { Row, Col, } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className={footerStyles.container}>
            <Row>
                <Col md={4} xs={12}>
                    <p style={{color:"#ffffff", fontSize:"2rem",fontWeight:"bold"}}>GoGo Pizza!</p>
                </Col>
                <Col md={4} xs={12}>
                    <p style={{fontSize:"1.3rem", fontWeight:"600",}}>Visit Us</p>
                    <div style={{lineHeight:"4px"}}>
                        <p style={{fontWeight:"550",lineHeight:"5px"}}>Address:</p>
                        <p>123</p>
                        <p>Some Street</p>
                        <p>Edinburgh</p>
                        <p>EH9 3UJ</p>
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <p style={{fontSize:"1.3rem", fontWeight:"600"}}>Connect With Us</p>
                    <div style={{lineHeight:"4px"}}>
                        <p style={{fontWeight:"550",lineHeight:"5px"}}>Contact:</p>
                        <p>gogopizza@gmail.com</p>
                        <p>+44 777 888 97834</p>
                        <p>@GoGoPizza</p>
                    </div>

                </Col>
            </Row>

            <Row>
            <Col>
                <p>Copyright Macho Lemon 2020</p>
            </Col>
            
            </Row>

        </footer>
    )
}

export default Footer