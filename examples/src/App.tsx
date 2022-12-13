import React from 'react';
import './styles.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Video } from './pages/video';
import { Move } from './pages/move';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Move />} />
        <Route path="/video" element={<Video />} />
        <Route path="/move" element={<Move />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
