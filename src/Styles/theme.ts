import background from 'Assets/background-images/chewbaka.jpg'
import backgroundMobil from 'Assets/background-images/chewbaka-mobi.jpg'

const theme = {
	backgrounds: {
		background: `lightblue url("${background}") no-repeat center center fixed`,
		backgroundMobi: `lightblue url("${backgroundMobil}") no-repeat center center fixed`,
	},
	colors: {
		black: '#282c34',
		blue: '#a0e9fd',
		lightBlue: '#caf3fe',
		white: '#efefef',
	},
	transition: '0.3s',
}

export default theme
