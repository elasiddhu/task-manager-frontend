const getTasks = async (query, token) => {
    const url = `http://localhost:3001/tasks?${query}`
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        const errorMessage = `Error: ${response.status}`
        return errorMessage
    }
    const json = await response.json()
    console.log('getTasks json response\n', json)
    return json
}

export default getTasks