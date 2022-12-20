import React, { RefObject, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/src/TextPlugin';

export const Text = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula eleifend consectetur. Maecenas vitae dolor enim.';
  gsap.registerPlugin(TextPlugin);
  const text = useRef() as RefObject<HTMLParagraphElement>;
  const [input, setInput] = useState(lorem);
  const [textValue, setTextValue] = useState(lorem);

  useEffect(() => {
    gsap.to(text.current, {
      duration: 1,
      text: {
        value: textValue,
        speed: 0.7,
        type: 'diff',
      },
      ease: 'none',
    });
  }, [textValue]);

  const clear = () => {
    (text.current as HTMLParagraphElement).innerText = '';
    setTextValue('');
  };
  const type = () => setTextValue(input);

  return (
    <>
      <div className="btn-wrapper">
        <input
          type="text"
          className="type-input"
          defaultValue={lorem}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="btn" onClick={type}>
          Type
        </span>
        <span className="btn" onClick={clear}>
          Clear
        </span>
      </div>
      <div className="cart-list">
        <p className="type-text" ref={text} />
      </div>
    </>
  );
};
