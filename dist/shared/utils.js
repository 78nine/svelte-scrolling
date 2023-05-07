export const sanitize = (hash) => {
    return hash
        .replace(/[^A-Z0-9]/gi, '')
        .toLowerCase();
};
export const getElement = (elementsList, reference) => {
    const elements = elementsList.filter(element => {
        const elementRef = element.reference;
        return elementRef === reference;
    });
    return elements.length ? elements[0].node : null;
};
export const getPosition = (element) => {
    return element.offsetTop;
};
