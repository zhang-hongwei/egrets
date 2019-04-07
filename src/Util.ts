class Util {
    public static getPointByIndex(index: number): egret.Point {
        let point: egret.Point = new egret.Point();
        point.x = index % 9;
        point.y = Math.floor(index % 9);
        return point;
    }
}
