import delay from "./delay";

describe('', () => {
    test('Корректное значение', async () => {
        const sum = await delay(() => 5 + 5, 1000);
        // Равен 10
        expect(sum).toBe(10);

        // Меньше чем 11
        expect(sum).toBeLessThan(11);

        // Больше чем 10
        expect(sum).toBeGreaterThan(9);
    })
})