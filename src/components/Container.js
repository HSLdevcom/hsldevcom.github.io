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
  margin: 2rem 2rem;
  flex: 1 0 auto;
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
