import React from "react"
import member1 from "../../../assets/images/alex.svg"
import member2 from "../../../assets/images/james.svg"
import spread1 from "../../../assets/images/AlexDoodles.svg"
import spread2 from "../../../assets/images/JamesDoodles.svg"
import Member from "./memeber"
export default function Team() {
  //data
  const content = {
    title: "The Team",
    memebers: [
      {
        doodle: spread2,
        name: "James Farrell",
        image: member2,
        info:
          "Here’s some super smart text about Topia being the best place for social organisations to measure all their social impact.",
      },
      {
        doodle: spread1,
        name: " Alexander Haase",
        image: member1,
        info:
          "Here’s some super smart text about Topia being the best place for social organisations to measure all their social impact.",
      },
    ],
  }

  return (
    <div className="Team">
      <div className="content">
        <h2>The Team</h2>
        <div className="flex-team">
          {!!content.memebers &&
            content.memebers.map(data => {
              return (
                <Member
                  image={data.image}
                  doodle={data.doodle}
                  description={data.info}
                  title={data.name}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
