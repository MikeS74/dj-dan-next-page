"use client";

import globalStyles from "./styles/global";
import useMediaQuery from "./helpers/useMediaQuery";
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import TourSchedule from "./components/TourSchedule";

const mainStackGap = 48;

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
          margin-top: 32px;
          margin-right: auto;
          margin-bottom: ${props.$showMobileLayout
            ? "40px"
            : `${mainStackGap}px`};
          margin-left: auto;
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HeaderLayout $showMobileLayout={showMobileLayout}>
        {showMobileLayout ? <ResponsiveHeader /> : <HeaderDesktop />}
      </HeaderLayout>
      <MainContent>
        <TourSchedule $showMobileLayout={showMobileLayout} />
        {/* <div
          style={{ width: "100%", height: 80, backgroundColor: "#222222" }}
        /> */}
        <style jsx global>
          {globalStyles}
        </style>
      </MainContent>
    </div>
  );
};

export default PageLayout;
