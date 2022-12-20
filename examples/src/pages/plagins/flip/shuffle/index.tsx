import React, { RefObject, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/src/Flip';

export const FlipShuffle = () => {
  const tmpArray = new Array(25).fill(null).map((e, i) => ({ id: i, data: i + 1 }));
  const [data, setData] = useState([...tmpArray]);
  const elem = useRef() as RefObject<HTMLDivElement>;

  gsap.registerPlugin(Flip);
  const cartList = gsap.utils.selector(elem);
  const [state, setState] = useState(null as null | Flip.FlipState);
  useEffect(() => {
    if (!state) return;
    Flip.from(state, {
      duration: 1,
      ease: 'power1.inOut',
      targets: cartList('.cart'),
    });
  }, [cartList, state]);

  const shuffle = () => {
    setState(Flip.getState(cartList('.cart')));
    setData([...gsap.utils.shuffle(data)]);
  };

  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={shuffle}>
          Shuffle
        </span>
      </div>
      <div className="cart-list cart-list--distribute" ref={elem}>
        {data.map((e) => (
          <div key={e.id} className="cart cart--distribute">
            {e.data}
          </div>
        ))}
      </div>
    </>
  );
};
