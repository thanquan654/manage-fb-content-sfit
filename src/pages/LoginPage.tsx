import { Grid } from '@mui/joy'
import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
	return (
		<>
			<Grid container height={'100vh'}>
				<Grid sm={6} display={{ xs: 'none', sm: 'block' }}>
					Other
				</Grid>
				<Grid
					xs={12}
					sm={6}
					sx={{
						display: 'flex',
						// background: '#0f1',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<LoginForm />
				</Grid>
			</Grid>
		</>
	)
}

export default LoginPage
