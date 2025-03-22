type CarouselArgs = {
  autoplay: number;
  max: number;
  min: number;
  slideGroupDOM: HTMLElement;
  stepAuto: () => void;
  stepDown: () => void;
  stepUp: () => void;
  value: number;
  wrapperDOM: HTMLElement;
};

export const initCarousel = (params: CarouselArgs) => {
  const {
    autoplay,
    max,
    min,
    slideGroupDOM,
    stepAuto,
    stepDown,
    stepUp,
    value,
    wrapperDOM
  } = params;
  let timeout: NodeJS.Timeout;
  let touchStarted = false;
  let initialTouch = false;
  let startPosX = 0;
  let startPosY = 0;
  let pxTranslate = 0;
  let initialTransform = '';

  const startAutoSlide = () => {
    if (autoplay) timeout = setTimeout(stepAuto, autoplay);
  };

  const handleTouchStart = (e: TouchEvent | MouseEvent) => {
    clearTimeout(timeout);
    initialTouch = true;
    touchStarted = true;
    startPosX = ('touches' in e ? e.touches[0].clientX : e.clientX) || 0;
    startPosY = ('touches' in e ? e.touches[0].clientY : e.clientY) || 0;
    initialTransform = slideGroupDOM.style.transform;
    pxTranslate = -value * slideGroupDOM.offsetWidth;
  };

  const handleTouchEnd = (e: TouchEvent | MouseEvent) => {
    if (touchStarted) {
      const lastPosX =
        ('changedTouches' in e ? e.changedTouches[0].clientX : e.clientX) || 0;
      if (lastPosX < startPosX - 50 && value < max) stepUp();
      else if (lastPosX > startPosX + 50 && value > min) stepDown();
      else {
        slideGroupDOM.style.transform = initialTransform;
        startAutoSlide();
      }
      slideGroupDOM.removeAttribute('data-touchmove');
      touchStarted = false;
    }
  };

  const handleTouchMove = (e: TouchEvent | MouseEvent) => {
    if (touchStarted) {
      const movementX =
        startPosX - ('touches' in e ? e.touches[0].clientX : e.clientX) || 0;
      const movementY =
        startPosY - ('touches' in e ? e.touches[0].clientY : e.clientY) || 0;

      if (initialTouch && Math.abs(movementX) < Math.abs(movementY)) {
        handleTouchEnd(e);
      } else {
        if (initialTouch) {
          initialTouch = false;
          slideGroupDOM.setAttribute('data-touchmove', '');
        }
        slideGroupDOM.style.transform = `translate3d(${pxTranslate - Math.round(movementX)}px,0,0)`;
      }
    }
  };

  startAutoSlide();

  wrapperDOM.addEventListener('touchstart', handleTouchStart, {
    passive: true
  });
  wrapperDOM.addEventListener('touchmove', handleTouchMove);
  wrapperDOM.addEventListener('touchend', handleTouchEnd);
  wrapperDOM.addEventListener('touchcancel', handleTouchEnd);
  wrapperDOM.addEventListener('mousedown', handleTouchStart);
  document.addEventListener('mousemove', handleTouchMove);
  document.addEventListener('mouseup', handleTouchEnd);
  document.addEventListener('mouseleave', handleTouchEnd);

  return {
    destroy: () => {
      clearTimeout(timeout);
      wrapperDOM.removeEventListener('touchstart', handleTouchStart);
      wrapperDOM.removeEventListener('touchmove', handleTouchMove);
      wrapperDOM.removeEventListener('touchend', handleTouchEnd);
      wrapperDOM.removeEventListener('touchcancel', handleTouchEnd);
      wrapperDOM.removeEventListener('mousedown', handleTouchStart);
      document.removeEventListener('mousemove', handleTouchMove);
      document.removeEventListener('mouseup', handleTouchEnd);
      document.removeEventListener('mouseleave', handleTouchEnd);
    }
  };
};
