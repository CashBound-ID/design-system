import type { MouseEvent, MouseEventHandler } from 'react';

interface CustomElement extends HTMLSpanElement {
  __self_destroy: () => void;
}

const _removeElement = (element: CustomElement) => {
  if (element.__self_destroy) {
    element.removeEventListener('animationend', element.__self_destroy);
  }

  requestAnimationFrame(() => {
    element.remove();
  });
};

const _createRippleElement = (
  event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  className: string
) => {
  const eventHandler = (element: HTMLElement) => () => {
    element.remove();
  };
  const button = event.currentTarget;
  const circle = document.createElement('span') as CustomElement;
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const rect = event.currentTarget.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add(className);

  const handler = eventHandler(circle);
  circle.__self_destroy = handler;

  const prevElement = button.getElementsByClassName(className)[0];

  if (prevElement) {
    _removeElement(prevElement as CustomElement);
  }

  button.appendChild(circle);
  circle.addEventListener('animationend', handler);
};

interface UseButtonRipplesArgs {
  enabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ripplesClassName?: string;
}

const useButtonRipples = (args: UseButtonRipplesArgs) => {
  const { enabled, onClick, ripplesClassName = 'button-ripple' } = args;

  const handleOnClickButton: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) onClick(event);

    if (!enabled) return;

    _createRippleElement(event, ripplesClassName);
  };

  return {
    onClick: handleOnClickButton
  };
};

export default useButtonRipples;
