let buttonBinded = false

function bindSendButton(){
    let sendButton = document.querySelector('div[role="button"][data-tooltip^="Send"]')
    if (!sendButton)
        return false
    sendButton.addEventListener("click", (event) => {
        let textArea = document.querySelector('div[role="textbox"][class^="Am Al editable LW-avf"]')
        textArea.innerHTML = `Encripted ${textArea.innerHTML}` 
        console.log(textArea.innerHTML)
    }) 
    return true
}

document.addEventListener('DOMNodeInserted', () => {
    if(!buttonBinded)
        buttonBinded = bindSendButton()
})