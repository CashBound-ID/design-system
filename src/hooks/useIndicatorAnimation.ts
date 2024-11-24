import type { ReactNode, UIEventHandler } from 'react';
import { useEffect, useRef, useState } from 'react';

import { DEFAULT_TRANSITION } from '@/constant/theme';

/**
 * Calculates and updates the position and size of the active tab indicator.
 *
 * @param {Element} containerNode - The parent element containing the tabs.
 * @param {Element} indicatorNode - The element representing the active tab indicator.
 * @param {number} activeIndex - The index of the currently active tab.
 */
const _calcIndicator = (
  containerNode: Element,
  indicatorNode: Element,
  activeIndex: number
) => {
  if (
    containerNode instanceof HTMLElement &&
    indicatorNode instanceof HTMLElement
  ) {
    const activeIndicatorNode = containerNode.childNodes[activeIndex];
    const activeIndicatorWidth =
      (activeIndicatorNode as HTMLElement)?.offsetWidth || 0;
    const activeTabLeft = (activeIndicatorNode as HTMLElement)?.offsetLeft || 0;

    Object.assign(indicatorNode.style, {
      translate: `${activeTabLeft}px 0`,
      width: `${activeIndicatorWidth}px`
    });

    if (indicatorNode.style.transition === '') {
      requestAnimationFrame(() => {
        Object.assign(indicatorNode.style, {
          transition: `all ${DEFAULT_TRANSITION.duration} ${DEFAULT_TRANSITION.timingFunction}`
        });
      });
    }
  }
};

/**
 * Calculates and updates the overflow mask for the container.
 * Adds or removes data attributes (`data-fadestart` and `data-fadeend`) to indicate
 * the scroll position of the container.
 *
 * @param {Element} containerNode - The parent element containing the tabs.
 */
const _calcOverflowMask = (containerNode: Element) => {
  if (containerNode instanceof HTMLElement) {
    const containerWidth = containerNode.offsetWidth;
    const containerScrollPosition = containerNode.scrollLeft;

    const containerScrollWidth = containerNode.scrollWidth;

    if (containerScrollPosition !== 0) {
      containerNode.setAttribute('data-fadestart', '');
    } else {
      containerNode.removeAttribute('data-fadestart');
    }

    if (
      Math.round(containerScrollPosition) <
      containerScrollWidth - containerWidth
    ) {
      containerNode.setAttribute('data-fadeend', '');
    } else {
      containerNode.removeAttribute('data-fadeend');
    }
  }
};

/**
 * Automatically scrolls the container to bring the active tab into view.
 *
 * @param {Element} containerNode - The parent element containing the tabs.
 * @param {number} activeIndex - The index of the currently active tab.
 */
const _autoScroll = (containerNode: Element, activeIndex: number) => {
  if (containerNode instanceof HTMLElement) {
    const activeIndicatorNode = containerNode.childNodes[activeIndex];
    const activeTabLeft = (activeIndicatorNode as HTMLElement)?.offsetLeft;

    containerNode.scrollTo({
      behavior: 'smooth',
      left: activeTabLeft - 64
    });
  }
};

/**
 * Custom hook for managing tab navigation animations, including the active tab indicator,
 * overflow mask, and automatic scrolling.
 *
 * @returns {Object} - An object containing actions and element references.
 * @property {Object} action - Actions to control the animation and behavior.
 * @property {Function} action.onChangeActiveIndex - Function to update the active tab index.
 * @property {UIEventHandler<HTMLElement>} action.onContainerScroll - Event handler for container scroll events.
 * @property {Object} element - References to the container and indicator elements.
 * @property {React.RefObject<HTMLElement>} element.container - Ref for the container element.
 * @property {React.RefObject<HTMLElement>} element.indicator - Ref for the indicator element.
 */
const useIndicatorAnimation = (args: ReactNode) => {
  const containerRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>();

  /**
   * Updates the active index for the indicator.
   * @param {number} index - The new active index.
   */
  const handleOnChangeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  /**
   * Handles the scroll event on the container to update the overflow mask.
   * @param {React.UIEvent<HTMLElement>} e - The scroll event.
   */
  const handleOnContainerScroll: UIEventHandler<HTMLElement> = (e) => {
    _calcOverflowMask(e.currentTarget);
  };

  useEffect(() => {
    if (containerRef.current && typeof activeIndex === 'number') {
      let observed = false;
      let debounce: ReturnType<typeof setTimeout>;

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const containerNode = entry.target;
          const indicatorNode = indicatorRef.current;

          _calcOverflowMask(containerNode);

          if (indicatorNode) {
            if (observed) {
              clearTimeout(debounce);
              debounce = setTimeout(() => {
                _calcIndicator(containerNode, indicatorNode, activeIndex);
              }, 200);
            } else {
              _calcIndicator(containerNode, indicatorNode, activeIndex);
              observed = true;
            }
          }
        });
      });

      _autoScroll(containerRef.current, activeIndex);
      resizeObserver.observe(containerRef.current);

      return () => {
        clearTimeout(debounce);
        resizeObserver.disconnect();
      };
    }

    return () => {};
  }, [activeIndex, args]);

  return {
    action: {
      onChangeActiveIndex: handleOnChangeActiveIndex,
      onContainerScroll: handleOnContainerScroll
    },
    element: {
      container: containerRef,
      indicator: indicatorRef
    }
  };
};

export default useIndicatorAnimation;
