import React from "react"

export default function Member({ image, doodle, description, title }) {
  return (
    <div className="item">
      <img className="doodle" src={doodle} alt="" />
      <img className="user" src={image} alt="" />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}
