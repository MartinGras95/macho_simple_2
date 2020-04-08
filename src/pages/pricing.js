import React from "react"

import Layout from "../components/layout"
import menuStyles from "./menu.module.scss"
import { Row, Col } from "react-bootstrap"

const pricingPage = () => {
    return (
        <Layout>
            <div className={menuStyles.container}>
                <div className={menuStyles.header}>
                    <h1 className={menuStyles.heading}>Our Menu</h1>
                </div>
                <Row>
                    <Col md={12} xs={12}>
                        <h1>Menu</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12}>
                        <h2>Starters</h2>
                        <ol>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                        </ol>
                    </Col>
                    <Col md={6} xs={12}>
                        <h2>Mains</h2>
                        <ol>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12}>
                        <h2>Sides</h2>
                        <ol>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                        </ol>
                    </Col>
                    <Col md={6} xs={12}>
                        <h2>Desserts</h2>
                        <ol>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                            <li>Some food item</li>
                        </ol>
                    </Col>
                </Row>

            </div>

            
        </Layout>
    )
}

export default pricingPage