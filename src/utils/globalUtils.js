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
    for (let i = 100; i < textArray.length; i++) {
        result.push(textArray[i]);
    }
    return result.join(" ");
}

const addCollapseFunc = () => {
    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

module.exports = {
    getFirst150Words,
    getRestOfText,
    addCollapseFunc
}
