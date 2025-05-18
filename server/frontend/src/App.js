import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import LoginPanel from './components/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}

export default App;