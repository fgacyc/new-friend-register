export function capitalizeAllFirstLetters(str) {
    str = str.replace(/-/g, " ").replace(/_/g, " ");
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

export function formDate(date) {
    // 2024-07-28T03:26:36.000411 to 2024-07-28 03:26:36
    return date.split("T").join(" ").split(".")[0];
}