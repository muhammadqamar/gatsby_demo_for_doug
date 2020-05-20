import React from "react"
import Signup from "./signup"
export default function Mail({ content_mail }) {
  console.log(content_mail)
  const content = {
    singup: "Stay tuned",
    info: content_mail.length > 0 && content_mail[0].info,
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
