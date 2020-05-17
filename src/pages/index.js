import React, { useState, useEffect } from "react"
import LoadingScreen from "react-loading-screen"
import Layout from "../components/layout/."
import SEO from "../components/layout/seo.js"
import Home from "../components/home/."
import logo from "../assets/images/topia.svg"
import "../assets/css/main.scss"
const IndexPage = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)
  })
  return (
    <>
      {loading ? (
        <LoadingScreen
          loading={true}
          bgColor="#000"
          spinnerColor="#fff"
          textColor="#fff"
          logoSrc={logo}
          text=""
        />
      ) : (
        <Layout>
          <SEO title="Home" />
          <Home />
        </Layout>
      )}
    </>
  )
}

export default IndexPage
