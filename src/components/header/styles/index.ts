import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
	${({ theme }) => css`
		padding: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`}
`

export const StyledLogoContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		img {
			width: 50px;
			height: 50px;
			margin-right: 10px;
		}
	`}
`
