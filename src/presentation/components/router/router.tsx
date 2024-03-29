import { Login } from '@/presentation/pages';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/presentation/styles/global.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
