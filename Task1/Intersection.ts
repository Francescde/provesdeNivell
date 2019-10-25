
import {Cube} from "./Cube";

export class Intersection implements Intersection{
    constructor() {
    }
    cubesIntesect(cube1: Cube, cube2: Cube) {
        return {intersection:true};
    }
}

