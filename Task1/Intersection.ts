
import {Point} from "./Point";
import {CartesianCube} from "./CartesianCube";

export module Intersection {

    export function cartesianCubesIntersect(cubeA: CartesianCube, cubeB: CartesianCube) {
        let intersection= {
            intersection:cubeA.cartesianCubeIntersection(cubeB),
            volume: cubeA.cartesianCubeVolumeOfIntersection(cubeB)
        };
        return intersection;

    }
}

