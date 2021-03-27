import React from "react"
import Each from "./each"
import elements_dots from "../../../assets/images/Dots.svg"

export default function Ares({ content_area, content_area_title }) {
  return (
    <div className="area">
      <img src={elements_dots} alt="" className="dots" />
      <div className="content">
        <h2>{content_area_title.length > 0 && content_area_title[0].name}</h2>
        <div className="flex-content">
          {!!content_area &&
            content_area.map(data => {
              return (
                <Each
                  title={data.title}
                  image={data.image}
                  description={data.description}
                  comming_soon={data.soon}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
