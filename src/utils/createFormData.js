export const createFormData = (obj) => {
    const formData = new FormData();
    const keys = Object.keys(obj);
    keys.forEach(key => {
        formData.append(key, obj[key]);
    });
    return formData;
};