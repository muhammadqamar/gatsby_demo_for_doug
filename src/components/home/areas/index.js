import React from "react"
import Each from "./each"
import managment from "../../../assets/images/icon-manage.svg"
import measure from "../../../assets/images/icon-measure.svg"
import report from "../../../assets/images/icon-report.svg"
import validate from "../../../assets/images/icon-validate.svg"
export default function Ares({ slide }) {
  //content
  const content = {
    heading: "Bring your impact up to speed in the following areas",
    areas: [
      {
        title: "Impact Management",
        description:
          "Here’s some super smart text about Topia being the best place for social organisations to measure all their social impact.",
        image: managment,
        comming_soon: false,
      },
      {
        title: "Impact Measurement",
        description:
          "Here’s some super smart text about Topia being the best place for social organisations to measure all their social impact.",
        image: measure,
        comming_soon: false,
      },
      {
        title: "Impact Validation",
        description:
          "Here’s some super smart text about Topia being the best place for social organisations to measure all their social impact.",
        image: validate,
        comming_soon: true,
      },
      {
        title: "Impact Reporting ",
        description:
          "Here’s some super smart text about Topia being the best place for social organisations to measure all their social impact.",
        image: report,
        comming_soon: true,
      },
    ],
  }

  //jsx
  return (
    <div className="area">
      <div className="content">
        <h2>{content.heading}</h2>
        <div className="flex-content">
          {!!content.areas &&
            content.areas.map(data => {
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
