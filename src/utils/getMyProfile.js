const getMyProfile = async () => {
    const url = `http://localhost:3001/users/me`
    const response = await fetch(url)
    if (!response.ok) {
        const errorMessage = `Error: ${response.status}`
        return errorMessage
    }
    const json = await response.json()
    console.log('getMyProfile json response\n', json)
    return json
}

export default getMyProfile