import React from "react"
import styled from "styled-components"

import Header from "./Header"

const Container = styled.main`
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0.5rem;
  background: white;
  border: 1px solid gray;
  border-radius: 4px;
`

export default ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
)
