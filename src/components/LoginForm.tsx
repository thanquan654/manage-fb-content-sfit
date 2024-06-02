import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Grid,
	Input,
	Link,
} from '@mui/joy'
import { useState } from 'react'
import { AuthForm } from '../types/auth.types'
import {
	validateConfirmPassword,
	validateEmail,
	validatePassword,
} from '../utils/authHelper'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
	const navigate = useNavigate()
	const [authFormData, setAuthFormData] = useState<AuthForm>({
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [authFormErrorMessage, setAuthFormErrorMessage] = useState<AuthForm>({
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [isRegister, setRegister] = useState<boolean>(false)

	const handleLogin = () => {
		let isError = false
		const emailFormMessage = validateEmail(authFormData.email)
		const passwordFormMessage = validatePassword(authFormData.password)

		if (emailFormMessage || passwordFormMessage) {
			isError = true
		}

		setAuthFormErrorMessage({
			...authFormErrorMessage,
			email: emailFormMessage,
			password: passwordFormMessage,
		})

		if (isError) {
			return
		} else {
			// TODO: LOGIN
			console.log('Login')

			navigate('/')
		}
	}

	const handleRegister = () => {
		let isError = false
		const emailFormMessage = validateEmail(authFormData.email)
		const passwordFormMessage = validatePassword(authFormData.password)
		const confirmPasswordMessage = validateConfirmPassword(
			authFormData.password,
			authFormData.confirmPassword,
		)
		if (emailFormMessage || passwordFormMessage || confirmPasswordMessage) {
			isError = true
		}

		setAuthFormErrorMessage({
			...authFormErrorMessage,
			email: emailFormMessage,
			password: passwordFormMessage,
			confirmPassword: confirmPasswordMessage,
		})

		if (isError) {
			return
		} else {
			// TODO: REGISTER
		}
	}

	return (
		<Grid
			container
			sx={{
				flexDirection: 'column',
				padding: 3,
				width: '70%',
				minWidth: 300,
				height: '70%',
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: '#000',
				borderRadius: 10,
				background: '#ccc',
			}}
		>
			<form>
				<FormControl error={authFormErrorMessage.email ? true : false}>
					<FormLabel>Email</FormLabel>
					<Input
						type="email"
						value={authFormData.email}
						onChange={(e) =>
							setAuthFormData({
								...authFormData,
								email: e.target.value,
							})
						}
					/>
					<FormHelperText>
						{authFormErrorMessage.email}
					</FormHelperText>
				</FormControl>
				<FormControl
					error={authFormErrorMessage.password ? true : false}
				>
					<FormLabel>Mật khẩu</FormLabel>
					<Input
						type="password"
						value={authFormData.password}
						onChange={(e) =>
							setAuthFormData({
								...authFormData,
								password: e.target.value,
							})
						}
					/>
					<FormHelperText>
						{authFormErrorMessage.password}
					</FormHelperText>
				</FormControl>
				{isRegister && (
					<FormControl
						error={
							authFormErrorMessage.confirmPassword ? true : false
						}
					>
						<FormLabel>Xác nhận mật khẩu</FormLabel>
						<Input
							type="password"
							value={authFormData.confirmPassword}
							onChange={(e) =>
								setAuthFormData({
									...authFormData,
									confirmPassword: e.target.value,
								})
							}
						/>
						<FormHelperText>
							{authFormErrorMessage.confirmPassword}
						</FormHelperText>
					</FormControl>
				)}
			</form>
			<Link
				onClick={() => setRegister(!isRegister)}
				level="body-sm"
				color="primary"
				underline="always"
				sx={{ justifyContent: 'flex-end' }}
			>
				{isRegister ? 'Đăng nhập' : 'Đăng ký'}
			</Link>
			{isRegister ? (
				<Button onClick={handleRegister} fullWidth>
					Đăng ký
				</Button>
			) : (
				<Button onClick={handleLogin} fullWidth>
					Đăng nhập
				</Button>
			)}
		</Grid>
	)
}

export default LoginForm
