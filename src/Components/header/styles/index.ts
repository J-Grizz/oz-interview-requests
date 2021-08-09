import styled, { css } from 'styled-components'
// import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
export const StyledHeader = styled.header`
	${({ theme }) => css`
		background-color: ${theme.colors.NavyBlue};
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
		.logo {
			width: 118px;
		}
	`}
`
