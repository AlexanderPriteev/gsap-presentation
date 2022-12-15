import gsap from 'gsap';
import React, { RefObject, useEffect, useRef } from 'react';

export const Context = () => {
  const cartRef1 = useRef() as RefObject<HTMLDivElement>;
  const cartRef2 = useRef() as RefObject<HTMLDivElement>;

  useEffect(() => {
    gsap.context(() => {
      gsap.fromTo('.cart:nth-child(even)', { x: -350 }, { x: 350, duration: 3, repeat: -1 });
      gsap.fromTo('.cart:nth-child(odd)', { x: 350 }, { x: -350, duration: 3, repeat: -1 });
    }, cartRef1);
    gsap.context(() => {
      gsap.fromTo('.cart:nth-child(even)', { y: -350 }, { y: 350, duration: 3, repeat: -1 });
      gsap.fromTo('.cart:nth-child(odd)', { y: 350 }, { y: -350, duration: 3, repeat: -1 });
    }, cartRef2);
  }, []);

  return (
    <div className="cart-wrapper">
      <div className="cart-list cart-list--column" ref={cartRef1}>
        <div className="cart">Data</div>
        <div className="cart">Data</div>
      </div>
      <div className="cart-list cart-list--column" ref={cartRef2}>
        <div className="cart">Data</div>
        <div className="cart">Data</div>
      </div>
    </div>
  );
};
