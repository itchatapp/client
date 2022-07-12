import { useEffect } from 'preact/hooks'
import { Sidebar } from '../components'
import { useClient } from '../hooks'

export const App = () => {
	const client = useClient()

	useEffect(() => {
		const storedToken = localStorage.getItem('token')
		client.login(storedToken!).catch(() => window.location.href = '/register')
	}, [])

	// TODO: Add loading screen
	return <>
		<Sidebar />
	</>
}