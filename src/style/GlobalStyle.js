import styled, { createGlobalStyle } from "styled-components"

import jetBrainEot from "../assets/fonts/jetBrain/JetBrainsMono-Regular.eot"
import jetBrainWoff from "../assets/fonts/jetBrain/JetBrainsMono-Regular.woff"
import jetBrainWoff2 from "../assets/fonts/jetBrain/JetBrainsMono-Regular.woff2"

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "JetBrains Mono Regular";
    font-style: normal;
    src: url(${jetBrainWoff}) format('woff'),
         url(${jetBrainEot}) format('eot'),
         url(${jetBrainWoff2}) format('woff2');
  }
  * {
        font-family:"JetBrains Mono Regular";
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }
  body{
        background: #2b2a2a;
        color: white;
        overflow-x: hidden;
    }
    @media screen and (max-width: 768px){
        font-size: 14px;
    }

    ::selection {
        background: rgb(2, 212, 99);
        color: white;
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(transparent, rgb(2, 212, 99));
        border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(transparent, #00CDE2);
    }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export { GlobalStyle, Layout }
