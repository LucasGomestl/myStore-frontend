import { createGlobalStyle } from "styled-components";

export const tablet = "1000px";
export const mobile = "720px";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #1e1d1f;
    --secondary-color: #43c5e9;
    --light-secondary-color: #6dd1ec;
  }
  *{
    margin: 0px;
    padding: 0px;
    font-family: roboto, sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body, html{
  overflow-x: hidden;
  height: 100%;
  }

  .App {
    position: relative;
    border-top: 1px solid var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    min-height: 100vh;
    padding-bottom: 30px;
  }

  
  .App > *{
    padding-left: 8vw;
    padding-right: 8vw;
   }

   .open {
    
   @media(max-width: ${mobile}){
      display: inline-flex;
      left: 0px;
    }
  }

  .show-suggestions{
    display: grid;
  }
  
  img{
      max-width: 100%
  }
  a{
      color: black
  }
  a:hover{
    color: black
  }
`;

export default GlobalStyle;
