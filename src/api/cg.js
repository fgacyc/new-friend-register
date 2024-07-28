import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const host = import.meta.env.VITE_API_URL;


export function useFindCG() {
    const { data, error, isLoading } = useSWR(`${host}/find_cell_group/status0`, fetcher)

    return {
        findCG: data,
        isLoading,
        isError: error,
    }
}