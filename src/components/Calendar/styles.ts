import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styCalendarActionBar = (args: Theme) => {
  const { color } = args;

  return css`
    padding: 16px 16px 0;
    background-color: ${color.WHITE};
    border-bottom: 1px solid ${color.GRAY50};

    .calendar-action-bar {
      &__button {
        width: 32px;
        height: 32px;
        flex: 0 0 32px;

        > button {
          border: 0;
          width: 32px;
          height: 32px;
          background: transparent;
          cursor: pointer;
        }
      }

      &__month-indicator {
        flex: 1;
      }

      &__days {
        height: 44px;
        top: 0;
        width: 100%;
        z-index: 100;

        > section {
          flex: 0 0 44px;
          width: 44px;
        }
      }
    }
  `;
};

export const styCalendar = (args: Theme) => {
  const { color } = args;

  return css`
    position: relative;
    width: 340px;

    .calendar {
      &__content {
        display: flex;
        flex-direction: row;
        padding: 8px 16px 16px;

        > section {
          flex: 0 0 44px;
          width: 44px;
        }

        button {
          border: 0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          max-height: 44px;
          cursor: pointer;
          border-radius: 8px;

          &:hover {
            background: ${color.GRAY25};
          }

          &[data-selected='true'],
          &[data-selected='true']:hover {
            background: ${color.BLUE500};
          }

          &[disabled],
          &[disabled]:hover {
            cursor: initial;
            background: transparent;
          }
        }
      }
    }
  `;
};
