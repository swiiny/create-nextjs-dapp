import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    //background-color: ${(p) => p.theme.colors.white};
}

html {
  height: 100%;

  overflow: hidden;
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
/* .test-dots {
  

  // put the dots in a square of 20 x 20 square
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(50, 1fr);

  position: fixed;
  z-index: -1;

}

.dot {
  width: 5px;
  height: 5px;
  background-color: ${(p) => p.theme.colors.white + '20'};
  border-radius: 50%;
  --scaledelay: calc((
  (@abs(@abs(@row - @size-row/2) + @abs(@col - @size-col/2) - @size-col) / @size-col) - 1) * -1.5s) ;
  animation-name: scale;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-delay: var(--scaledelay);
  
  transform: scale(0.2);

  @keyframes scale {
    0%{
      transform: scale(0.2);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0.2);
    }
  }
}
 */
//========================================================================================================
// FONTS
//========================================================================================================


`;

export default GlobalStyle;
