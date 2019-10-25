
import {Point} from "./Point";
import {CartesianCube} from "./CartesianCube";

export class Intersection implements Intersection{
    constructor() {
    }

    private getPointsXs(data:Point[]){
        return data.map(d => d.x);
    }

    private getPointsYs(data:Point[]){
        return data.map(d => d.y);
    }

    private getPointsZs(data:Point[]){
        return data.map(d => d.z);
    }


    cartesianCubesIntersect(cube1: CartesianCube, cube2: CartesianCube) {
        let intersection= {
            intersection:cube1.cartesianCubeIntersection(cube2),
            volume: 0
        };
        if(intersection.intersection){
            let colidingVertices: Point[]=[];
            for(let vertex1 of cube1.getVertices()){
                if(cube2.pointInside( vertex1 )){
                    colidingVertices.push(vertex1)
                }
            }
            for(let vertex2 of cube2.getVertices()){
                if(cube1.pointInside( vertex2 )){
                    colidingVertices.push(vertex2)
                }
            }
            let minX : number = Math.min(...this.getPointsXs(colidingVertices));
            let minY : number = Math.min(...this.getPointsYs(colidingVertices));
            let minZ : number = Math.min(...this.getPointsZs(colidingVertices));
            let maxX : number = Math.max(...this.getPointsXs(colidingVertices));
            let maxY : number = Math.max(...this.getPointsYs(colidingVertices));
            let maxZ : number = Math.max(...this.getPointsZs(colidingVertices));
            intersection.volume=(Math.abs(maxX - minX))*(Math.abs(maxY - minY))*(Math.abs(maxZ - minZ));
        }
        return intersection;
    }
}

