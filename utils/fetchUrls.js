export const fetchURLs = async (urls) => {
    try {
        const promises =
            urls.map(url => fetch(url));

        const responses =
            await Promise.all(promises);

        const data = await
            Promise.all(responses.map(response => response.json()));

        return data
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`)
    }
}
