"use client";

import { colors } from "../styles/colors";

const LinkRow = (props) => (
  <div className="link-row">
    {props.children}
    <style jsx>{`
      .link-row {
        display: flex;
        align-items: flex-start;
      }
    `}</style>
  </div>
);

const ArrowIcon = (props) => (
  <div className="arrow-icon">
    {props.children}
    <style jsx>{`
      .arrow-icon {
        font-size: 12px;
        margin-left: 4px;
        margin-top: 2px;
      }
    `}</style>
  </div>
);

const TicketLink = ({ $url }) => {
  return (
    <a href={$url} target="_blank" rel="noopener noreferrer">
      <LinkRow>
        Get Tickets<ArrowIcon>&#8599;</ArrowIcon>
      </LinkRow>
      <style jsx>{`
        a {
          padding-top: 4px;
          font-size: 14px;
          color: ${colors.lightGrapefruit};
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </a>
  );
};

export default TicketLink;
