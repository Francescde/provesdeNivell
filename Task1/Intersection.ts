
import {Point} from "./Point";
import {CartesianCube} from "./CartesianCube";

export class Intersection implements Intersection{
    constructor() {
    }

    cartesianCubesIntersect(cube1: CartesianCube, cube2: CartesianCube) {
        let intersection= {
            intersection:cube1.cartesianCubeIntersection(cube2),
            volume: cube1.cartesianCubeVolumeOfIntersection(cube2)
        };
        return intersection;
    }
}

