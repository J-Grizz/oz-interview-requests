import { createGlobalStyle, css } from 'styled-components'
import { device } from '.'

export default createGlobalStyle`
  ${({ theme }) => css`
		@font-face {
			font-family: 'Limelight';
			src: local('Limelight'), url('Fonts/Limelight-Regular.ttf') format('truetype');
		}

		*,
		*:hover,
		*:focus,
		*:before,
		*:after {
			box-sizing: border-box;
			font-family: LimeLight;
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
			font-family: LimeLight;
			color: ${theme.colors.white};
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
			height: auto;
			min-height: 100vh;

			body {
				height: auto;
				min-height: 100vh;
				margin: 0;

				#root {
					background: ${theme.backgrounds.backgroundMobi};
					background-size: auto 100%;
					color: ${theme.colors.white};
					display: flex;
					height: auto;
					min-height: 100vh;
					@media ${device.sm} {
						background: ${theme.backgrounds.background};
						background-size: cover;
					}
				}
			}
		}
  `}
`
