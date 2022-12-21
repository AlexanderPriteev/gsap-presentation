import React, { RefObject, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TriggerScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const cartListRef = useRef() as RefObject<HTMLDivElement>;

  useEffect(() => {
    const el = gsap.utils.selector(cartListRef);
    const scaleCard = () => {
      gsap.to(el('.cart'), {
        id: 'scale',
        duration: 1.5,
        scale: 2,
        repeat: -1,
        yoyo: true,
      });
    };
    const scaleCardKill = () => {
      gsap.getById('scale').kill();
      gsap.to(el('.cart'), { scale: 1 });
    };

    const fadeCard = () => {
      gsap.to(el('.cart'), {
        id: 'fade',
        duration: 2,
        opacity: 0,
        repeat: -1,
        yoyo: true,
      });
    };
    const fadeCardKill = () => {
      gsap.getById('fade').kill();
      gsap.to(el('.cart'), { opacity: 1 });
    };

    const rotateCard = () => {
      gsap.to(el('.cart'), {
        id: 'rotate',
        duration: 2,
        rotate: 360,
        repeat: -1,
      });
    };
    const rotateCardKill = () => {
      gsap.getById('rotate').kill();
      gsap.to(el('.cart'), { rotate: 0 });
    };

    ScrollTrigger.create({
      trigger: el('.block--1'),
      start: 'top center',
      end: 'bottom center',
      onEnter: scaleCard,
      onEnterBack: scaleCard,
      onLeave: scaleCardKill,
      onLeaveBack: scaleCardKill,
    });
    ScrollTrigger.create({
      trigger: el('.block--2'),
      start: 'top center',
      end: 'bottom center',
      onEnter: fadeCard,
      onEnterBack: fadeCard,
      onLeave: fadeCardKill,
      onLeaveBack: fadeCardKill,
    });
    ScrollTrigger.create({
      trigger: el('.block--3'),
      start: 'top center',
      end: 'bottom center',
      onEnter: rotateCard,
      onEnterBack: rotateCard,
      onLeave: rotateCardKill,
      onLeaveBack: rotateCardKill,
    });
  }, []);

  return (
    <div className="cart-list" ref={cartListRef}>
      <div className="cart cart--trigger">ScrollTrigger</div>
      <div className="block" />
      <div className="block block--1" />
      <div className="block block--2" />
      <div className="block block--3" />
      <div className="block" />
    </div>
  );
};
