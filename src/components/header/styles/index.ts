import styled, { css } from 'styled-components'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'

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
export const StyledSearchForm = styled.form`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		input {
			width: 180px;
			background-color: transparent;
			border: none;
			border-bottom: 3px solid ${theme.colors.white};
			margin-right: 15px;
			color: ${theme.colors.white};
			font-size: 16px;
			font-weight: bold;
		}
		button {
			cursor: pointer;
			background-color: transparent;
			border: none;
		}
	`}
`

export const SearchIcon = styled(SearchAlt)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		width: 25px;
	`}
`
