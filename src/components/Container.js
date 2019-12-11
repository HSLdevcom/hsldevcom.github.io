import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  margin: 0.75rem 0.75rem;

  @media(min-width: 768px) {
    margin: 2rem 2rem;
  }
`

const Content = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.75rem;
  background: white;
  border: 1px solid lightgray;
  border-radius: 4px;
  overflow: hidden;
`

export default ({ children }) => (
  <>
    <Container>
      <Header />
      <ContentWrapper>
        <Content>
          {children}
        </Content>
      </ContentWrapper>
      <Footer />
    </Container>
  </>
)
