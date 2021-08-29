export const required = (value) => {
    if (value) return undefined;
    return "Поле обязательно для заполнения"
}
export const maxLengthCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `Максимальная длина ${maxLenght} символов`;
    return undefined;
}