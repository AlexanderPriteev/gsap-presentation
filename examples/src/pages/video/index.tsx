import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

import React, { useLayoutEffect } from 'react';
import VideoFile from '../../assets/gsap-video.mp4';

const videoGsap = () => {
  const video = document.querySelector('.video-gsap') as HTMLVideoElement;
  const src = video.currentSrc || video.src;

  /* Make sure the video is 'activated' on iOS */
  function once(el: HTMLElement, event: string, fn: () => void) {
    const onceFn = function () {
      el.removeEventListener(event, onceFn);
      fn.apply(el);
    };
    el.addEventListener(event, onceFn);
    return onceFn;
  }

  once(document.documentElement, 'touchstart', function () {
    video.play();
    video.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: '#container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });

  once(video, 'loadedmetadata', () => {
    tl.fromTo(
      video,
      {
        currentTime: 0,
      },
      {
        currentTime: video.duration || 1,
      }
    );
  });

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments,
  but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window['fetch']) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          const blobURL = URL.createObjectURL(response);

          const t = video.currentTime;
          once(document.documentElement, 'touchstart', function () {
            video.play();
            video.pause();
          });

          video.setAttribute('src', blobURL);
          video.currentTime = t + 0.01;
        });
    }
  }, 1000);
};

export const Video = () => {
  useLayoutEffect(() => {
    videoGsap();
  });
  return (
    <div id="container" className="video-container">
      <video src={VideoFile} className="video-gsap" />
    </div>
  );
};
