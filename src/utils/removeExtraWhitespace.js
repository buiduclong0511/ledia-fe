export const removeExtraWhitespace = (string) => {
    const result = string.replace(/\s+/g, " ");
    return result
};