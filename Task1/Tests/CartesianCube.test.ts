import "jasmine";
import {CartesianCube} from "../CartesianCube";
import {Vertex} from "../Vertex";

describe("Given the size, and the center coordinates of a cube", () => {
    it("Should be able to build the cube with edges parallel to the axes", () => {
        //arrenge
        let size: number=4;
        let coordinates: Vertex= new Vertex(7,7,0);
        //act
        let cartesianCube: CartesianCube = new CartesianCube(size, coordinates);
        //assert
        expect(cartesianCube.size).toBe(size);
        expect(cartesianCube.center.x).toBe(coordinates.x);
        expect(cartesianCube.center.y).toBe(coordinates.y);
        expect(cartesianCube.center.z).toBe(coordinates.z);
    });
});

describe("Given a cube with edges parallel to the axes", () => {
    it("The cube should be able to detect it's collition whith an intersecting cube whith the same characteristics", () => {
        //arrenge
        let sizeA: number=4;
        let coordinatesA: Vertex= new Vertex(7,7,0);
        let cartesianCubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Vertex= new Vertex(6,6,0);
        let cartesianCubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        //act
        let returnedValue: boolean = cartesianCubeA.cartesianCubeIntersection(cartesianCubeB);
        //assert
        expect(returnedValue).toBe(true);
    });
    it("The cube should be able to deny it's collition whith a not intersecting cube whith the same characteristics", () => {
        //arrenge
        let sizeA: number=4;
        let coordinatesA: Vertex= new Vertex(7,7,0);
        let cartesianCubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Vertex= new Vertex(0,0,0);
        let cartesianCubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        //act
        let returnedValue: boolean = cartesianCubeA.cartesianCubeIntersection(cartesianCubeB);
        //assert
        expect(returnedValue).toBe(false);
    });
});
