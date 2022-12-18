import gsap from 'gsap';
import React, { useState } from 'react';

export const EndArray = () => {
  const [arr, setArr] = useState([0, 0, 0]);
  const setData = () => {
    const tmpArr = [0, 0, 0];
    gsap.to(tmpArr, {
      duration: 4,
      endArray: [99, 999, 9999],
      onUpdate() {
        setArr(tmpArr.map((e) => Math.round(e)));
      },
    });
  };
  return (
    <>
      <div className="btn-wrapper">
        <span className="btn" onClick={setData}>
          set
        </span>
      </div>
      <div className="cart-list">
        {arr.map((e, i) => (
          <div key={i} className="cart">
            {e}
          </div>
        ))}
      </div>
    </>
  );
};
