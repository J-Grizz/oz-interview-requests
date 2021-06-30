import styled, { css } from 'styled-components'
// import { device } from 'Styles'
export const StyledMovieCardContainer = styled.div`
	${({ theme }) => css`
		position: relative;
		display: flex;
		margin-right: 30px;
		a {
			border-radius: 5px;
			overflow: hidden;
		}
		img {
			height: 100%;
		}
	`}
`

export const StyledOverlay = styled.div`
	${({ theme }) => css`
		position: absolute;
		padding: 15px;
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		flex-direction: column;
		transition: backdrop-filter 0.5s;
		h3 {
			color: transparent;
			transition: color 0.5s;
		}
		&:hover {
			h3 {
				color: ${theme.colors.white};
			}
			backdrop-filter: blur(6px);
		}
	`}
`
