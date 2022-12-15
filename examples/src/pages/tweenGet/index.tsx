import React, { RefObject, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const TweenGet = () => {
  const [isPause, setIsPause] = useState(false);
  const [reload, setReload] = useState(false);
  const cartRef = useRef() as RefObject<HTMLDivElement>;
  useEffect(() => {
    const cart = cartRef.current;
    gsap.set(cart, { x: -250 });
    const tween = gsap.to(cart, { yoyo: true, repeat: -1, opacity: 0.1, x: 250, duration: 3 });
    return () => {
      tween.revert();
    };
  }, [reload]);
  const pause = () => {
    const tweens = gsap.getTweensOf(cartRef.current);
    if (isPause) {
      tweens.forEach((e) => e.play());
    } else {
      tweens.forEach((e) => e.pause());
    }
    setIsPause(!isPause);
  };
  const removeOpacity = () => gsap.killTweensOf(cartRef.current, 'opacity');
  const removeTweens = () => gsap.killTweensOf(cartRef.current);

  const reloadTweens = () => {
    removeTweens();
    setTimeout(() => setReload(!reload));
  };
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={pause}>
          {isPause ? 'play' : 'pause'}
        </span>
        <span className="btn" onClick={removeOpacity}>
          remove opacity
        </span>
        <span className="btn" onClick={removeTweens}>
          remove tweens
        </span>
        <span className="btn" onClick={reloadTweens}>
          reload tweens
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
