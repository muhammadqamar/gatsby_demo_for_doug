import React from "react"
import member1 from "../../../assets/images/alex.svg"
import member2 from "../../../assets/images/james.svg"
import spread1 from "../../../assets/images/AlexDoodles.svg"
import spread2 from "../../../assets/images/JamesDoodles.svg"
import { useStaticQuery, graphql } from "gatsby"
import Member from "./memeber"
export default function Team() {
  //netlify CMS
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              doodle
              image
              info
              name
              title
            }
          }
        }
      }
    }
  `)
  console.log(data)
  //data

  const content = data.allMarkdownRemark.edges
  console.log(content)
  return (
    <div className="Team">
      <div className="content">
        <h2>The Team</h2>
        <div className="flex-team">
          {!!content &&
            content.map(data => {
              return (
                <>
                  {" "}
                  {!!data.node.frontmatter.name && (
                    <Member
                      image={data.node.frontmatter.image}
                      doodle={data.node.frontmatter.doodle}
                      description={data.node.frontmatter.info}
                      title={data.node.frontmatter.name}
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
