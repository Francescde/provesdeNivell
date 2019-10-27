import "jasmine";
import {Tower} from "../Tower";
import {HannoySolver} from "../HannoySolver";

describe("Given a new HannoySolver", () => {
    it("it should begin with a tower with N levels and two empty ones", () => {
        const levels=6;
        let hannoySolver : HannoySolver = new HannoySolver(levels);
        expect(hannoySolver.towers[0].levels()).toBe(levels);
        expect(hannoySolver.towers[1].levels()).toBe(0);
        expect(hannoySolver.towers[2].levels()).toBe(0);
    });

    it("it should end with the tower 2 with N levels and two empty ones", () => {
        const levels=1;
        let hannoySolver : HannoySolver = new HannoySolver(levels);
        hannoySolver.solve(levels,0,1,2);
        expect(hannoySolver.towers[2].levels()).toBe(levels);
        expect(hannoySolver.towers[1].levels()).toBe(0);
        expect(hannoySolver.towers[0].levels()).toBe(0);
    });

    it("it should end with the tower 2 with N levels and two empty ones", () => {
        const levels=3;
        let hannoySolver : HannoySolver = new HannoySolver(levels);
        hannoySolver.solve(levels,0,1,2);
        expect(hannoySolver.towers[2].levels()).toBe(levels);
        expect(hannoySolver.towers[1].levels()).toBe(0);
        expect(hannoySolver.towers[0].levels()).toBe(0);
    });

    it("it should end with the tower 2 with N levels and two empty ones", () => {
        const levels=4;
        let hannoySolver : HannoySolver = new HannoySolver(levels);
        hannoySolver.solve(levels,0,1,2);
        expect(hannoySolver.towers[2].levels()).toBe(levels);
        expect(hannoySolver.towers[1].levels()).toBe(0);
        expect(hannoySolver.towers[0].levels()).toBe(0);
    });

    it("it should end with the tower 2 with N levels and two empty ones", () => {
        const levels=6;
        let hannoySolver : HannoySolver = new HannoySolver(levels);
        hannoySolver.solve(levels,0,1,2);
        expect(hannoySolver.towers[2].levels()).toBe(levels);
        expect(hannoySolver.towers[1].levels()).toBe(0);
        expect(hannoySolver.towers[0].levels()).toBe(0);
    });

});

