"use client";

import { colors } from "../styles/colors";
import InStereo from "./svg/InStereo";
import Beatport from "./svg/Beatport";
import SoundCloud from "./svg/SoundCloud";
import Spotify from "./svg/Spotify";
import Instagram from "./svg/Instagram";
import Facebook from "./svg/Facebook";
import { links } from "../../data/externalLinks";

const linksStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    position: "sticky",
    bottom: 0,
    justifyContent: "center",
    background: colors.linksGradient,
    borderTop: `1px solid ${colors.pinkOpaque}`,
    padding: "12px 12px 24px 12px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: colors.lightBlue,
    fontWeight: "500",
    fontSize: 14,
    textDecoration: "none",
    padding: 8,
    margin: 6,
  },
  icon: {
    fontSize: 18,
    width: 18,
    height: 18,
    color: colors.snuff,
  },
};

const LinksSection = () => {
  return (
    <div style={linksStyles.container}>
      <a
        href={links.instereo}
        target="_blank"
        rel="noopener noreferrer"
        style={linksStyles.button}
      >
        <div style={linksStyles.icon}>
          <InStereo />
        </div>
        InStereo
      </a>
      <a
        href={links.beatport}
        target="_blank"
        rel="noopener noreferrer"
        style={linksStyles.button}
      >
        <div style={linksStyles.icon}>
          <Beatport />
        </div>
        Beatport
      </a>
      <a
        href={links.soundcloud}
        target="_blank"
        rel="noopener noreferrer"
        style={linksStyles.button}
      >
        <div style={linksStyles.icon}>
          <SoundCloud />
        </div>
        SoundCloud
      </a>
      <a
        href={links.spotify}
        target="_blank"
        rel="noopener noreferrer"
        style={linksStyles.button}
      >
        <div style={linksStyles.icon}>
          <Spotify />
        </div>
        Spotify
      </a>
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        style={linksStyles.button}
      >
        <div style={linksStyles.icon}>
          <Instagram />
        </div>
        Instagram
      </a>
      <a
        href={links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        style={linksStyles.button}
      >
        <div style={linksStyles.icon}>
          <Facebook />
        </div>
        Facebook
      </a>
    </div>
  );
};

export default LinksSection;
