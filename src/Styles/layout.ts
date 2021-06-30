import styled, { css } from 'styled-components'
import { device } from '.'

const StyledLayout = styled.div`
	${({ theme }) => css`
		backdrop-filter: brightness(.6);
		box-shadow: inset 0 115px 100px 10px rgb(0 0 0 / 65%);
		width: 100vw;
		overflow: hidden;
		display: grid;
		.header-container {
			grid-area: header;
		}
		.main-container {
			grid-area: main;
			width: 100%;
		}
		grid-template-rows: 100px auto;
		row-gap: 10px;
		grid-template-areas:
			"header"
			"main"
		}
		@media ${device.sm} {
			padding: 15px;
		}
	`}
`

export default StyledLayout
