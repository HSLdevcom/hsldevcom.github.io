import React from "react"
import styled from "styled-components"

const Container = styled.main`
    margin: 4rem auto;
    max-width: 1200px;
`

export default ({ children }) => (
    <Container>{ children }</Container>
)