
jest.mock('store', () => ({
    set: jest.fn(),
    get: jest.fn()
}))

const storage = require("../src/storage"),
    store = require("store"),
    faker = require("faker")

describe('storage', () => {

    beforeEach(() => {
        store.set.mockReset()
        store.get.mockReset()
    })
    
    it('is able to store keys', () => {
        let keys = {
            privateKeyArmored : faker.random.uuid(),
            publicKeyArmored : faker.random.uuid() 
        }
        storage.storeKeys(keys)
        expect(store.set.mock.calls.length).toBe(2)
        expect(store.set).toBeCalledWith("privateKey", keys.privateKeyArmored)
        expect(store.set).toBeCalledWith("publicKey", keys.publicKeyArmored)
    })
    
    it('is able to retrieve keys', () => {
        let keys = {
            privateKeyArmored : faker.random.uuid(),
            publicKeyArmored : faker.random.uuid() 
        }
        
        store.get.mockImplementation((key) => {
            if(key == "privateKey") return keys.privateKeyArmored
            if(key == "publicKey") return keys.publicKeyArmored
            throw `unexpected key ${key}`
        })

        let result = storage.retrieveKeys()

        expect(store.get.mock.calls.length).toBe(2)
        expect(store.get).toBeCalledWith("privateKey")
        expect(store.get).toBeCalledWith("publicKey")
        expect(result).toEqual(keys)
    })
    
})