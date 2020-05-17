import React from "react"

export default function each({ title, description, image, comming_soon }) {
  var images
  try {
    images = image.split("/")[image.split("/").length - 1]
  } catch (e) {}

  return (
    <div className="each">
      <img src={require("../../../../static/assets/" + images)} alt="" />
      <h5>
        {title}
        {!!comming_soon && <span>SOON</span>}
      </h5>
      <p>{description}</p>
    </div>
  )
}
