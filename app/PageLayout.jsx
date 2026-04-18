"use client";

import globalStyles from "./styles/global";
import useMediaQuery from "./helpers/useMediaQuery";
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import TourSchedule from "./components/TourSchedule";
import LinksSection from "./components/LinksSection";
import { colors } from "./styles/colors";

const mainStackGap = 32;

const ResponsiveHeader = () => {
  return (
    <div className="responsive-header">
      <HeaderMobile />
      <style jsx>{`
        .responsive-header {
          width: 100vw;
          height: auto;
        }
      `}</style>
    </div>
  );
};

const HeaderLayout = (props) => {
  return (
    <div className="header-layout">
      {props.children}
      <style jsx>{`
        .header-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding-top: 16px;
          padding-bottom: 12px;
          margin-right: auto;
          margin-bottom: 16px;
          background-color: ${colors.blackOpaque};
        }
      `}</style>
    </div>
  );
};

const MainContent = (props) => {
  return (
    <div className="main-content">
      {props.children}
      <style jsx>{`
        .main-content {
          display: flex;
          flex-direction: column;
          gap: ${mainStackGap}px;
          width: 100%;
          min-height: 100vh;
          max-width: 560px;
          margin: 0 auto;
          padding: 0 16px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

const PageLayout = () => {
  const showMobileLayout = useMediaQuery("(max-width: 620px)");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "100%",
      }}
    >
      <HeaderLayout $showMobileLayout={showMobileLayout}>
        <em style={{ fontWeight: "300" }}>in loving memory of</em>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "-1px",
            marginTop: 8,
          }}
        >
          DJ Dan
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            letterSpacing: "1.2px",
            marginTop: 8,
            opacity: 0.4,
          }}
        >
          s ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈
        </span>
      </HeaderLayout>
      <MainContent>
        <TourSchedule $showMobile Layout={showMobileLayout} />
        <style jsx global>
          {globalStyles}
        </style>
      </MainContent>
      <LinksSection />
    </div>
  );
};

export default PageLayout;
