import "jasmine";
import {Tower} from "../Tower";

describe("Given a new tower", () => {
    it("with 0 levels it should have 0 levels", () => {
        let levels : number =0;
        let tower: Tower = new Tower(levels);
        expect(tower.levels()).toBe(levels);
    });

    it("it should have at least 0 levels", () => {
        let levels : number =-1;
        try {
            expect(new Tower(levels)).toThrowError('The tower showld be at least of size 0');
        }catch (e) {
            expect(e).toEqual(new Error('The tower showld be at least of size 0'));
        }
    });

    it("it should have the levels specified in the constructor", () => {
        let levels : number =6;
        let tower: Tower = new Tower(levels);
        expect(tower.levels()).toBe(levels);
    });

    it("if it has more than 0 levels the first extraible level should be of size 1", () => {
        let levels : number =6;
        let tower: Tower = new Tower(levels);
        expect(tower.pop()).toBe(1);
    });

    it("if it has more than 0 levels the first extraible level should be of size 1", () => {
        let levels : number =6;
        let tower: Tower = new Tower(levels);
        expect(tower.lastLevelSize()).toBe(1);
    });

    it("if it has more than 0 levels you can't add a level biger than the last", () => {
        let levels : number =6;
        let tower: Tower = new Tower(levels);
        try {
            expect(tower.push(2)).toThrowError('The last level is smaller than the new one');
        }catch (e) {
            expect(e).toEqual(new Error('The last level is smaller than the new one'));
        }
    });

    it("if it has more than 0 levels you can't add a level biger than the last", () => {
        let levels : number =6;
        let tower: Tower = new Tower(levels);
        tower.push(0);
        expect(tower.levels()).toBe(levels+1);
    });

    it("if it has 0 levels you can add a level of any size", () => {
        let levels : number =0;
        let tower: Tower = new Tower(levels);
        tower.push(1500);
        expect(tower.levels()).toBe(levels+1);
    });

    it("if it has more than 0 levels the last extraible level should has the same value as the nomber of levels", () => {
        let levels : number = 6;
        let tower: Tower = new Tower(levels);
        let lastlevel : number = 0;
        let extractedLevel : number = tower.pop();
        while(extractedLevel != undefined){
            lastlevel=extractedLevel;
            extractedLevel = tower.pop();
        }
        expect(lastlevel).toBe(levels);
    });
});

