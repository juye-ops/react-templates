import React from "react";
import * as S from "./style.js"

export default function SubPage() {
    return (
        <div>
            <S.SubWrapper>
                <S.ImageLogo/>
                <S.PlainText>Sub page</S.PlainText>
                <S.Anchor>Link to Main page</S.Anchor>
            </S.SubWrapper>
        </div>
    )
};