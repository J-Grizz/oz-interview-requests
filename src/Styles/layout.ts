import styled, { css } from 'styled-components'
import { device } from '.'

const StyledLayout = styled.div`
	${({ theme }) => css`
		box-shadow: inset 0 115px 100px 10px rgb(0 0 0 / 65%);
		width: 100%;
		display: grid;
		.header-container {
			grid-area: header;
		}
		.main-container {
			grid-area: main;
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
