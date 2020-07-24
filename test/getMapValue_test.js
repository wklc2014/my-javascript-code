const assert = require('assert');
const getMapValue = require('../src/js/getMapValue.js');

const testMaps = [
    {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
    },
    {
        a: "11",
        b: "222",
        c: "33",
        d: "44",
        e: "55",
    },
    {
        a: "111",
        b: "22",
        c: "333",
        d: "444",
        e: "555",
    },
]

describe('#formatMoney', () => {

    describe('get key = a', () => {
        const condition = 'b=22&c=333&d=444';
        it(`condition: ${condition} should return '111'`, () => {
            const result = getMapValue({ map: testMaps, path: 'a', condition })
            assert.strictEqual(result, '111');
        });
    });

})
