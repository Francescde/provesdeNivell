
import {Point} from "./Point";
import {CartesianCube} from "./CartesianCube";

export class Intersection implements Intersection{
    constructor() {
    }

    cartesianCubesIntersect(cube1: CartesianCube, cube2: CartesianCube) {
        let intersection= {
            intersection:cube1.cartesianCubeIntersection(cube2),
            volume: 0
        };
        if(intersection.intersection){
            let cube1HalfSize: number = cube1.size/2;
            let cube2HalfSize: number = cube2.size/2;
            let minX : number = Math.max(cube1.center.x-cube1HalfSize,cube2.center.x-cube2HalfSize);
            let minY : number = Math.max(cube1.center.y-cube1HalfSize,cube2.center.y-cube2HalfSize);
            let minZ : number = Math.max(cube1.center.z-cube1HalfSize,cube2.center.z-cube2HalfSize);
            let maxX : number = Math.min(cube1.center.x+cube1HalfSize,cube2.center.x+cube2HalfSize);
            let maxY : number = Math.min(cube1.center.y+cube1HalfSize,cube2.center.y+cube2HalfSize);
            let maxZ : number = Math.min(cube1.center.z+cube1HalfSize,cube2.center.z+cube2HalfSize);
            intersection.volume=(Math.abs(maxX - minX))*(Math.abs(maxY - minY))*(Math.abs(maxZ - minZ));
        }
        return intersection;
    }
}

