import "jasmine";
import {Cube} from "../Cube";
import {Vertex} from "../Vertex";

describe("Given the size, and the center coordinates of a cube", () => {
    it("The funcion should return the cube", () => {
        let size: number=4;
        let coordinates: Vertex= new Vertex(7,7,0);
        let cube: Cube = new Cube(size, coordinates);
        expect(cube.size).toBe(size);
        expect(cube.center.x).toBe(coordinates.x);
        expect(cube.center.y).toBe(coordinates.y);
        expect(cube.center.z).toBe(coordinates.z);
    });
});
