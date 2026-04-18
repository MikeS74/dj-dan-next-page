"use client";

import TicketLink from "./TicketLink";
import DanPhoto from "./DanPhoto";
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
  paragraphContainer,
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

const ParagraphContainer = ({ children }) => (
  <div className="paragraph-container">
    {children}
    <style jsx>{paragraphContainer}</style>
  </div>
);

const ComingSoon = ({ children }) => (
  <div className="coming-soon">
    {children}
    <style jsx>{comingSoon}</style>
  </div>
);

const TourDate = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DanPhoto />
      <div style={{ display: "flex" }}>
        <TourDetails>
          <City>Wherrett Family Statement:</City>
        </TourDetails>
      </div>
      <TourDateContainer>
        <ParagraphContainer>
          We are profoundly touched by the incredible outpouring of love and
          flood of tributes and memories from Daniel’s friends and fans. Seeing
          the joy and inspiration he brought to so many has been a source of
          great comfort for our family. While many knew him for his creative
          contributions to the world, to us, he was simply Danny—a son, brother,
          uncle, cousin—whose greatest gift to the world was the quiet grace he
          extended to everyone he met.
          <br />
          <br />
          There is a sense of peace in knowing Daniel passed away in his sleep
          of natural causes, enveloped by the familiar tranquility of the home
          he loved. Daniel lived for the authentic moments that make life
          beautiful. He had a laugh so big and infectious it would fill the
          house and had a way of leaving you in stitches every single time you
          saw him. Whether he was sketching fashion designs or meticulously
          organizing his growing record collection, his passion for art was
          evident from an early age. His imagination seemed to have no limits.
          He was a gourmet in the kitchen, a lover of animals, and a person for
          whom kindness was as natural as breathing. Danny’s loving spirit lives
          on in every act of kindness, every shared laugh, and every moment of
          genuine connection.
          <br />
          <br />
          We will be holding a small, private family ceremony to honour his
          beautiful spirit and life. We kindly ask for privacy as we navigate
          this immense loss and celebrate the extraordinary legacy he leaves
          behind.
          <br />
          <br />~ The Wherrett Family
        </ParagraphContainer>
      </TourDateContainer>
      <div style={{ display: "flex" }}>
        <TourDetails>
          <City>2 ways to donate in Dan's honor:</City>
        </TourDetails>
      </div>
      <TourDateContainer>
        <CityAndTicketRow>
          <TicketLink $url="https://donor.musicares.org/-/XGGFSLHQ">
            MusiCares
          </TicketLink>
          <TicketLink $url="https://animalrescuecorps.givecloud.co/donate">
            ARC Animal Rescue
          </TicketLink>
        </CityAndTicketRow>
      </TourDateContainer>
    </div>
  );
};

const TourSchedule = ({ $showMobileLayout }) => {
  return (
    <TourScheduleLayout>
      <TourDate $showMobileLayout={$showMobileLayout} />
      <div style={{ width: 10, height: 48 }} />
    </TourScheduleLayout>
  );
};

export default TourSchedule;
