import React from "react"
import { graphql } from "gatsby"

import Container from "../components/Container"

export default ({ data }) => (
  <Container>
      <h1>{ data.markdownRemark.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Container>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt(pruneLength: 200, format: PLAIN)
    }
  }
`;