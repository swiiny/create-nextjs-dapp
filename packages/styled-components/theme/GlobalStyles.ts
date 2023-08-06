import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
* {
	box-sizing: border-box;
}
*::before {
	box-sizing: border-box;
}
*::after {
	box-sizing: border-box;
}

body {
		margin: 0 auto;
		max-width: 1600px;

    background-color: ${(p) => p.theme.colors.black};
}

html {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
span,
a,
p,
input,
textarea {
	color: ${(p) => p.theme.colors.white};

	margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
a {
  // set font family
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
}


p,
span,
input,
textarea {
  // set font family
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
}


ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0px 1000px #00000000 inset;
  -webkit-transition: background-color 5000s ease-in-out 0s;
  transition: background-color 5000s ease-in-out 0s;
}

input,
textarea {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

 
//========================================================================================================
// ANIMATIONS
//========================================================================================================

//========================================================================================================
// FONTS
//========================================================================================================


`;

export default GlobalStyle;
