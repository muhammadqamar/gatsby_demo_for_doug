import React from "react"
import member1 from "../../../assets/images/alex.svg"
import member2 from "../../../assets/images/james.svg"
import spread1 from "../../../assets/images/AlexDoodles.svg"
import spread2 from "../../../assets/images/JamesDoodles.svg"
import { useStaticQuery, graphql } from "gatsby"
import Member from "./memeber"
export default function Team({ content_team }) {
  return (
    <div className="Team">
      <div className="content">
        <h2>The Team</h2>
        <div className="flex-team">
          {!!content_team &&
            content_team.map(data => {
              return (
                <>
                  {" "}
                  {!!data.name && (
                    <Member
                      image={data.image}
                      doodle={data.doodle}
                      description={data.info}
                      title={data.name}
                    />
                  )}
                </>
              )
            })}
        </div>
      </div>
    </div>
  )
}
