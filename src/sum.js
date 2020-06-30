export const sum = (a, b) => a + b;

export const argChange = (arg) => {
    switch (arg) {
        case "A":
            return "商品コード123";
        case "B":
            return "商品コード222";
        default:
            return "エラーE001";
    }
};
