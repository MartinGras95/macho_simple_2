import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbo"
import Slider from "../components/carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <Slider />
  </Layout>
)

export default IndexPage
