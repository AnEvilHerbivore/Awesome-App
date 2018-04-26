//reference to DOM component to attach to
const output = document.querySelector(".output");


// fragment to hold new DOM elements before appending
const fragment = document.createDocumentFragment();







// create input component
function inputFieldFactory (classList, defaultText, type) {
    const inputField = document.createElement("input")
    inputField.type = type
    inputField.classList = classList
    inputField.placeholder = defaultText
    return inputField
}

// create button component
function buttonFactory (classList, textContent) {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent
    return theButton
}


function cardFactory (classList, textContent) {
    const newSection = document.createElement("section")
    newSection.classList = classList
    newSection.textContent = textContent
    return newSection
}


function append (parent, child) {
    parent.appendChild(child)
}


createInputField = inputFieldFactory("input--text", "Enter Card Text Here...", "text")
append(fragment, createInputField)


const createCardButton = buttonFactory("button--submit", "Create Card")


append(fragment, createCardButton)

/* attach event listener to button
1. Get value of input field
*/
createCardButton.addEventListener("click", function () {
    const textInput = createInputField.value;
    // 2. create card component with text indside
    append(output,cardFactory("card", textInput))
    createInputField.value = ""
})




//create card component



append(output, fragment)