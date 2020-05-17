import React from "react"
import Banner from "./banner/."
import Area from "./areas/."
import Team from "./teams/."
import Mail from "./mail/."
import { useStaticQuery, graphql } from "gatsby"
export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              name
              info
              heading
              image
              doodle
              description
            }
          }
        }
      }
    }
  `)

  //markdown controller
  const content_area = []
  const content_team = []
  const content_banner = []
  data.allMarkdownRemark.edges.map(data => {
    switch (data.node.frontmatter.slug) {
      case "Area":
        content_area.push(data.node.frontmatter)
        break
      case "team":
        content_team.push(data.node.frontmatter)
        break
      case "banner":
        content_banner.push(data.node.frontmatter)
        break
    }
  })

  return (
    <div className="Home">
      <Banner content_banner={content_banner} />

      <Area content_area={content_area} />

      <Team content_team={content_team} />
      <Mail />
    </div>
  )
}
