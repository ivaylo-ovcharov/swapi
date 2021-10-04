export function humanReadableDate (str) {
    const splitDate = str.split("T")
    return splitDate[0] ? splitDate[0] : '-'
}