import gsap from 'gsap';
import { Flip } from 'gsap/src/Flip';
import React, { RefObject, useEffect, useRef, useState } from 'react';

interface IFlipCart {
  id: number;
  data: string;
}

export const FlipMove = () => {
  gsap.registerPlugin(Flip);

  const cartListRef = useRef() as RefObject<HTMLDivElement>;
  const cartList = gsap.utils.selector(cartListRef);

  const [state, setState] = useState(null as null | Flip.FlipState);
  const [carts, setCarts] = useState([] as IFlipCart[]);

  const [lastId, setLastId] = useState(0);
  function createItem() {
    const cart = {
      id: lastId,
      data: `Cart ${lastId + 1}`,
    };
    setLastId(lastId + 1);
    return cart;
  }

  useEffect(() => {
    if (!state) return;
    Flip.from(state, {
      absolute: true,
      ease: 'power1.inOut',
      targets: cartList('.cart'),
      scale: true,
      simple: true,
      onEnter: (elements) => {
        return gsap.fromTo(
          elements,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            delay: 0.2,
            duration: 0.3,
          }
        );
      },
      onLeave: (elements) => {
        return gsap.to(elements, {
          opacity: 0,
          scale: 0,
        });
      },
    });
  }, [cartList, state]);

  const addItem = () => {
    setState(Flip.getState(cartList('.cart')));
    setCarts([...carts, createItem()]);
  };

  const removeItem = (btn: React.MouseEvent<HTMLElement>, id: number) => {
    const cart = (btn.target as HTMLElement).parentElement;
    gsap.to(cart, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      onComplete: () => {
        setState(Flip.getState(cartList('.cart')));
        setCarts([...carts.filter((e) => e.id !== id)]);
      },
    });
  };

  const shuffle = () => {
    setState(Flip.getState(cartList('.cart')));
    setCarts([...gsap.utils.shuffle(carts)]);
  };
  const sort = () => {
    setState(Flip.getState(cartList('.cart')));
    setCarts([...carts.sort((a, b) => a.id - b.id)]);
  };

  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={addItem}>
          Add
        </span>
        <span className="btn" onClick={shuffle}>
          Shuffle
        </span>
        <span className="btn" onClick={sort}>
          sort
        </span>
      </div>
      <div className="cart-list cart-list--flip" ref={cartListRef}>
        {carts.map((e) => (
          <div className="cart" key={e.id}>
            <i className="cart-remove" onClick={(btn) => removeItem(btn, e.id)} />
            {e.data}
          </div>
        ))}
      </div>
    </>
  );
};
