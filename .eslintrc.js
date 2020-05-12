module.exports = {
    // TypeScript: @cybozu/eslint-config/presets/typescript
    // react + TypeScript: @cybozu/eslint-config/presets/react-typescript
    extends: "@cybozu/eslint-config",
    env: {
        browser: true,
    },
    rules: {
        // デフォルトは2. 自由に設定して良い
        indent: ["error", 4],
        quotes: ["error", "double"],
    },
    globals: {
        kintone: "readonly",
        // CDN にライブラリを追加したら追記
        // "moment" : "readonly"
        // "jQuery" : "readonly"
    },
};
