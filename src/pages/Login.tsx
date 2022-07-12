// Example:
// login('user@example.com', 'passw0rd').then((token) => {
//     localStorage.setItem('token', token)
// }).catch(() => {
//     alert('Some information')
// })

// FIXME: Remove the next line once we use the login function
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const login = async (email: string, password: string): Promise<string> => {
	const res = await fetch('https://api-dev.itchat.world/auth/sessions', {
		method: 'POST',
		body: JSON.stringify({ email, password })
	})

	if (res.ok) return res.text()

	throw 'Invalid email or password'
}


export const Login = () => {
	return <>
       Login
	</>
}