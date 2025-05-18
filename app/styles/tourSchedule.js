import css from "styled-jsx/css";
import { colors } from "./colors";

const dateTileHeight = "72px";

export const tourScheduleLayout = css`
  .tour-schedule-layout {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
  }
`;

export const tourDateContainer = css`
  .tour-date-container {
    display: flex;
    flex-direction: column;
    min-height: ${dateTileHeight};
    width: 100%;
    position: relative;
    background-color: ${colors.charcoal};
    border: 1px solid grey;
    border-radius: 10px;
    overflow: hidden;
  }
`;

export const tourDetails = css`
  .tour-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    gap: 6px;
    color: ${colors.offWhite};
    padding: 12px;
    overflow: hidden;
  }
`;

export const dateDetails = css`
  .date-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 79px;
    height: ${dateTileHeight};
    color: ${colors.charcoal};
    background-color: ${colors.offWhite};
    border-radius: 10px;
    padding: 4px 8px;
  }
`;

export const dateDisplay = css`
  .date-display {
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    line-height: 1;
  }
`;

export const month = css`
  .month {
    font-size: 13px;
  }
`;

export const day = css`
  .day {
    font-size: 20px;
  }
`;

export const dayOfWeek = css`
  .day-of-week {
    font-size: 11px;
    font-weight: 600;
    text-align: center;
  }
`;

export const divider = css`
  .divider {
    border: 0;
    border-bottom: 1px solid grey;
    background: grey;
  }
`;

export const row = css`
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const city = css`
  .city {
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const eventTitle = css`
  .event-title {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const venue = css`
  .venue {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const cityAndTicketRow = css`
  .city-and-ticket-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 0 12px 12px 12px;
  }
`;

export const comingSoon = css`
  .coming-soon {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;
    color: ${colors.dimWhite};
    font-weight: 600;
    background-color: ${colors.charcoal};
    border: 1px solid grey;
    padding: 16px;
    border-radius: 10px;
  }
`;

// export const button = css`
//   button {
//     color: hotpink;
//   }
// `;
