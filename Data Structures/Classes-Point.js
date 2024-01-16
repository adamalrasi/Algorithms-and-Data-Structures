class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = newPoint(5, 5)
const p2 = newPoint(10, 10)

Point.distance(p1, p2)

