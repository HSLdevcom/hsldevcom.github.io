import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          title
          shareImage
          colors {
            primary
            secondary
            background
          }
        }
      }
    }
  `)

  return site.siteMetadata
}
