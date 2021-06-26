import { FC } from 'react'
import { StyledHeader, StyledLogoContainer } from './styles'
import logo from '../../assets/logo/chewbab-logo.png'

const Header: FC = () => {
	return (
		<StyledHeader className="header-container">
			<StyledLogoContainer>
				<img src={logo} alt="Wookies movie logo (baby wookie)" />
				<h1>Wookie Movies</h1>
			</StyledLogoContainer>
			<form target="/search">
				<input name="q" type="search" />
				<button type="submit"></button>
			</form>
		</StyledHeader>
	)
}

export default Header
