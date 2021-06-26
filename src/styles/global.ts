import { createGlobalStyle, css } from 'styled-components'
import { device } from './'

export default createGlobalStyle`
  ${({ theme }) => css`
		@font-face {
			font-family: 'Limelight';
			src: local('Limelight'),
				url('../fonts/Limelight-Regular.ttf') format('truetype');
		}

		*,
		*:before,
		*:after {
			box-sizing: border-box;
			font-family: LimeLight;
		}

		*,
		*:focus,
		*:hover {
			outline: none;
		}

		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
		}

		h1,
		h2,
		h3 {
			text-shadow: 0 2px 13px rgba(0, 0, 0, 0.81);
		}

		.hidden-desktop {
			@media ${device.sm} {
				display: none;
			}
		}

		.hidden-mobile {
			display: none;
			@media ${device.sm} {
				display: block;
			}
		}

		html {
			height: 100%;

			body {
				height: 100%;
				margin: 0;

				#root {
					background: ${theme.backgrounds.backgroundMobi};
					background-size: auto 100%;
					color: ${theme.colors.white};
					display: flex;
					height: 100%;
					@media ${device.sm} {
						background: ${theme.backgrounds.background};
						background-size: cover;
					}
				}
			}
		}
  `}
`
