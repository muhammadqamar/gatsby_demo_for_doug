import React from "react"

export default function Member({ image, doodle, description, title }) {
  var image_fix
  var doodle_fix
  try {
    image_fix = image.split("/")[image.split("/").length - 1]
  } catch (e) {}
  try {
    doodle_fix = doodle.split("/")[doodle.split("/").length - 1]
  } catch (e) {}
  return (
    <div className="item">
      <img
        className="doodle"
        src={!!doodle_fix && require("../../../../static/assets/" + doodle_fix)}
        alt=""
      />
      <img
        className="user"
        src={!!image_fix && require("../../../../static/assets/" + image_fix)}
        alt=""
      />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}
