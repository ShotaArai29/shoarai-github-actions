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

export const setProductCodeValueOnKintone = (
    productCode
) => {
    // kintoneのグローバル関数を触る
    const r = kintone.app.record.get();
    kintone.app.record.set(r);
};
