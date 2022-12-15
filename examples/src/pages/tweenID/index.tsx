import gsap from 'gsap';
import React, { RefObject, useEffect, useRef, useState } from 'react';

export const TweenID = () => {
  const [isPause, setIsPause] = useState(false);
  const cartRef = useRef() as RefObject<HTMLDivElement>;
  useEffect(() => {
    const cart = cartRef.current;
    gsap.set(cart, { x: -250 });
    const tween = gsap.to(cart, { id: 'cart', yoyo: true, repeat: -1, x: 250, duration: 3 });
    return () => {
      tween.revert();
    };
  }, []);
  const pause = () => {
    const tween = gsap.getById('cart');
    if (isPause) {
      tween.play();
    } else {
      tween.pause();
    }
    setIsPause(!isPause);
  };
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={pause}>
          {isPause ? 'play' : 'pause'}
        </span>
      </div>
      <div className="cart-list">
        <div className="cart" ref={cartRef}>
          Data
        </div>
      </div>
    </>
  );
};
