export const useFetchSingleData = (url, id) => {
    const {
        data,
        error,
        pending,
    } = useFetch(`${url}`, {
        params: {id}
    });

    return {
        data, error, pending
    }
}