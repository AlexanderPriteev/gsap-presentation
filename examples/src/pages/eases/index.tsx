import gsap from 'gsap';
import React, { RefObject, useEffect, useRef, useState } from 'react';

type TMove = 'out' | 'in' | 'inOut';

export const Eases = () => {
  const [move, setMove] = useState('out' as TMove);
  const [title, setTile] = useState('');
  const dotRef = useRef() as RefObject<HTMLDivElement>;
  const lineRef = useRef() as RefObject<HTMLDivElement>;
  gsap.defaults({ duration: 2 });

  const moveLine = (ease: string) => {
    gsap.set(dotRef.current, { y: 0 });
    gsap.set(lineRef.current, { height: 2 });
    gsap.to(dotRef.current, { ease: ease, y: -380 });
    gsap.to(lineRef.current, { ease: ease, height: 460 });
    setTile(ease);
  };

  const reset = () => {
    gsap.set(dotRef.current, { y: 0 });
    gsap.set(lineRef.current, { height: 2 });
    setTile('');
  };
  return (
    <div className="eases">
      <div className="eases-menu">
        <div className="eases-menu-block">
          <span
            className={`eases-btn${move === 'out' ? ' active' : ''}`}
            onClick={() => {
              setMove('out');
            }}
          >
            out
          </span>
          <span
            className={`eases-btn${move === 'in' ? ' active' : ''}`}
            onClick={() => {
              setMove('in');
            }}
          >
            in
          </span>
          <span
            className={`eases-btn${move === 'inOut' ? ' active' : ''}`}
            onClick={() => {
              setMove('inOut');
            }}
          >
            inOut
          </span>
        </div>
        <div className="eases-menu-block">
          <span className="eases-btn" onClick={() => moveLine('none')}>
            none
          </span>
          <span className="eases-btn" onClick={() => moveLine(`power1.${move}`)}>
            power1
          </span>
          <span className="eases-btn" onClick={() => moveLine(`power2.${move}`)}>
            power2
          </span>
          <span className="eases-btn" onClick={() => moveLine(`power3.${move}`)}>
            power3
          </span>
          <span className="eases-btn" onClick={() => moveLine(`power4.${move}`)}>
            power4
          </span>
          <span className="eases-btn" onClick={() => moveLine(`back.${move}(1.7)`)}>
            back
          </span>
          <span className="eases-btn" onClick={() => moveLine(`elastic.${move}(1, 0.3)`)}>
            elastic
          </span>
          <span className="eases-btn" onClick={() => moveLine(`bounce.${move}`)}>
            bounce
          </span>
          <span className="eases-btn" onClick={() => moveLine(`slow (0.7, 0.7, false)`)}>
            slow
          </span>
          <span className="eases-btn" onClick={() => moveLine(`steps (12)`)}>
            steps
          </span>
          <span className="eases-btn" onClick={() => moveLine(`circ.${move}`)}>
            circ
          </span>
          <span className="eases-btn" onClick={() => moveLine(`expo.${move}`)}>
            expo
          </span>
          <span className="eases-btn" onClick={() => moveLine(`sine.${move}`)}>
            sine
          </span>
        </div>
        <span className="eases-btn active" onClick={reset}>
          RESET
        </span>
      </div>
      <div className="eases-wrapper">
        <h2 className="eases-title">{title}</h2>
        <div className="eases-container">
          <div className="eases-dot" ref={dotRef} />
          <div className="eases-line" ref={lineRef} />
        </div>
      </div>
    </div>
  );
};
