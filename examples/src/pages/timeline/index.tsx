import React, { RefObject, useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Timeline = () => {
  const cartRef = useRef() as RefObject<HTMLDivElement>;
  useEffect(() => {
    const cart = cartRef.current;
    gsap
      .timeline({ repeat: -1 })
      .to(cart, { y: 190, duration: 1 })
      .to(cart, { x: 430, duration: 2 })
      .to(cart, { y: 0, duration: 1 })
      .to(cart, { x: 0, duration: 2 });
  }, []);
  return (
    <div className="cart-list cart-list--block">
      <div className="cart" ref={cartRef}>
        Data
      </div>
    </div>
  );
};
