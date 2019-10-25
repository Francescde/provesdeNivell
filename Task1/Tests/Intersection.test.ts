import "jasmine";
import {Intersection} from "../Intersection";
import {Vertex} from "../Vertex";
import {Cube} from "../Cube";

describe("Given 2 cubes that intersect", () => {
    it("should return an structure telling us that the cubes intersect", () => {
        let sizeA: number=4;
        let coordinatesA: Vertex= new Vertex(7,7,0);
        let cubeA: Cube = new Cube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Vertex= new Vertex(6,6,0);
        let cubeB: Cube = new Cube(sizeB, coordinatesB);
        let intersection: Intersection = new Intersection();
        expect(intersection.cubesIntesect(cubeA, cubeB).intersection).toBe(true);
    });
});

