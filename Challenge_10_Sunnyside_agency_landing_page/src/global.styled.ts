import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --font-Barlow: "Barlow", Avenir, Helvetica, Arial, sans-serif;
  --font-fraunces: "Fraunces", Georgia, "Times New Roman", Times, serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --soft-red: "hsl(7, 99%, 70%)";
  --yellow: "hsl(51, 100%, 49%)";

  /* (graphic design text) */
  --dark-desaturated-cyan: hsl(167, 40%, 24%);

  /* (photography text) */
  --dark-blue: "hsl(198, 62%, 26%)";

  /* (footer) */
  --dark-moderate-cyan: "hsl(168, 34%, 41%)";

  --vary-dark-desaturated-blue: "hsl(212, 27%, 19%)";
  --vary-dark-grayish-blue: "hsl(213, 9%, 39%)";
  --dark-grayish-blue: "hsl(210, 4%, 67%)";
  --white: "hsl(0, 0%, 100%)";

  --font-weight-barlow: 600;
  --font-weight-fraunces-semibold: 700;
  --font-weight-fraunces-bold: 900;
}
  body {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  font-size: 62.5%;
  font-family: "Barlow", sans-serif;
}

button {
  border-radius: 100%;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: var(--font-weight-fraunces-semibold);
  font-family: inherit;
  background-color: var(--white);
  cursor: pointer;
  transition: border-color 0.25s;
  color: black;
}
button:hover {
  border-color: var(--white);
  background-color: var(--white);
  opacity: 50%;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}
`;
