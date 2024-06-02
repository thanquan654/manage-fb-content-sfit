export const validateEmail = (email: string): string => {
	const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	return pattern.test(email) ? '' : 'Email không hợp lệ'
}

export const validatePassword = (password: string): string => {
	const regex = /^[a-zA-Z0-9]{6,}$/

	if (!regex.test(password)) {
		if (password.length < 6) {
			return 'Mật khẩu phải có tối thiểu 6 kí tự.'
		} else {
			return 'Mật khẩu không được chứa kí tự đặc biệt.'
		}
	}

	return ''
}

export const validateConfirmPassword = (
	password: string,
	confirmPassword: string,
) => {
	if (password === confirmPassword) {
		return ''
	} else {
		return 'Mật khẩu chưa trùng khớp.'
	}
}
