const { suma } = require('../app'); 

test('suma 5 + 7 debe ser 12', () => {
    expect(suma(5, 7)).toBe(12);
});
