import "jasmine";
import {CartesianCube} from "../CartesianCube";
import {Point} from "../Point";

describe("Given the size, and the center coordinates of a cube", () => {
    it("Should be able to build the cube with edges parallel to the axes", () => {
        //arrenge
        let size: number=4;
        let coordinates: Point= new Point(7,7,0);
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
        let coordinatesA: Point= new Point(7,7,0);
        let cartesianCubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Point= new Point(6,6,0);
        let cartesianCubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        //act
        let returnedValue: boolean = cartesianCubeA.cartesianCubeIntersection(cartesianCubeB);
        //assert
        expect(returnedValue).toBe(true);
    });
    it("The cube should be able to deny it's collition whith a not intersecting cube whith the same characteristics", () => {
        //arrenge
        let sizeA: number=4;
        let coordinatesA: Point= new Point(7,7,0);
        let cartesianCubeA: CartesianCube = new CartesianCube(sizeA, coordinatesA);
        let sizeB: number=2;
        let coordinatesB: Point= new Point(0,0,0);
        let cartesianCubeB: CartesianCube = new CartesianCube(sizeB, coordinatesB);
        //act
        let returnedValue: boolean = cartesianCubeA.cartesianCubeIntersection(cartesianCubeB);
        //assert
        expect(returnedValue).toBe(false);
    });
    it("The cube should be able to return it's vertices", () => {
        //arrenge
        let size: number=4;
        let coordinates: Point= new Point(7,7,0);
        let cartesianCube: CartesianCube = new CartesianCube(size, coordinates);
        //act
        let vertices: Point[] = cartesianCube.getVertices();
        //assert
        expect(vertices.length).toBe(8);
    });
    it("The cube should be able to confirm if a point is inside the cube", () => {
        //arrenge
        let size: number=4;
        let coordinates: Point= new Point(7,7,0);
        let cartesianCube: CartesianCube = new CartesianCube(size, coordinates);
        //act
        let inside:boolean = cartesianCube.pointInside(new Point(7,7,0));
        //assert
        expect(inside).toBe(true);
    });
});
