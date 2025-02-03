import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "components/layouts/main";

import MainPage from "pages/main"
import SubPage from "pages/sub"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="/no-layout" element={<SubPage />} /> {/* Header, Footer 없음 */}
      </Routes>
    </BrowserRouter>
  );
};