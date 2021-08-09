import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${({ theme }) => css`
		body {
			margin: 0;
		}

		*,
		*:hover,
		*:focus,
		*:before,
		*:after {
			box-sizing: border-box;
			outline: none;
		}

		p,
		a,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
			font-family: ${theme.fonts.main};
			color: ${theme.colors.siteGrey};
		}
  `}
`
