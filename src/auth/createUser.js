export const createUser = async (user_data) => {
    const url = `${process.env.API_BASE_URL}/users`
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_data)
    }
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        const errorMessage = `Error: ${response.status}`
        throw new Error(errorMessage)
    }
    const json = await response.json()
    console.log('createUser json response\n', json)
    return json
}