/*
 * @Author: zhanghongwei
 * @LastEditors: zhanghongwei
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-08 22:54:54
 */

class DisplayObjects extends egret.DisplayObjectContainer {
    private _cartoon: egret.Bitmap;
    private _textInfo: egret.TextField;
    private _bgInfo: egret.Shape;

    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }

    public async loadResource() {
        RES.addEventListener(
            RES.ResourceEvent.GROUP_COMPLETE,
            this.onLoadComplete,
            this
        );
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("my_r");
    }
    private onLoadComplete(evt: egret.Event) {
        // console.log("---bitmap")
        // console.log(evt.currentTarget.data);
        this._cartoon = new egret.Bitmap();
        this._cartoon.texture = RES.getRes("cartoon");
        this._cartoon.x = 100;
        this._cartoon.y = 100;
        this.addChild(this._cartoon);

        // this._cartoon.anchorOffsetX = this._cartoon.width / 2;
        // this._cartoon.anchorOffsetY = this._cartoon.height / 2;
        // this._cartoon.x = this.stage.stageWidth * 0.5;
        // this._cartoon.y = this.stage.stageHeight * 0.5;

        // 文字
        this._textInfo = new egret.TextField();
        this.addChild(this._textInfo);
        this._textInfo.text = "轻触屏幕调整显示对象位置";
        this._textInfo.x = 50;
        this._textInfo.y = 50;
        this._textInfo.size = 28;
        this._textInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._textInfo.textColor = 0x000000;
        this._textInfo.type = egret.TextFieldType.DYNAMIC;
    }
    private spr: egret.Sprite;
    private onAddToStage() {
        console.log("-----");
        console.log(this.once);
        this.spr = new egret.Sprite();
        this.spr.graphics.beginFill(0xff0000);
        this.spr.graphics.drawRect(0, 0, 200, 200);
        this.spr.graphics.endFill();
        // this.addChild(this.spr);
        this.stage.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTouch,
            this
        );
        this.loadResource();
    }
    private onTouch(e: egret.TouchEvent) {
        this._cartoon.x = e.stageX-this._cartoon.width/2;
        this._cartoon.y = e.stageY-this._cartoon.height/2;
    }
}
