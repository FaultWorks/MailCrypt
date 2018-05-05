
document.addEventListener('readystatechange', function (state, some) {
    if(document.readyState !== "complete")
        return
    console.log("finished loading")
    // console.log(document.querySelector('table .HE td div[role="button"][data-tooltip^="Send"]'))

});
