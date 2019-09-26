import React from "react"
import { graphql } from "gatsby"

import Container from "../components/Container"
import SEO from "../components/SEO";

export default ({ data, pageContext }) => (
  <Container>
      <SEO pageTitle={data.markdownRemark.frontmatter.title} pageDescription={data.markdownRemark.excerpt} pagePath={pageContext.slug} />
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