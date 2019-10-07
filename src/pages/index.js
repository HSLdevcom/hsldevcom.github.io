import React from "react"
import { graphql, Link } from "gatsby"

import Container from "../components/Container"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Container>
    <SEO pagePath='/' />
    <h1>HSL developer documentation</h1>
    <ul>
      { data.allMarkdownRemark.nodes.map(page => <li key={page.fields.slug}><Link to={page.fields.slug}>{page.frontmatter.title}</Link></li>)}
    </ul>
  </Container>
)

export const query = graphql`
  {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/^\/[^\/]*\/$/" }}}, sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
