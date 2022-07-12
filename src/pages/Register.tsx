// Example:
// register('someone', 'user@example.com', 'passw0rd').then(({ pending_verification }) => {
//     if (pending_verification) alert('Check your mail')
// }).catch(() => {
//     alert('Some information')
// })

const register = async (username: string, email: string, password: string): Promise<{ pending_verification: boolean }> => {
    const res = await fetch('https://api-dev.itchat.world/auth/accounts/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password })
    })

    if (res.ok) return res.json()

    throw 'Email already taken?'
}


export const Register = () => {
    return <>Register</>
}