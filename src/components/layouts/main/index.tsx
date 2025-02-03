import React from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './style.js';

export default function MainLayout() {
    return (
        <div>
            <S.AppHeader/>
                <Outlet/>
            <S.AppFooter/>
        </div>
    )
};