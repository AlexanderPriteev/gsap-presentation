import gsap from 'gsap';

import React, { RefObject, useEffect, useRef, useState } from 'react';

interface IRefs {
  elRef: RefObject<HTMLDivElement>;
}

const Block = (props: IRefs) => {
  useEffect(() => {
    gsap.fromTo(props.elRef.current, { x: 300 }, { x: 0, duration: 0.6 });
  }, [props.elRef]);
  return (
    <div className="collapse" ref={props.elRef}>
      <span className="collapse-item">Link 1</span>
      <span className="collapse-item">Link 2</span>
      <span className="collapse-item">Link 3</span>
    </div>
  );
};

const Cart = (props: IRefs) => {
  useEffect(() => {
    gsap.fromTo(
      props.elRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'circ.in',
      }
    );
  }, [props.elRef]);
  return (
    <div className="cart" ref={props.elRef}>
      Data
    </div>
  );
};

const CartMove = (props: IRefs) => {
  useEffect(() => {
    gsap.fromTo(
      props.elRef.current,
      { opacity: 0, x: -300 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'circ.in',
      }
    );
  }, [props.elRef]);
  return (
    <div className="cart" ref={props.elRef}>
      Data
    </div>
  );
};

export const Move = () => {
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);
  const [cartMove, setCartMove] = useState(false);
  const navRef = useRef() as RefObject<HTMLDivElement>;
  const cartRef = useRef() as RefObject<HTMLDivElement>;
  const cartMoveRef = useRef() as RefObject<HTMLDivElement>;
  const navController = () => {
    if (nav) {
      gsap.to(navRef.current, {
        x: 400,
        duration: 0.6,
        onComplete: () => {
          setNav(!nav);
        },
      });
    } else {
      setNav(!nav);
    }
  };
  const cartController = () => {
    if (cart) {
      gsap.to(cartRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: 'circ.in',
        onComplete: () => {
          setCart(!cart);
        },
      });
    } else {
      setCart(!cart);
    }
  };

  const cartMoveController = () => {
    if (cartMove) {
      gsap.to(cartMoveRef.current, {
        opacity: 0,
        x: -400,
        duration: 1,
        ease: 'circ.in',
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
        <span className="btn" onClick={navController}>
          {nav ? 'hide' : 'show'} nav
        </span>
        <span className="btn" onClick={cartController}>
          {cart ? 'hide' : 'show'} cart
        </span>
        <span className="btn" onClick={cartMoveController}>
          {cartMove ? 'hide' : 'show'} cart move
        </span>
      </div>
      <div className="cart-list">
        {cart && <Cart elRef={cartRef} />}
        {cartMove && <CartMove elRef={cartMoveRef} />}
      </div>

      {nav && <Block elRef={navRef} />}
    </>
  );
};
