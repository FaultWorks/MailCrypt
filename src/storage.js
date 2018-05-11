const store = require("store")

function storeKeys(keys){
    store.set("privateKey", keys.privateKeyArmored)
    store.set("publicKey", keys.publicKeyArmored)
}

function retrieveKeys(){
    let privateKeyArmored = store.get("privateKey")
    let publicKeyArmored = store.get("publicKey")
    return { privateKeyArmored, publicKeyArmored }
}

module.exports = { storeKeys, retrieveKeys }