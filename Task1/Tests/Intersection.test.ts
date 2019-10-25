import "jasmine";
import {Intersection} from "../Intersection";
import {Vertex} from "../Vertex";
import {CartesianCube} from "../CartesianCube";

describe("Given 2 cubes with edges parallel to the axes that intersect", () => {
    it("the function cartesianCubesIntersect should return an structure telling us that the cubes intersect", () => {
        let sizeA: number=4;
        let coordinatesA: Vertex= new Vertex(7,7,0);
        let cubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Vertex= new Vertex(6,6,0);
        let cubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cartesianCubesIntersect(cubeA, cubeB).intersection).toBe(true);
    });
});

describe("Given 2 cubes with edges parallel to the axes that don't intersect", () => {
    it("should return an structure telling us that the cubes don't intersect", () => {
        let sizeA: number=4;
        let coordinatesA: Vertex= new Vertex(7,7,0);
        let cubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Vertex= new Vertex(0,0,0);
        let cubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cartesianCubesIntersect(cubeA, cubeB).intersection).toBe(false);
    });
});
