export const usePagination = () => {
    const page = ref(1)

    const goNext = () => {
        page.value = page.value + 1
        console.log(page.value, 'Next')

    }

    const goPrev = () => {
        page.value = page.value - 1
        console.log(page.value, 'Prev')

    }

    return {
        page,
        goNext,
        goPrev
    }
}