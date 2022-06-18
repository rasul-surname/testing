import square from "./square";

describe('mapArrToStrings', () => {
    // Перед каждым тестом
    beforeEach(() => {})

    // Один раз перед всеми тестами
    beforeAll(() => {})

    test('Корректное значение', () => {
        // Равен 1
        expect(square(1)).toBe(1);

        // Равен 4
        expect(square(2)).toBe(4);

        // Меньше чем 5
        expect(square(2)).toBeLessThan(5);

        // Больше чем 3
        expect(square(2)).toBeGreaterThan(3);

        // Не равен undefined
        expect(square(2)).not.toBeUndefined();
    })

    // После каждого теста
    afterEach(() => {})

    // Один раз после всех тестов
    afterAll(() => {})
})