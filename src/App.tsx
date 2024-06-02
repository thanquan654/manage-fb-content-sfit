import { Button } from '@mui/joy'
import { useNavigate } from 'react-router-dom'

function App() {
	// TODO: -Authenticate user and navigate to contentManagerPage, if not redirect to LoginPage
	const navigate = useNavigate()
	return (
		<>
			<Button type="soft" onClick={() => navigate('/content-manage')}>
				Content Manager
			</Button>
			<Button type="soft" onClick={() => navigate('/content')}>
				Content
			</Button>
			<Button type="soft" onClick={() => navigate('/login')}>
				Login
			</Button>
			<Button type="soft" onClick={() => navigate('/result')}>
				Result
			</Button>
		</>
	)
}

export default App
