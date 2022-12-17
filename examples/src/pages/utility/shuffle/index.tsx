import React, { RefObject, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Shuffle = () => {
  const tmpArray = new Array(25).fill(null).map((e, i) => i + 1);
  const [data, setData] = useState([...tmpArray]);
  const elem = useRef() as RefObject<HTMLDivElement>;

  useEffect(() => {
    const carts = gsap.utils.selector(elem)('.cart');
    gsap.set(carts, { opacity: 0, scale: 0 });
    gsap.to(carts, { opacity: 1, scale: 1, stagger: 0.05 });
  }, [data]);

  const shuffle = () => {
    setData(gsap.utils.shuffle([...data]));
  };

  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={shuffle}>
          Shuffle
        </span>
      </div>
      <div className="cart-list cart-list--distribute" ref={elem}>
        {data.map((e, i) => (
          <div key={i} className="cart cart--distribute">
            {e}
          </div>
        ))}
      </div>
    </>
  );
};
