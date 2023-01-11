import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
   padding: 0;
 
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      background-color: #001324;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  .gradients{
    div{
      position: fixed;
    }
  }
  .gradient1{
width: 5rem;
height: 5rem;

top: 1;
left: 1;
    -webkit-box-shadow:0px 0px 300px 0px rgba(33,159,255,0.89);
-moz-box-shadow: 0px 0px 300px 0px rgba(33,159,255,0.89);
box-shadow: 0px 0px 300px 0px rgba(33,159,255,0.89);
  }
`;

export default GlobalStyle;
