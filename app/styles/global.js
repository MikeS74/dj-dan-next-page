import css from "styled-jsx/css";
import { colors } from "./colors";

export default css.global`
  body {
    font-family: var(--font-inter);
    font-weight: 500;
    font-size: 16px;
    color: ${colors.offWhite};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(
      -75deg,
      hsl(15 18% 18%),
      hsl(295 18% 18%),
      hsl(251 18% 18%),
      hsl(225 18% 18%),
      hsl(203 18% 18%)
    );
    background-size: 400% 400%;
    animation: gradient 25s ease infinite;
    /* solid background fallback */
    background-color: hsl(225 18% 18%);
    max-width: 100vw;
    overflow-x: hidden;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
