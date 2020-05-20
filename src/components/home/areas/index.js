import React from "react"
import Each from "./each"
import managment from "../../../assets/images/icon-manage.svg"
import measure from "../../../assets/images/icon-measure.svg"
import report from "../../../assets/images/icon-report.svg"
import validate from "../../../assets/images/icon-validate.svg"
import elements_dots from "../../../assets/images/Dots.svg"

export default function Ares({ content_area, content_area_title }) {
  //content
  console.log(content_area_title)
  //jsx
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
                  comming_soon={data.comming_soon}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
