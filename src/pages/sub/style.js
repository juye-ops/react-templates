import styled from "styled-components";

import logo from "assets/images/logo.svg"

export const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    background-color: rgb(60, 64, 72);
    height: 100vh;
`

export const ImageLogo = styled.img.attrs({
        src: logo,
        alt: ""
    })`
    height: 40vmin;
    pointer-events: none;
`

export const PlainText = styled.p`

`

export const Anchor = styled.a.attrs({
        href: "/",
    })`
    font-size: 20px;
`