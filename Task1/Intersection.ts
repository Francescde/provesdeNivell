
import {CartesianCube} from "./CartesianCube";

export class Intersection implements Intersection{
    constructor() {
    }
    cartesianCubesIntersect(cube1: CartesianCube, cube2: CartesianCube) {
        return {intersection:true};
    }
}

