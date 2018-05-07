let buttonBinded = false
function bindSendButton(){
    let sendButton = document.querySelector('div[role="button"][data-tooltip^="Send"]')
    if (!sendButton)
        return false
    sendButton.addEventListener("click", function(){
        // event.preventDefault()
        // event.stopPropagation()
        alert("nothing happens")
        return false
    }); 
    return true
}


document.addEventListener('readystatechange', function (state, some) {
    if(document.readyState !== "complete")
        return
    console.log("finished loading")
});

document.addEventListener('DOMNodeInserted', function (state, some) {
    if(!buttonBinded)
        buttonBinded = bindSendButton()
});