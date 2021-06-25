import styled, { css } from 'styled-components'

const StyledLayout = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: grid;
		padding: 15px;
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
	`}
`

export default StyledLayout
