import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/."
import SEO from "../components/layout/seo.js"
import Home from "../components/home/."
import "../assets/css/main.scss"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
