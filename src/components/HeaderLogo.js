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
                    desktop: fixed(height: 80, width: 215) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                    mobile: fixed(height: 48, width: 128) {
                        ...GatsbyImageSharpFixed_noBase64
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

    return <Logo fixed={sources} loading="eager" fadeIn={false} />
}