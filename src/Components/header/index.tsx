import { FC } from 'react'
import { StyledHeader, StyledLogoContainer } from './styles'
import { ReactComponent as Logo } from 'Assets/logo.svg'

const Header: FC = () => {
	return (
		<StyledHeader className="header-container">
			<StyledLogoContainer>
				<Logo className="logo" />
			</StyledLogoContainer>
		</StyledHeader>
	)
}

export default Header
