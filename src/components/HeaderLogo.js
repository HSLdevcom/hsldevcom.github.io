import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const desktopMediaQuery = `min-width: 768px`

const Logo = styled(Img)`
  width: 128px;
  height 48px;

  @media(${desktopMediaQuery}) {
      width: 215px;
      height: 80px;
  }
`

export default () => {
    const { file: { childImageSharp: image } } = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "hsl_logo.png" }) {
                childImageSharp {
                    desktop: fluid(maxHeight: 80, maxWidth: 215) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                    mobile: fluid(maxHeight: 48, maxWidth: 128) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `)

    const { mobile, desktop } = image

    const sources = [
        mobile,
        {
            ...desktop,
            media: `(${desktopMediaQuery})`
        }
    ]

    return <Logo fluid={sources} loading="eager" fadeIn={false} />
}