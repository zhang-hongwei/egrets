/*
 * @Author: zhanghongwei
 * @LastEditors: zhanghongwei
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-06 23:34:59
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

    private onAddToStage() {
         let spr:egret.Sprite = new egret.Sprite();
         spr.graphics.beginFill(0xff0000);
         spr.graphics.drawRect(0,0,200,200);
         spr.graphics.endFill();
         this.addChild(spr);
    }
}
