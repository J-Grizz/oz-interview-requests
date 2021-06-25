import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${({ theme }) => css`
		html {
			height: 100%;

			body {
				height: 100%;
				margin: 0;

				#root {
					background: ${theme.colors.background};
					color: ${theme.colors.blue};
					display: flex;
					font-family: sans-serif;
					height: 100%;
				}
			}
		}
  `}
`
