export const rangeYears = (startYear, endYear, reverse) => {
    let arrYear = []
    for (let i = startYear; i <= endYear; i++) {
        arrYear.push(i)
    }

    if (reverse) {
        return arrYear.reverse()
    }
    return arrYear
}