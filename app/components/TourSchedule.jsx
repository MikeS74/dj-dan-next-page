"use client";

import TicketLink from "./TicketLink";
import {
  tourScheduleLayout,
  tourDateContainer,
  tourDetails,
  dateDetails,
  dateDisplay,
  month,
  day,
  dayOfWeek,
  divider,
  row,
  city,
  eventTitle,
  venue,
  cityAndTicketRow,
  comingSoon,
} from "../styles/tourSchedule";
import tourDates from "../../data/tour-dates.json";
import { splitAtFirstNumber } from "../helpers/splitAtFirstNumber";
import { colors } from "../styles/colors";

const TourScheduleLayout = ({ children }) => (
  <div className="tour-schedule-layout">
    {children}
    <style jsx>{tourScheduleLayout}</style>
  </div>
);

const TourDateContainer = ({ children }) => (
  <div className="tour-date-container">
    {children}
    <style jsx>{tourDateContainer}</style>
  </div>
);

const TourDetails = ({ children }) => (
  <div className="tour-details">
    {children}
    <style jsx>{tourDetails}</style>
  </div>
);

const DateDetails = ({ children, hasDayOfWeek }) => (
  <div className="date-details" style={{ gap: hasDayOfWeek ? 4 : 8 }}>
    {children}
    <style jsx>{dateDetails}</style>
  </div>
);

const Month = ({ children }) => (
  <span className="date-display month">
    {children}
    <style jsx>{dateDisplay}</style>
    <style jsx>{month}</style>
  </span>
);

const Day = ({ children }) => (
  <span className="date-display day">
    {children}
    <style jsx>{dateDisplay}</style>
    <style jsx>{day}</style>
  </span>
);

const DayOfWeek = ({ children }) => (
  <span className="day-of-week">
    {children}
    <style jsx>{dayOfWeek}</style>
  </span>
);

const Divider = () => (
  <>
    <hr className="divider" />
    <style jsx>{divider}</style>
  </>
);

const Row = ({ children }) => (
  <div className="row">
    {children}
    <style jsx>{row}</style>
  </div>
);

const City = ({ children }) => (
  <span className="city">
    {children}
    <style jsx>{city}</style>
  </span>
);

const EventTitle = ({ children }) => (
  <span className="event-title">
    {children}
    <style jsx>{eventTitle}</style>
  </span>
);

const Venue = ({ children }) => (
  <span className="venue">
    {children}
    <style jsx>{venue}</style>
  </span>
);

const CityAndTicketRow = ({ children }) => (
  <div className="city-and-ticket-row">
    {children}
    <style jsx>{cityAndTicketRow}</style>
  </div>
);

const ComingSoon = ({ children }) => (
  <div className="coming-soon">
    {children}
    <style jsx>{comingSoon}</style>
  </div>
);

const TourDate = ({ data, $showMobileLayout }) => {
  const monthDayArr = splitAtFirstNumber(data?.date);
  const hasDayOfWeek = data.isDateRange === "false";
  const hasVenue = Boolean(data?.venue);
  const hasEventTitle = Boolean(data?.eventTitle);
  const hasTix = Boolean(data?.ticketUrl);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <DateDetails hasDayOfWeek={hasDayOfWeek}>
          {hasDayOfWeek ? (
            <>
              <DayOfWeek>{data.dayOfWeek}</DayOfWeek>
              <Divider />
            </>
          ) : null}
          <Month>{monthDayArr[0]?.slice(0, 3)}</Month>
          <Day>{monthDayArr[1]}</Day>
        </DateDetails>
      </div>
      <span
        style={{ width: 12, height: 2, backgroundColor: colors.offWhite }}
      />
      <TourDateContainer>
        <div style={{ display: "flex" }}>
          <TourDetails>
            <City>{data?.city}</City>
            {hasVenue ? <Venue>{data.venue}</Venue> : null}
          </TourDetails>
        </div>
        {hasEventTitle || hasTix ? (
          <CityAndTicketRow>
            {hasEventTitle ? <EventTitle>{data.eventTitle}</EventTitle> : null}
            {hasTix && <TicketLink $url={data.ticketUrl} />}
          </CityAndTicketRow>
        ) : null}
      </TourDateContainer>
    </div>
  );
};

const TourSchedule = ({ $showMobileLayout }) => {
  return (
    <TourScheduleLayout>
      {tourDates.map((td) => {
        return (
          <TourDate
            data={td}
            $showMobileLayout={$showMobileLayout}
            key={`${td?.date}${td?.city}`}
          />
        );
      })}
      <ComingSoon>More dates TBA...</ComingSoon>
      <div style={{ width: 10, height: 48 }} />
    </TourScheduleLayout>
  );
};

export default TourSchedule;
