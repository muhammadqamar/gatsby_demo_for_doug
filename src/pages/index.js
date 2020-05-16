import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/."
import SEO from "../components/layout/seo.js"
import Home from "../components/home/."
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
