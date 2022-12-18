import gsap from 'gsap';
import React, { RefObject, useEffect, useRef } from 'react';

export const Snap = () => {
  const cartRef = useRef() as RefObject<HTMLDivElement>;
  useEffect(() => {
    const elem = cartRef.current;
    gsap.to(elem, {
      duration: 4,
      x: 430,
      snap: {
        x: 86, // 430 / 5
      },
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="cart-list cart-list--snap">
      <div className="cart" ref={cartRef}>
        Data
      </div>
    </div>
  );
};
