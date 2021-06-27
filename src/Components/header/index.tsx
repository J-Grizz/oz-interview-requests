import { FC } from 'react'
import { StyledHeader, StyledLogoContainer, StyledSearchForm, SearchIcon } from './styles'
import logo from 'Assets/logo/chewbab-logo.png'

const Header: FC = () => {
	return (
		<StyledHeader className="header-container">
			<StyledLogoContainer>
				<img src={logo} alt="Wookies movie logo (baby wookie)" />
				<h1 className="hidden-mobile">Wookie Movies</h1>
			</StyledLogoContainer>
			<StyledSearchForm target="/search">
				<input name="q" type="text" />
				<button type="submit">
					<SearchIcon />
				</button>
			</StyledSearchForm>
		</StyledHeader>
	)
}

export default Header
