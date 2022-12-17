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
import { DelayedCall } from './pages/delayed';
import { Effects } from './pages/effects';
import { TimelineGlobal } from './pages/globalTimeLine';
import { Ticker } from './pages/ticker';
import { Distribute } from './pages/utility/distribute';
import { Select } from './pages/utility/selector/array';
import { ContextSelector } from './pages/utility/selector/context';
import { Shuffle } from './pages/utility/shuffle';
import { Wrap } from './pages/utility/wrap';
import { Eases } from './pages/eases';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Eases />} />
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
        <Route path="/timeline-global" element={<TimelineGlobal />} />
        <Route path="/delayed" element={<DelayedCall />} />
        <Route path="/effects" element={<Effects />} />
        <Route path="/ticker" element={<Ticker />} />
        <Route path="/distribute" element={<Distribute />} />
        <Route path="/select" element={<Select />} />
        <Route path="/select-context" element={<ContextSelector />} />
        <Route path="/shuffle" element={<Shuffle />} />
        <Route path="/wrap" element={<Wrap />} />
        <Route path="/eases" element={<Eases />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
