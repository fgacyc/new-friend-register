const host = import.meta.env.VITE_API_URL;


export async function createForm(user){
    const response = await fetch(`${host}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;

}