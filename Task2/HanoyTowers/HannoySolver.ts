import {Tower} from "./Tower";

export class HannoySolver implements HannoySolver{

    towers : Tower[];
    levels : number;

    constructor(levels: number){
        this.levels = levels;
        this.towers = [new Tower(levels), new Tower(0), new Tower(0)]
    }

    moveFromTowerTo(from:number, to:number){
        this.towers[to].push(this.towers[from].pop())
    }

    solved(){
        return this.towers[2].levels()==this.levels;
    }
/*

    def TowerOfHanoi(n , from_rod, to_rod, aux_rod):
    if n == 1:
        print "Move disk 1 from rod",from_rod,"to rod",to_rod
    return
    TowerOfHanoi(n-1, from_rod, aux_rod, to_rod)
    print "Move disk",n,"from rod",from_rod,"to rod",to_rod
    TowerOfHanoi(n-1, aux_rod, to_rod, from_rod)
l*/

    solve(move,t1,t2,t3) {
        if(move==1){
            if (this.towers[t1].lastLevelSize() < this.towers[t3].lastLevelSize()
                || this.towers[t3].lastLevelSize()==undefined)
                this.moveFromTowerTo(t1, t3);
        }
        else{
            this.solve(move-1,t1,t3,t2);
            if (this.towers[t1].lastLevelSize() < this.towers[t3].lastLevelSize()
                || this.towers[t3].lastLevelSize()==undefined)
            this.moveFromTowerTo(t1, t3);
            this.solve(move-1,t2,t1,t3);
        }
    }
}
