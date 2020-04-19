/**
 * 
 * @param {array} needles 
 * @param {array} haystack 
 */
function contains(needles, haystack) {
    const matches = needles.filter((v) => {
        return haystack.includes(v);
    });

    return matches.length === needles.length
}

export {
    contains
}