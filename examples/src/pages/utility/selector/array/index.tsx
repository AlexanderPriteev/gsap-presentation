import gsap from 'gsap';
import React, { RefObject, useEffect, useRef } from 'react';

export const Select = () => {
  const data = new Array(25).fill(null);
  const elem = useRef() as RefObject<HTMLDivElement>;
  const select = gsap.utils.selector(elem);
  useEffect(() => {
    const carts = select('.cart');
    gsap.set(carts, { opacity: 0, scale: 0 });
    gsap.to(carts, {
      opacity: 1,
      scale: 1,
      stagger: 0.05,
      repeat: -1,
      repeatDelay: 2,
      yoyo: true,
    });
  }, [select]);

  return (
    <div className="cart-list cart-list--distribute" ref={elem}>
      {data.map((e, i) => (
        <div key={i} className="cart cart--distribute" />
      ))}
    </div>
  );
};
