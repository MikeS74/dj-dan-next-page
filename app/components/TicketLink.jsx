"use client";

import { colors } from "../styles/colors";

const LinkRow = (props) => (
  <div className="link-row">
    {props.children}
    <style jsx>{`
      .link-row {
        display: flex;
        align-items: flex-start;
        gap: 2px;
      }
    `}</style>
  </div>
);

const IconArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 -4 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 7l-10 10" />
    <path d="M8 7l9 0l0 9" />
  </svg>
);

const TicketLink = ({ $url }) => {
  return (
    <a href={$url} target="_blank" rel="noopener noreferrer">
      <LinkRow>
        Tickets
        <IconArrowUpRight />
      </LinkRow>
      <style jsx>{`
        a {
          position: relative;
          bottom: 4px;
          padding-top: 4px;
          font-size: 14px;
          color: ${colors.linkBlue};
          font-weight: 600;
          line-height: 1.3;
          white-space: nowrap;
          text-decoration: underline;
          text-underline-position: under;
          cursor: pointer;
        }
      `}</style>
    </a>
  );
};

export default TicketLink;
