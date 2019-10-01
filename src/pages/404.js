import React from "react"
import { Link } from "gatsby"

import Container from "../components/Container"
import SEO from "../components/SEO"

export default () => (
  <Container>
    <SEO pageTitle="Page not found"/>
    <h1>Page not found</h1>
    <p>The page you were looking for does not exist. Maybe go to <Link to="/">front page</Link>?</p>
  </Container>
)
