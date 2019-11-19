import React from "react"
import { graphql } from "gatsby"

import Container from "../components/Container"
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default ({ data, pageContext }) => (
  <Container>
      <Breadcrumbs breadcrumbs={[ ...pageContext.breadcrumbs, { path: pageContext.slug, title: data.markdownRemark.frontmatter.title }]} />
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