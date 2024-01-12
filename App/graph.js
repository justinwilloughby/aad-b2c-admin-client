const clientOptions = {
	authProvider: new MyAuthenticationProvider(),
};

async function getUsers() {
    try {
        token = await clientOptions.authProvider.getAccessToken();

        const apiUrl = `${apiConfig.webApiUri}/users`

        response = await fetch(apiUrl, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })

        return response.json()
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function deleteUser(id) {
    try {
        token = await clientOptions.authProvider.getAccessToken();

        const apiUrl = `${apiConfig.webApiUri}/users/${id}`

        response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })

        return response.json()
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function createUser(user) {
    try {
        token = await clientOptions.authProvider.getAccessToken();

        const apiUrl = `${apiConfig.webApiUri}/users`

        response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        return response.json()
    } catch (error) {
        console.log(error);
        return error;
    }
}