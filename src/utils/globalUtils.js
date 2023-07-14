const getFirst150Words = (text) => {
    let result = [];
    const textArray = text.split(" ");
    for (let i = 0; i < 150; i++) {
        result.push(textArray[i]);
    }
    return result.join(" ");
}

const getRestOfText = (text) => {
    let result = [];
    const textArray = text.split(" ");
    for (let i = 150; i < textArray.length; i++) {
        result.push(textArray[i]);
    }
    return result.join(" ");
}

module.exports = {
    getFirst150Words,
    getRestOfText,
}
