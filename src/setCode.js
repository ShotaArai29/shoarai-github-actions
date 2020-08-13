import {
    argChange,
    setProductCodeValueOnKintone,
} from "./sum";

export const convertAndSetValue = (stringValue) => {
    const productCode = argChange(stringValue);
    setProductCodeValueOnKintone(productCode);
};
