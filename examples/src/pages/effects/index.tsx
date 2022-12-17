import gsap from 'gsap';
import React, { RefObject, useRef, useState } from 'react';
import { CartMove } from '../set';

interface IConfig {
  [a: string]: string;
}

export const Effects = () => {
  const [cartMove, setCartMove] = useState(true);
  const cartMoveRef = useRef() as RefObject<HTMLDivElement>;

  gsap.registerEffect({
    name: 'fadeMoveIn',
    effect: (elem: HTMLElement, config?: IConfig) => {
      return gsap.to(elem, {
        ...config,
        onComplete: () => {
          setCartMove(!cartMove);
        },
      });
    },
    defaults: { duration: 0.5, opacity: 0, x: -400, scale: 0, delay: 0 },
    extendTimeline: true,
  });

  const cartMoveController = () => {
    if (cartMove) {
      gsap.timeline().fadeMoveIn(cartMoveRef.current);
    } else {
      setCartMove(!cartMove);
    }
  };
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={() => cartMoveController()}>
          {cartMove ? `hide` : 'show'} cart move
        </span>
      </div>
      <div className="cart-list">{cartMove && <CartMove elRef={cartMoveRef} />}</div>
    </>
  );
};
