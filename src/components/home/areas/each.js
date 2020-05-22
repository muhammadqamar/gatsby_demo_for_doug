import React from "react"

export default function each({ title, description, image, comming_soon }) {
  var images
  try {
    images = image.split("/")[image.split("/").length - 1]
  } catch (e) {}

  return (
    <div className="each">
      <img src={require("../../../../static/assets/" + images)} alt="" />
      <div className="flex-soon">
        <h5>{title}</h5>
        {!!comming_soon && <span>SOON</span>}
      </div>
      <p>{description}</p>
    </div>
  )
}
