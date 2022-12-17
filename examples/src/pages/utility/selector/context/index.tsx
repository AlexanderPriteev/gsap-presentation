import gsap from 'gsap';
import React, { RefObject, useEffect, useRef } from 'react';

export const ContextSelector = () => {
  const cartRef1 = useRef() as RefObject<HTMLDivElement>;
  const cartRef2 = useRef() as RefObject<HTMLDivElement>;
  useEffect(() => {
    const select1 = gsap.utils.selector(cartRef1);
    const select2 = gsap.utils.selector(cartRef2);
    gsap.fromTo(select1('.cart:nth-child(even)'), { x: -350 }, { x: 350, duration: 3, repeat: -1 });
    gsap.fromTo(select1('.cart:nth-child(odd)'), { x: 350 }, { x: -350, duration: 3, repeat: -1 });
    gsap.fromTo(select2('.cart:nth-child(even)'), { y: -350 }, { y: 350, duration: 3, repeat: -1 });
    gsap.fromTo(select2('.cart:nth-child(odd)'), { y: 350 }, { y: -350, duration: 3, repeat: -1 });
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
