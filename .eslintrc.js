module.exports = {
    // TypeScript: @cybozu/eslint-config/presets/typescript
    // react + TypeScript: @cybozu/eslint-config/presets/react-typescript
    extends: "@cybozu/eslint-config",
    env: {
        browser: true,
        "jest/globals": true,
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
    },
    plugins: ["jest"],
    globals: {
        kintone: "readonly",
        // CDN にライブラリを追加したら追記
        // "moment" : "readonly"
        // "jQuery" : "readonly"
    },
};
