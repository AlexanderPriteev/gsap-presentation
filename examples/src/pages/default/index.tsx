import React, { RefObject, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { IRefs } from '../move';

const CartMove = (props: IRefs) => {
  useEffect(() => {
    const el = props.elRef.current;
    gsap.set(el, { opacity: 0, x: -400, scale: 0 });
    gsap.to(el, { opacity: 1, x: 0, scale: 1 });
  }, [props.elRef]);
  return (
    <div className="cart" ref={props.elRef}>
      Data
    </div>
  );
};

export const SetDefaults = () => {
  const [cartMove, setCartMove] = useState(false);
  const cartMoveRef = useRef() as RefObject<HTMLDivElement>;
  const [defaults, setDefaults] = useState(true);

  const changeDefaults = () => {
    if (defaults) {
      gsap.defaults({ ease: 'bounce.in', duration: 3 });
    } else {
      gsap.defaults({ ease: 'none', duration: 0.5 });
    }
    setDefaults(!defaults);
  };

  const cartMoveController = () => {
    if (cartMove) {
      gsap.to(cartMoveRef.current, {
        opacity: 0,
        x: -400,
        scale: 0,
        onComplete: () => {
          setCartMove(!cartMove);
        },
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
        <span className="btn" onClick={changeDefaults}>
          {defaults ? 'set' : 'return'} defaults
        </span>
      </div>
      <div className="cart-list">{cartMove && <CartMove elRef={cartMoveRef} />}</div>
    </>
  );
};
