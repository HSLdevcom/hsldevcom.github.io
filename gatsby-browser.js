import "prismjs/themes/prism.css"

import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    #gatsby-noscript {
        display: none;
    }
    body {
        background: #fafafa;
    }
`;

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);