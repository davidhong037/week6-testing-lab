const { returnTwo, greeting, add, subtract, multiply, divide } = require('./function')

test('Should return 2', () => {
    expect(returnTwo(2)).toEqual(2)
})

it('Should return "Hello [name]."', () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})

describe('Math Functions', () => {
it('Should return the sum of num1 and num2', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})

it('Should return the difference of num1 and num2', () => {
    expect(subtract(4, 2)).toEqual(2)
    expect(subtract(9, 5)).toEqual(4)
})

it('Should return the product of num1 and num2', () => {
    expect(multiply(3, 6)).toEqual(18)
    expect(multiply(5, 9)).toEqual(45)
})

it('Should return the quotient of num1 and num2', () => {
    expect(divide(10, 2)).toEqual(5)
    expect(divide(27, 9)).toEqual(3)
})
})