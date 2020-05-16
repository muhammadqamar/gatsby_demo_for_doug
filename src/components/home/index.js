import React from "react"
import Banner from "./banner/."
import Area from "./areas/."
import Team from "./teams/."
import Mail from "./mail/."
import ScrollAnimation from "react-animate-on-scroll"

export default function Home() {
  return (
    <div className="Home">
      <Banner />

      <Area />

      <Team />
      <Mail />
    </div>
  )
}
