import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const desktopMediaQuery = `min-width: 768px`

const Logo = styled(Img)`
  width: ${props => props.mobileWidth}px;
  height: ${props => props.mobileHeight}px;

  @media(${desktopMediaQuery}) {
      width: ${props => props.desktopWidth}px;
      height ${props => props.desktopHeight}px;
  }
`

export default () => {
    const { file: { childImageSharp: image } } = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "hsl_logo.png" }) {
                childImageSharp {
                    desktop: fluid(maxHeight: 80) {
                        height: presentationHeight
                        width: presentationWidth
                        ...GatsbyImageSharpFluid_noBase64
                    }
                    mobile: fluid(maxHeight: 48) {
                        height: presentationHeight
                        width: presentationWidth
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

    return <Logo fluid={sources} fadeIn={false} desktopHeight={desktop.height} desktopWidth={desktop.width} mobileHeight={mobile.height} mobileWidth={mobile.width} />
}