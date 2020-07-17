import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}

body{
  font-family: Roboto, sans-serif;
}



`;

export default GlobalStyle;
