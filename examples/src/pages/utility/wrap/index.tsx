import gsap from 'gsap';
import React, { RefObject, useEffect, useRef } from 'react';

export const Wrap = () => {
  const cartRef1 = useRef() as RefObject<HTMLDivElement>;
  const cartRef2 = useRef() as RefObject<HTMLDivElement>;
  gsap.defaults({ duration: 40, ease: 'none', repeat: -1, x: 9999 });
  useEffect(() => {
    const el1 = cartRef1.current;
    const el2 = cartRef2.current;
    const wrap = gsap.utils.wrap(-270, window.innerWidth);
    const wrapYoyo = gsap.utils.wrapYoyo(0, window.innerWidth - 290);
    gsap.to(el1, {
      modifiers: {
        x: (x) => wrap(parseFloat(x)) + 'px',
      },
    });
    gsap.to(el2, {
      modifiers: {
        x: (x) => wrapYoyo(parseFloat(x)) + 'px',
      },
    });
  }, []);

  return (
    <div className="cart-list cart-list--wrap">
      <div className="cart" ref={cartRef1}>
        Wrap
      </div>
      <div className="cart" ref={cartRef2}>
        WrapYoyo
      </div>
    </div>
  );
};
