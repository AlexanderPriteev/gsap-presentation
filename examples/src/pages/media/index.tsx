import gsap from 'gsap';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { IRefs } from '../tween';

const CartMove = (props: IRefs) => {
  useEffect(() => {
    const el = props.elRef.current;
    const gMedia = gsap.matchMedia();
    gMedia.add('(min-width: 720px)', () => {
      gsap.set(el, { opacity: 0, x: -400, scale: 0 });
    });
    gMedia.add('(max-width: 719px)', () => {
      gsap.set(el, { opacity: 0, x: 400, scale: 0 });
    });
    gsap.to(el, { opacity: 1, x: 0, scale: 1 });
  }, [props.elRef]);
  return (
    <div className="cart" ref={props.elRef}>
      Data
    </div>
  );
};

export const SetMedia = () => {
  const [cartMove, setCartMove] = useState(false);
  const cartMoveRef = useRef() as RefObject<HTMLDivElement>;

  const cartMoveController = () => {
    if (cartMove) {
      const el = cartMoveRef.current;
      const gMedia = gsap.matchMedia();
      gMedia.add('(min-width: 720px)', () => {
        gsap.to(el, {
          opacity: 0,
          x: -400,
          scale: 0,
          onComplete: () => {
            setCartMove(!cartMove);
          },
        });
      });
      gMedia.add('(max-width: 719px)', () => {
        gsap.to(el, {
          opacity: 0,
          x: 400,
          scale: 0,
          onComplete: () => {
            setCartMove(!cartMove);
          },
        });
      });
    } else {
      setCartMove(!cartMove);
    }
  };
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={cartMoveController}>
          {cartMove ? 'hide' : 'show'} cart move
        </span>
      </div>
      <div className="cart-list">{cartMove && <CartMove elRef={cartMoveRef} />}</div>
    </>
  );
};
