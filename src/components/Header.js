import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import useSiteMetadata from "../hooks/useSiteMetadata"
import HeaderLogo from "./HeaderLogo"

const Header = styled.header`
  z-index: 3;
  background-color: ${props => props.color};
  color: white;
  padding: 1rem;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 auto;
`

const HeaderTitle = styled.h1`
  display: inline;
  flex-grow: 1;
  font-size: 1rem;

  @media(min-width: 768px) {
    font-size: 1.5rem;
  }
`

export default () => {
  const siteMetadata = useSiteMetadata()

  return (
    <Header color={siteMetadata.colors.primary}>
      <HeaderContainer>
        <a href="https://hsl.fi/en"><HeaderLogo /></a>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', margin: '0 1rem' }}><HeaderTitle>{siteMetadata.title}</HeaderTitle></Link>
      </HeaderContainer>
    </Header>
  )
}
