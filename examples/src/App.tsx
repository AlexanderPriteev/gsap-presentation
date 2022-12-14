import React from 'react';
import './styles.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Video } from './pages/video';
import { Move } from './pages/move';
import { SetMove } from './pages/set';
import { SetDefaults } from './pages/default';
import { SetMedia } from './pages/media';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SetMedia />} />
        <Route path="/video" element={<Video />} />
        <Route path="/move" element={<Move />} />
        <Route path="/set" element={<SetMove />} />
        <Route path="/default" element={<SetDefaults />} />
        <Route path="/media" element={<SetMedia />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
