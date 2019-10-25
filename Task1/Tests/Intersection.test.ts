import "jasmine";
import {Intersection} from "../Intersection";
import {Point} from "../Point";
import {CartesianCube} from "../CartesianCube";

describe("Given 2 cubes with edges parallel to the axes that intersect", () => {
    it("the function cartesianCubesIntersect should return an structure telling us that the cubes intersect", () => {
        let sizeA: number=4;
        let coordinatesA: Point= new Point(7,7,0);
        let cubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Point= new Point(6,6,0);
        let cubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cartesianCubesIntersect(cubeA, cubeB).intersection).toBe(true);
    });
    it("should return an structure telling us the intersecting volume", () => {
        let sizeA: number=4;
        let coordinatesA: Point= new Point(7,7,0);
        let cubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Point= new Point(6,6,0);
        let cubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cartesianCubesIntersect(cubeA, cubeB).volume).toBe(2*2*2);
    });
    it("should return an structure telling us that the cubes intersect", () => {
        let sizeA: number=1;
        let coordinatesA: Point= new Point(0.5,0.5,0.5);
        let cubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=1;
        let coordinatesB: Point= new Point(0,0,0);
        let cubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cartesianCubesIntersect(cubeA, cubeB).intersection).toBe(true);
    });
});

describe("Given 2 cubes with edges parallel to the axes that don't intersect", () => {
    it("should return an structure telling us that the cubes don't intersect", () => {
        let sizeA: number=4;
        let coordinatesA: Point= new Point(7,7,0);
        let cubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Point= new Point(0,0,0);
        let cubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cartesianCubesIntersect(cubeA, cubeB).intersection).toBe(false);
    });
    it("should return an structure telling us that the cubes don't intersect", () => {
        let sizeA: number=1;
        let coordinatesA: Point= new Point(1,0,0);
        let cubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=1;
        let coordinatesB: Point= new Point(0,0,0);
        let cubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cartesianCubesIntersect(cubeA, cubeB).intersection).toBe(false);
    });
    it("should return an structure telling us that the intersecting volume is 0", () => {
        let sizeA: number=4;
        let coordinatesA: Point= new Point(7,7,0);
        let cubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Point= new Point(0,0,0);
        let cubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cartesianCubesIntersect(cubeA, cubeB).volume).toBe(0);
    });
});
