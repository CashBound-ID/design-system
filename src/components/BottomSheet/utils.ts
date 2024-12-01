/**
 * Represents a snap point for the bottom sheet.
 */
interface SnapPoint {
  /** The pixel height of the snap point. */
  height: number;
  /** The max height CSS value for the snap point, or `null` to close the bottom sheet. */
  maxHeight: string | null;
}

/**
 * Represents the result of the `dragHandleInit` function.
 */
interface DragHandleInitResult {
  /** Function to remove all event listeners and clean up resources. */
  destroy: () => void;
}

/**
 * Initializes drag-and-snap functionality for a bottom sheet component.
 *
 * @param root - The root element of the bottom sheet.
 * @param dragHandle - The handle element that users can drag.
 * @param snapPoints - An array of max height CSS values for snap points. `null` represents the closed state.
 * @param onClose - Callback function invoked when the bottom sheet is fully closed.
 * @returns An object containing a `destroy` method to clean up resources.
 *
 * @example
 * ```typescript
 * const root = document.getElementById('bottom-sheet');
 * const dragHandle = document.getElementById('drag-handle');
 * const snapPoints = ['50vh', '100vh', null];
 * const onClose = () => console.log(isOpen ? 'Open' : 'Closed');
 *
 * const dragHandler = dragHandleInit(root, dragHandle, snapPoints, onClose);
 *
 * // Cleanup when no longer needed
 * dragHandler.destroy();
 * ```
 */
