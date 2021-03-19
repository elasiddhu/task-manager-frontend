const createTask = async (payload, token) => {
    const url = `http://localhost:3001/tasks`
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    }
    console.log(token)
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        const errorMessage = `Error: ${response.status}`
        return errorMessage
    }
    const json = await response.json()
    console.log('createTask json response\n', json)
    return json
}

export default createTask