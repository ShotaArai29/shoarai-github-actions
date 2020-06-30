import { sum, argChange } from "./sum";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("引数を商品コードに変換", () => {
    const tests = [
        { input: "A", expected: "商品コード123" },
        { input: "B", expected: "商品コード222" },
    ];
    for (const t of tests) {
        expect(argChange(t.input)).toBe(t.expected);
    }
});
