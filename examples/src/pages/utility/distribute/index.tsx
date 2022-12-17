import gsap from 'gsap';
import React, { useState } from 'react';

export const Distribute = () => {
  const [step, setStep] = useState(1);
  const distribute = () => {
    setStep(((step + 2) % 3) - 1);
    gsap.to('.cart', {
      scale: gsap.utils.distribute({
        base: 1,
        amount: step * 2,
        from: 'center',
        grid: 'auto',
      }),
    });
  };
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={distribute}>
          Distribute
        </span>
      </div>
      <div className="cart-list cart-list--distribute">
        {new Array(5).fill(null).map((e, i) => (
          <div key={i} className="cart-list">
            {new Array(5).fill(null).map((e1, i1) => (
              <div key={i1} className="cart cart--distribute" />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
