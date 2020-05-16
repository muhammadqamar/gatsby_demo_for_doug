import React from "react"
import Signup from "./signup"
export default function Mail() {
  const content = {
    singup: "Stay tuned",
    info: "Stay up to date on news from Topia and in the impact space",
  }
  return (
    <div className="Mail">
      <div className="content">
        <div className="flex-email">
          <div className="box">
            <h3>{content.singup}</h3>
            <p>{content.info}</p>
          </div>
          <div className="boxsecond">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  )
}
