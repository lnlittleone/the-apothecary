export const useFetchAllData = (url, page) => {
    const {
        data,
        error,
        pending,
    } = useFetch(`${url}`, {
        query: {page}
    });

    return {
        data, error, pending
    }
}