import React from "react"
import Banner from "./banner/."
import Area from "./areas/."
import Team from "./teams/."
import Mail from "./mail/."

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
