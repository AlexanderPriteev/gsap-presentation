import React from 'react';
import './styles.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Video } from './pages/video';
import { Move } from './pages/tween';
import { SetMove } from './pages/set';
import { SetDefaults } from './pages/default';
import { SetMedia } from './pages/media';
import { QuickTo } from './pages/quickTo/to';
import { QuickSetter } from './pages/quickTo/setter';
import { Context } from './pages/context';
import { TweenID } from './pages/tweenID';
import { TweenGet } from './pages/tweenGet';
import { Timeline } from './pages/timeline';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/video" element={<Video />} />
        <Route path="/move" element={<Move />} />
        <Route path="/set" element={<SetMove />} />
        <Route path="/default" element={<SetDefaults />} />
        <Route path="/media" element={<SetMedia />} />
        <Route path="/quick-to" element={<QuickTo />} />
        <Route path="/quick-setter" element={<QuickSetter />} />
        <Route path="/context" element={<Context />} />
        <Route path="/tween-id" element={<TweenID />} />
        <Route path="/tween-get" element={<TweenGet />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