const dragHandleInit = (
  root: HTMLElement,
  dragHandle: HTMLElement,
  snapPoints: (string | null)[],
  onClose: () => void
): DragHandleInitResult => {
  let snapHeights: SnapPoint[] = [];
  let pxTranslate = 0;
  let startHeight = 0;
  let startPosY = 0;
  let velocity = 0;
  let prevPosY = 0;
  let prevTime = 0;
  let touchStarted = false;

  /**
   * Initializes the snap heights based on the provided `snapPoints`.
   * @returns An array of `SnapPoint` objects.
   */
  const initializeSnapHeights = (): SnapPoint[] => {
    return snapPoints.map((maxHeight) => {
      if (maxHeight === null) return { height: 0, maxHeight: null };

      const initialMaxHeight = root.style.maxHeight;
      root.style.maxHeight = maxHeight;
      const snapHeight = root.offsetHeight;
      root.style.maxHeight = initialMaxHeight;

      return { height: snapHeight, maxHeight };
    });
  };

  /**
   * Calculates the velocity of the drag movement.
   * @param deltaY - The change in the Y position.
   * @param deltaTime - The change in time (ms).
   * @returns The velocity of the movement.
   */
  const calculateVelocity = (deltaY: number, deltaTime: number): number =>
    deltaY / deltaTime;

  /**
   * Updates the height of the bottom sheet dynamically during dragging.
   * @param newHeight - The new height to set for the bottom sheet.
   */
  const updateHeight = (newHeight: number): void => {
    const constrainedHeight = Math.min(newHeight, window.innerHeight);
    Object.assign(root.style, {
      height: `${constrainedHeight}px`,
      maxHeight: 'unset'
    });
  };

  /**
   * Finds the closest snap point to the current height of the bottom sheet.
   * @param currentHeight - The current height of the bottom sheet.
   * @returns The closest snap point.
   */
  const snapToClosestHeight = (currentHeight: number): SnapPoint => {
    return snapHeights.reduce((closest, snap) => {
      return Math.abs(snap.height - currentHeight) <
        Math.abs(closest.height - currentHeight)
        ? snap
        : closest;
    }, snapHeights[0]);
  };

  /**
   * Applies a height transition to smoothly snap the bottom sheet to the target height.
   * @param targetHeight - The target height for the bottom sheet.
   * @param maxHeight - The max height CSS value to apply after the transition.
   */
  const applyHeightTransition = (
    targetHeight: number,
    maxHeight: string | null
  ): void => {
    root.ontransitionend = () => {
      Object.assign(root.style, {
        height: '',
        maxHeight,
        transition: ''
      });
      root.ontransitionend = null; // Clean up the event listener
    };
    Object.assign(root.style, {
      height: `${targetHeight}px`,
      transition: 'height .2s ease-out'
    });
  };

  /**
   * Handles the start of a touch or mouse drag event.
   * @param e - The event object.
   */
  const handleTouchStart = (e: TouchEvent | MouseEvent): void => {
    touchStarted = true;
    pxTranslate = 0;
    startHeight = root.offsetHeight;
    startPosY = Math.round(
      'touches' in e ? e.touches[0]?.clientY || 0 : e.clientY || 0
    );
    snapHeights = initializeSnapHeights();
  };

  /**
   * Handles the movement of a touch or mouse drag event.
   * @param e - The event object.
   */
  const handleTouchMove = (e: TouchEvent | MouseEvent): void => {
    if (!touchStarted) return;

    dragHandle.setAttribute('data-touchmove', '');
    const currentY = Math.round(
      'touches' in e ? e.touches[0]?.clientY || 0 : e.clientY || 0
    );
    const currPosY = Math.round(
      ('touches' in e ? e.touches[0].clientY : e.clientY) || 0
    );
    const currTime = new Date().getTime();
    const deltaPosY = currPosY - prevPosY;
    const deltaTime = currTime - prevTime;
    prevPosY = currPosY;
    prevTime = currTime;
    pxTranslate = startPosY - currentY;
    // differentiate swipe and drag by movement velocity
    velocity = calculateVelocity(deltaPosY, deltaTime);
    const adjustedHeight = startHeight + pxTranslate;

    const minHeight = snapHeights[0].height;
    const maxHeight = snapHeights[snapHeights.length - 1].height;

    let constrainedHeight: number;

    if (adjustedHeight > maxHeight) {
      const overshootAbove = adjustedHeight - maxHeight;
      constrainedHeight = maxHeight + overshootAbove / 4;
    } else if (adjustedHeight < minHeight) {
      const overshootBelow = minHeight - adjustedHeight;
      constrainedHeight = minHeight - overshootBelow / 4;
    } else {
      constrainedHeight = adjustedHeight;
    }

    updateHeight(constrainedHeight);
  };

  /**
   * Handles the end of a touch or mouse drag event.
   */
  const handleTouchEnd = (): void => {
    if (!touchStarted) return;

    touchStarted = false;
    dragHandle.removeAttribute('data-touchmove');

    const currentHeight = root.offsetHeight;
    let closestSnap: SnapPoint = { height: 0, maxHeight: null };

    if (velocity > 0.5) {
      const { height, maxHeight } = snapHeights[0];
      closestSnap = { height, maxHeight };
    } else if (velocity < -0.5) {
      const { height, maxHeight } = snapHeights[snapHeights.length - 1];
      closestSnap = { height, maxHeight };
    } else {
      closestSnap = snapToClosestHeight(currentHeight);
    }

    // tambahin velocity

    if (!closestSnap.height) {
      onClose();
    } else if (currentHeight !== closestSnap.height) {
      applyHeightTransition(closestSnap.height, closestSnap.maxHeight);
    } else {
      Object.assign(root.style, {
        height: '',
        maxHeight: closestSnap.maxHeight
      });
    }
  };

  /**
   * Attaches all necessary event listeners for drag functionality.
   */
  const addEventListeners = (): void => {
    dragHandle.addEventListener('touchstart', handleTouchStart, {
      passive: true
    });
    dragHandle.addEventListener('touchmove', handleTouchMove, {
      passive: true
    });
    dragHandle.addEventListener('touchend', handleTouchEnd);
    dragHandle.addEventListener('mousedown', handleTouchStart);
    window.addEventListener('mousemove', handleTouchMove);
    window.addEventListener('mouseup', handleTouchEnd);
    window.addEventListener('mouseleave', handleTouchEnd);
  };

  /**
   * Removes all event listeners to clean up resources.
   */
  const removeEventListeners = (): void => {
    dragHandle.removeEventListener('touchstart', handleTouchStart);
    dragHandle.removeEventListener('touchmove', handleTouchMove);
    dragHandle.removeEventListener('touchend', handleTouchEnd);
    dragHandle.removeEventListener('mousedown', handleTouchStart);
    window.removeEventListener('mousemove', handleTouchMove);
    window.removeEventListener('mouseup', handleTouchEnd);
    window.removeEventListener('mouseleave', handleTouchEnd);
  };

  addEventListeners();

  return {
    destroy: removeEventListeners
  };
};

export default dragHandleInit;
