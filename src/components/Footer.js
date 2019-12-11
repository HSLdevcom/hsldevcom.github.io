import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = styled.footer`
  background-color: #3d454f;
  color: #cccccc;
  flex-shrink: 0;

  & a {
      color: #cccccc;
  }
`

const FooterContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 800px;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
      padding: 1rem;
      flex-direction: row;
      align-items: normal;
  }
`

const LinkList = styled.ul`
    margin: 0 0 0 0;
    list-style-position: inside;

    @media(min-width: 768px) {
        margin: 0 auto 0 0;
    }
`

const Divider = styled.hr`
  background-color: #cccccc;
  margin: 0.5rem 0 0.5rem 0;
  align-self: stretch;

  @media(min-width: 768px) {
      display: none;
  }
`

const ContactIcon = styled(Img)`
  margin-right: 4px;
  vertical-align: middle;
`

const ContactList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  
  @media(min-width: 768px) {
      margin: 0 0 0 auto;
  }
`

export default () => {
    const { twitter, facebook, github } = useStaticQuery(graphql`
        {
            twitter: file(relativePath: { eq: "twitter_logo.png" }) {
                childImageSharp {
                    fixed(height: 16, width: 16) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
            facebook: file(relativePath: { eq: "facebook_logo.png" }) {
                childImageSharp {
                    fixed(height: 16, width: 16) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
            github: file(relativePath: { eq: "github_logo.png" }) {
                childImageSharp {
                    fixed(height: 16, width: 16) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
        }
    `)

    return <Footer>
        <FooterContent>
            <LinkList>
                <li><a href="https://hsl.fi/en">HSL.fi</a></li>
                <li><a href="https://www.hsl.fi/en/opendata">HSL open data</a></li>
            </LinkList>
            <Divider />
            <ContactList>
                <li><a href="https://twitter.com/HSLdevcom/"><ContactIcon fixed={twitter.childImageSharp.fixed} />HSLdevcom</a></li>
                <li><a href="https://www.facebook.com/HSLdevcom/"><ContactIcon fixed={facebook.childImageSharp.fixed} />HSLdevcom</a></li>
                <li><a href="https://github.com/HSLdevcom"><ContactIcon fixed={github.childImageSharp.fixed} />HSLdevcom</a></li>
            </ContactList>
        </FooterContent>
    </Footer>
}