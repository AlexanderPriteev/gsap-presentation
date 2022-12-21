import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div className="nav-block">
          <NavLink to="/" className="nav-item nav-title">
            Home
          </NavLink>
        </div>
        <div className="nav-block">
          <NavLink to="/move-menu" className="nav-item nav-title">
            Tween
          </NavLink>
        </div>
        <div className="nav-block">
          <NavLink to="/timeline-menu" className="nav-item nav-title">
            Timeline
          </NavLink>
        </div>
        <div className="nav-block">
          <NavLink to="/eases-menu" className="nav-item nav-title">
            Eases
          </NavLink>
        </div>
        <div className="nav-block">
          <span className="nav-title">METHODS</span>
          <NavLink to="/set-menu" className="nav-item">
            gsap.set()
          </NavLink>
          <NavLink to="/default-menu" className="nav-item">
            gsap.defaults()
          </NavLink>
          <NavLink to="/media-menu" className="nav-item">
            gsap.matchMedia()
          </NavLink>
          <NavLink to="/quick-to-menu" className="nav-item">
            gsap.quickTo()
          </NavLink>
          <NavLink to="/quick-setter-menu" className="nav-item">
            gsap.quickSetter()
          </NavLink>
          <NavLink to="/context-menu" className="nav-item">
            gsap.context()
          </NavLink>
          <NavLink to="/tween-id-menu" className="nav-item">
            gsap.getById()
          </NavLink>
          <NavLink to="/tween-get-menu" className="nav-item">
            gsap.getTweensOf()
          </NavLink>
          <NavLink to="/delayed-menu" className="nav-item">
            gsap.delayedCall()
          </NavLink>
        </div>
        <div className="nav-block">
          <span className="nav-title">Properties</span>
          <NavLink to="/effects-menu" className="nav-item">
            gsap.effects
          </NavLink>
          <NavLink to="/timeline-global-menu" className="nav-item">
            gsap.globalTimeline
          </NavLink>
          <NavLink to="/ticker-menu" className="nav-item">
            gsap.ticker
          </NavLink>
        </div>
        <div className="nav-block">
          <span className="nav-title">Utility</span>
          <NavLink to="/distribute-menu" className="nav-item">
            distribute()
          </NavLink>
          <NavLink to="/select-menu" className="nav-item">
            selector() 1
          </NavLink>
          <NavLink to="/select-context-menu" className="nav-item">
            selector() 2
          </NavLink>
          <NavLink to="/shuffle-menu" className="nav-item">
            shuffle()
          </NavLink>
          <NavLink to="/wrap-menu" className="nav-item">
            wrap() / wrapYoyo()
          </NavLink>
        </div>
        <div className="nav-block">
          <span className="nav-title">Plugins</span>
          <NavLink to="/array-end-menu" className="nav-item">
            EndArrayPlugin
          </NavLink>
          <NavLink to="/snap-menu" className="nav-item">
            SnapPlugin
          </NavLink>
          <NavLink to="/trigger-scroll-menu" className="nav-item">
            ScrollTrigger
          </NavLink>
          <NavLink to="/scroll-to-menu" className="nav-item">
            ScrollToPlugin
          </NavLink>
          <NavLink to="/text-menu" className="nav-item">
            TextPlugin
          </NavLink>
          <NavLink to="/flip-menu" className="nav-item">
            Flip 1
          </NavLink>
          <NavLink to="/flip-shuffle-menu" className="nav-item">
            Flip 2
          </NavLink>
          <NavLink to="/motion-path-menu" className="nav-item">
            MotionPathPlugin
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
