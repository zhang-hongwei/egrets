/*
 * @Author: zhanghongwei
 * @LastEditors: zhanghongwei
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-06 23:43:37
 */

class DisplayObjects extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }
    private spr: egret.Sprite;
    private onAddToStage() {
        this.spr = new egret.Sprite();
        this.spr.graphics.beginFill(0xff0000);
        this.spr.graphics.drawRect(0, 0, 200, 200);
        this.spr.graphics.endFill();
        this.addChild(this.spr);
        this.stage.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTouch,
            this
        );
    }
    private onTouch(e: egret.TouchEvent) {
        this.spr.x = e.stageX;
        this.spr.y = e.stageY;
    }
}
