import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
font-family: 'Source Sans Pro', sans-serif;

* {
  box-sizing: border-box;
  margin:0;
  padding:0;
  font-family: 'Source Sans Pro', sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
ul {
  padding: 0;
  border: 0;
  list-style: none;
}
button,
input {
  outline: none;
  cursor: pointer;
  overflow: hidden;
}
button,
select {
  text-transform: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  font-weight: normal;
  line-height: 1.5em;
}
button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-family: inherit;
  line-height: inherit;
  font-size: inherit;
}
/* Default CSS */
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  margin: 0;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
`;

export default GlobalStyle;
