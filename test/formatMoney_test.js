const assert = require('assert');
const formatMoney = require('../src/js/formatMoney.js');

describe('#formatMoney', () => {

    // 输入只包括整数部分
    describe('only part integer', () => {
        // 159 => 159
        it("formatMoney('159') should return '159'", () => {
            assert.strictEqual(formatMoney('159'), '159');
        });

        // 0 => 0
        it("formatMoney('0') should return '0'", () => {
            assert.strictEqual(formatMoney('0'), '0');
        });

        // 1200 => 1200
        it("formatMoney('1200') should return '1200'", () => {
            assert.strictEqual(formatMoney('1200'), '1200');
        });

        // 02 => 2
        it("formatMoney('02') should return '2'", () => {
            assert.strictEqual(formatMoney('02'), '2');
        });

        // 011 => 11
        it("formatMoney('011') should return '11'", () => {
            assert.strictEqual(formatMoney('011'), '11');
        });

        // 0203 => 203
        it("formatMoney('0203') should return '203'", () => {
            assert.strictEqual(formatMoney('0203'), '203');
        });

        // 00016 => 16
        it("formatMoney('00016') should return '16'", () => {
            assert.strictEqual(formatMoney('00016'), '16');
        });

    });

    // 输入只包括小数部分
    describe('only part decimal', () => {

        // 以 . 开头
        describe('start with dot', () => {
            it("formatMoney('.') should return '0.'", () => {
                assert.strictEqual(formatMoney('.'), '0.');
            });

            it("formatMoney('.23') should return '0.23'", () => {
                assert.strictEqual(formatMoney('.23'), '0.23');
            });

            it("formatMoney('.2300') should return '0.23'", () => {
                assert.strictEqual(formatMoney('.2300'), '0.23');
            });

            it("formatMoney('.2300', 4) should return '0.2300'", () => {
                assert.strictEqual(formatMoney('.2300', 4), '0.2300');
            });

            it("formatMoney('.2300', 3) should return '0.230'", () => {
                assert.strictEqual(formatMoney('.2300', 3), '0.230');
            });

            it("formatMoney('.2300.', 3) should return '0.230'", () => {
                assert.strictEqual(formatMoney('.2300.', 3), '0.230');
            });

            it("formatMoney('.23.00', 3) should return '0.230'", () => {
                assert.strictEqual(formatMoney('.23.00', 3), '0.230');
            });
        })

        describe('start with zero', () => {
            it("formatMoney('.23.00', 3) should return '0.230'", () => {
                assert.strictEqual(formatMoney('.23.00', 3), '0.230');
            });
        })

    })

})
