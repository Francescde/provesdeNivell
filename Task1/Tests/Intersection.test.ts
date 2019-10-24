import "jasmine";
import {Intersection} from "../Intersection";

describe("something", () => {
    it("should work", () => {
        let intersection: Intersection = new Intersection();
        expect(intersection.cubesIntesect()).toBe(true);
    });
});
