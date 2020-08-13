import { convertAndSetValue } from "./setCode";
import {
    argChange,
    setProductCodeValueOnKintone,
} from "./sum";

jest.mock("./sum.js");

test("setCodeOnKintone", () => {
    // argChangeがmockReturnValueOnceの引数に指定した値を返す様設定
    argChange.mockReturnValueOnce("商品コード124");
    convertAndSetValue("A");
    // toHaveBeenCalledWithの引数に指定した値がargChangeの引数に渡されるかチェック
    expect(argChange).toHaveBeenCalledWith("A");
    expect(
        setProductCodeValueOnKintone
    ).toHaveBeenCalledWith("商品コード124");
});
