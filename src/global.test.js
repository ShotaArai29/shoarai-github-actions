import { convertAndSetValue } from "./setCode";

beforeEach(() => {
    global.kintone = {
        app: {
            record: {
                get: jest.fn(),
                set: jest.fn(),
            },
        },
    };
});

test("test global JS Customize test", () => {
    kintone.app.record.get.mockReturnValue({
        record: { code1: { value: "1" } },
    });
    convertAndSetValue("A");
    const expectedSetValue = {
        record: { code1: { value: "1" } },
    };
    expect(kintone.app.record.set).toHaveBeenCalledWith(
        expectedSetValue
    );
});
