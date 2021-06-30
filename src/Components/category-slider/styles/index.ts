import styled, { css } from 'styled-components'
// import { device } from 'Styles'
export const StyledSliderContainer = styled.div`
	${({ theme }) => css`
		padding: 10px;
		margin: 20px 0;
		display: flex;
		flex-direction: column;
		width: 97vw;
		h2 {
			text-decoration: underline;
			padding-bottom: 20px;
		}
	`}
`

export const StyledSlider = styled.div`
	${({ theme }) => css`
		display: flex;
		overflow-x: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	`}
`
