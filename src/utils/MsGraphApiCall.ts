import { apiConfig } from "../authConfig";

export async function callMsGraph(accessToken: string) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(apiConfig.webApiUri + "/users", options)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
            throw error;
        });
}