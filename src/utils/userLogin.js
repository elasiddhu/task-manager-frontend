const userLogin = async (payload) => {
    const url = `http://localhost:3001/users/login`
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        const errorMessage = `Error: ${response.status}`
        return errorMessage
    }
    const json = await response.json()
    console.log('userLogin json response\n', json)
    return json
}

export default userLogin