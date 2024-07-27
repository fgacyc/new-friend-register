import useSWR from "swr";

const host = import.meta.env.VITE_API_URL;
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function useUser(uid) {
    const { data, error, isLoading } = useSWR(`${host}/users/${uid}`, fetcher)

    return {
        user: data,
        isLoading,
        isError: error,
    }
}

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