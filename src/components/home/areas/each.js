import React from "react"

export default function each({ title, description, image, comming_soon }) {
  return (
    <div className="each">
      <img src={image} alt="" />
      <h5>
        {title}
        {!!comming_soon && <span>SOON</span>}
      </h5>
      <p>{description}</p>
    </div>
  )
}
