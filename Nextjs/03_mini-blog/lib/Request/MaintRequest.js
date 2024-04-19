import API from '../../src/constant/API'

export const indexAuthor = async () => {
    const response = await fetch(`${API}authors/get`)
    return await response.json()
}

export const getAuthor = async (endPoint, id) => {
    const response = await fetch(`${API}${endPoint}/${id}`)
    return await response.json()
}

export const editAuthor = async (endPoint, params, id) => {
    try {
        const response = await fetch(`${API}${endPoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        return response.status;
    } catch (error) {
        return error;
    }
};

