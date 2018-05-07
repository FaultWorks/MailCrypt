let buttonBinded = false

function bindSendButton(){
    let sendButton = document.querySelector('div[role="button"][data-tooltip^="Send"]')
    if (!sendButton)
        return false
    sendButton.addEventListener("click", (event) => {
        event.stopImmediatePropagation()
    }) 
    return true
}

document.addEventListener('DOMNodeInserted', () => {
    if(!buttonBinded)
        buttonBinded = bindSendButton()
})