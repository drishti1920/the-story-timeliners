import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Photography from '../pages/photography/Photography';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photography" element={<Photography/>} />
          <Route path="blogs" element={<div>Blogs Page</div>} />
          <Route path="learning-path" element={<div>Learning Path Page</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes; 