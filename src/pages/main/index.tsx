import React from "react";
import * as S from "./style.js"

export default function MainPage() {
    return (
        <div>
            <S.MainWrapper>
                <S.ImageLogo/>
                <S.PlainText>Main page</S.PlainText>
                <S.Anchor>Link to Sub page</S.Anchor>
            </S.MainWrapper>
        </div>
    )
};