import "jasmine";
import {StringArePermutation} from "../StringArePermutation";

describe("On compare two empty strings", () => {
    it("should return true", () => {
        let text1 : string = "";
        let text2 : string = "";
        expect(StringArePermutation.compare(text1,text2)).toBe(true);
    });

    it("should return true", () => {
        let text1 : string = "";
        let text2 : string = "";
        expect(StringArePermutation.compare2(text1,text2)).toBe(true);
    });
});

describe("On compare two strings with diferent size", () => {
    it("should return false", () => {
        let text1 : string = "aaaa";
        let text2 : string = "aa";
        expect(StringArePermutation.compare(text1,text2)).toBe(false);
    });

    it("should return false", () => {
        let text1 : string = "aaaa";
        let text2 : string = "aa";
        expect(StringArePermutation.compare2(text1,text2)).toBe(false);
    });
});

describe("On compare two strings with same size but diferent leters", () => {
    it("should return false", () => {
        let text1 : string = "b";
        let text2 : string = "a";
        expect(StringArePermutation.compare(text1,text2)).toBe(false);
    });

    it("should return false", () => {
        let text1 : string = "b";
        let text2 : string = "a";
        expect(StringArePermutation.compare2(text1,text2)).toBe(false);
    });
});

describe("On compare two strings with same leters but diferent order", () => {
    it("should return true", () => {
        let text1 : string = "ab";
        let text2 : string = "ba";
        expect(StringArePermutation.compare(text1,text2)).toBe(true);
    });

    it("should return true", () => {
        let text1 : string = "ab";
        let text2 : string = "ba";
        expect(StringArePermutation.compare2(text1,text2)).toBe(true);
    });
});

describe("On compare two strings with same size and leters but one has an space", () => {
    it("should return false", () => {
        let text1 : string = "aaaa";
        let text2 : string = "a aa";
        expect(StringArePermutation.compare(text1,text2)).toBe(false);
    });

    it("should return false", () => {
        let text1 : string = "aaaa";
        let text2 : string = "a aa";
        expect(StringArePermutation.compare2(text1,text2)).toBe(false);
    });
});
