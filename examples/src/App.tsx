import React from 'react';
import './styles.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
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
import { EndArray } from './pages/plagins/endArray';
import { Snap } from './pages/plagins/snap';
import { Home } from './pages/main';
import { Index } from './pages/layout';
import { FlipMove } from './pages/plagins/flip/all';
import { FlipShuffle } from './pages/plagins/flip/shuffle';
import { Text } from './pages/plagins/text';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />

          <Route path="/move" element={<Move />} />
          <Route path="/move-menu" element={<Move />} />

          <Route path="/set" element={<SetMove />} />
          <Route path="/set-menu" element={<SetMove />} />

          <Route path="/default" element={<SetDefaults />} />
          <Route path="/default-menu" element={<SetDefaults />} />

          <Route path="/media" element={<SetMedia />} />
          <Route path="/media-menu" element={<SetMedia />} />

          <Route path="/quick-to" element={<QuickTo />} />
          <Route path="/quick-to-menu" element={<QuickTo />} />

          <Route path="/quick-setter" element={<QuickSetter />} />
          <Route path="/quick-setter-menu" element={<QuickSetter />} />

          <Route path="/context" element={<Context />} />
          <Route path="/context-menu" element={<Context />} />

          <Route path="/tween-id" element={<TweenID />} />
          <Route path="/tween-id-menu" element={<TweenID />} />

          <Route path="/tween-get" element={<TweenGet />} />
          <Route path="/tween-get-menu" element={<TweenGet />} />

          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timeline-menu" element={<Timeline />} />

          <Route path="/timeline-global" element={<TimelineGlobal />} />
          <Route path="/timeline-global-menu" element={<TimelineGlobal />} />

          <Route path="/delayed" element={<DelayedCall />} />
          <Route path="/delayed-menu" element={<DelayedCall />} />

          <Route path="/effects" element={<Effects />} />
          <Route path="/effects-menu" element={<Effects />} />

          <Route path="/ticker" element={<Ticker />} />
          <Route path="/ticker-menu" element={<Ticker />} />

          <Route path="/distribute" element={<Distribute />} />
          <Route path="/distribute-menu" element={<Distribute />} />

          <Route path="/select" element={<Select />} />
          <Route path="/select-menu" element={<Select />} />

          <Route path="/select-context" element={<ContextSelector />} />
          <Route path="/select-context-menu" element={<ContextSelector />} />

          <Route path="/shuffle" element={<Shuffle />} />
          <Route path="/shuffle-menu" element={<Shuffle />} />

          <Route path="/wrap" element={<Wrap />} />
          <Route path="/wrap-menu" element={<Wrap />} />

          <Route path="/eases" element={<Eases />} />
          <Route path="/eases-menu" element={<Eases />} />

          <Route path="/array-end" element={<EndArray />} />
          <Route path="/array-end-menu" element={<EndArray />} />

          <Route path="/snap" element={<Snap />} />
          <Route path="/snap-menu" element={<Snap />} />

          <Route path="/flip" element={<FlipMove />} />
          <Route path="/flip-menu" element={<FlipMove />} />
          <Route path="/flip-shuffle" element={<FlipShuffle />} />
          <Route path="/flip-shuffle-menu" element={<FlipShuffle />} />

          <Route path="/text" element={<Text />} />
          <Route path="/text-menu" element={<Text />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
