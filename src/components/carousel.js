import React from "react"

import { Carousel,Row,Col } from "react-bootstrap"

import slide1 from "../images/slider1-min.jpg"
import slide2 from "../images/slider2-min.jpg"
import slide3 from "../images/slider3-min.jpg"

import carouselStyles from "./carousel.module.scss"

const Slider = () => {
    return (

        <Row style={{minHeight:"100%"}}>
            <Col md={5} xs={12}>
                <Carousel className={carouselStyles.carousel} controls={false} indicators={false}>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={slide1}
                            alt="first slide"
                            
                        />

                    </Carousel.Item>
                    <Carousel.Item> 
                        <img 
                            className="d-block w-100"
                            src={slide2}
                            alt="second slide"
                            
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={slide3}
                            alt="third slide"
                            
                        />

                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col md={5} xs={12}>
                <div className={carouselStyles.textContainer} style={{paddingLeft:"2rem"}}>
                    <h3>Best Pizza in Edinburgh!</h3>
                    <p>Veggies es bonus vobis, proinde vos postulo essum magis 
                    kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. </p>

                    <h4>We Now Deliver</h4>
                    <p>Find us on JustEat and enjoy our pizza in the comfort of your home!</p>

                    <p style={{fontWeight:"600"}}>~GoGo Pizza Team</p>
                </div>
            </Col>
        </Row>
    )
}

export default Slider