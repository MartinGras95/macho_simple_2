import React from "react"

import Layout from "../components/layout"
import { Row, Col } from "react-bootstrap"
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import aboutStyles from "./about.module.scss"


export default () => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    tomatoes:file(relativePath: {eq: "images/tomatoes.jpg"}) {
      childImageSharp {
        fixed(width:250 height:250){
          ...GatsbyImageSharpFixed
        }
      }
    }
    pizza:file(relativePath: {eq: "images/pizza.jpg"}) {
      childImageSharp {
        fixed(width:250 height:250){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

    return (     
        <Layout>
            <div className={aboutStyles.container}>
                <div className={aboutStyles.header}>
                  <h1 className={aboutStyles.heading}>About Us</h1>
                </div>
                <Row className={aboutStyles.about} style={{marginBottom:"4rem",maxWidth:"65%"}}>
                  <Col xs={12} md={12}>
                    <h2>History</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam et diam posuere, iaculis tortor vel, dictum urna. 
                    In eget dui id eros pretium porta at eu ex. Mauris non purus vitae nisi bibendum egestas. 
                    Nullam in felis tempus, dignissim dolor sit amet, sollicitudin tortor. Sed bibendum auctor 
                    velit quis consectetur. Aliquam at dapibus tellus, eu maximus urna. Donec vitae venenatis sem, 
                    eu aliquam risus. Aenean eget erat sed sapien ultrices facilisis. 
                    </p>
                  </Col>
                </Row>
                <Row className={aboutStyles.about}>
                  <Col xs={12} md={6}>
                    <h2>Freshest Ingredients</h2>
                    <p>We only use fresh ingredients bought from local suppliers.
                    Our cheese is flavourful and stretchy and our saucey base is made of the finest tomatoes. 
                    </p>
                    <Img 
                    style={{borderRadius:"180px"}}
                    fixed={data.tomatoes.childImageSharp.fixed}
                    alt="olkasdj"
                    />

                  </Col>
                  <Col xs={12} md={6}>
                    <h2>Tastiest Pizzas</h2>
                    <p>We have been awarded tastiest pizza of the year 2019. Our pizza is delicious a
                    nd we will deliver to you! 
                    Just try for yourself.
                    </p>
                    <Img 
                    style={{borderRadius:"180px"}}
                    fixed={data.pizza.childImageSharp.fixed}
                    alt="olkasdj"
                    />
                  </Col>
                </Row>
            </div>
        </Layout>
    )
}
