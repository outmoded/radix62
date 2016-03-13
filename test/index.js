'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Radix62 = require('..');


// Declare internals

const internals = {};


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('Radix62', () => {

    it('converts number to radix 62', (done) => {

        const numbers = [0, 1, 2, 61, 62, 100, 1000, 100000, 1231239102390123];
        for (let i = 0; i < numbers.length; ++i) {
            const encoded = Radix62.to(numbers[i]);
            const decoded = Radix62.from(encoded);
            expect(decoded).to.equal(numbers[i]);
        }

        done();
    });
});
