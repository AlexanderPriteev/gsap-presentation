import React, { RefObject, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export const ScrollTo = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const cartListRef = useRef() as RefObject<HTMLDivElement>;

  const scroll = (elemClass: string, time?: number) => {
    gsap.to(window, { duration: time || 2, scrollTo: elemClass, ease: 'power3.out' });
  };
  return (
    <div className="cart-list" ref={cartListRef}>
      <div className="block block--1">
        <span className="btn btn-nav" onClick={() => scroll('.block--3')}>
          Go To Block 3
        </span>
      </div>
      <div className="block block--2">
        <span className="btn" onClick={() => scroll('.block--1', 5)}>
          Go To Block 1
        </span>
      </div>
      <div className="block block--3">
        <span className="btn" onClick={() => scroll('.block--1', 4)}>
          Go To Block 1
        </span>
      </div>
    </div>
  );
};
