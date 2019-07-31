import { Hashmap } from '../day_09_implement_hash_map'

describe('hash map tests', function() {
    it('should perform the operations on a hash map', () => {
        const myHashmap = new Hashmap()
        myHashmap.set('name', 'Jake')
        expect(myHashmap.get('name')).toEqual('Jake')

        const dict = new Hashmap()
        dict.set('jess', '213-559-6840')
        dict.set('james', '123-456-7890')
        expect(dict.get('james')).toEqual('123-456-7890')
        expect(dict.get('jake')).toEqual(undefined)
    })
})
