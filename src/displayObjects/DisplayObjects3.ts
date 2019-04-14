/*
 * @Author: zhanghongwei
 * @LastEditors: ZHW
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-09 22:54:40
 */

class DisplayObjects3 extends egret.DisplayObjectContainer {
    private static STEP_ROT: number = 3;
    private static STEP_SCALE: number = 0.03;
    private _bird: egret.Bitmap;
    private _txInfo: egret.TextField;
    public constructor() {
        super();

        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }
    private onAddToStage(event: egret.Event) {
        let imgLoader: egret.ImageLoader = new egret.ImageLoader();
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.load("resource/assets/egret/cartoon.png");
        this.loadR();
    }

    private async loadR() {
        RES.addEventListener(
            RES.ResourceEvent.GROUP_COMPLETE,
            this.onLoadComplete,
            this
        );
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("my_r");
    }
    private onLoadComplete(event: RES.ResourceEvent) {
        let reg = RES.getRes("cartoon");
    }
    private imgLoadHandler(evt: egret.Event): void {
        let loader: egret.ImageLoader = evt.currentTarget;
        let bmd: egret.BitmapData = loader.data;
        let texture = new egret.Texture();
        texture.bitmapData = bmd;
        this._bird = new egret.Bitmap(texture);
        this.addChild(this._bird);

        this._bird.anchorOffsetX = this._bird.width / 2;
        this._bird.anchorOffsetY = this._bird.height / 2;

        this._bird.x = this.stage.stageWidth / 2;
        this._bird.y = this.stage.stageHeight * 0.618;

        this._txInfo = new egret.TextField();
        this.addChild(this._txInfo);

        this._txInfo.size = 28;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._txInfo.textColor = 0x0000ff;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;

        this.launchAnimaions();
    }

    private _iAnimMoe: number;
    private _nScaleBase: number;

    private launchAnimaions(): void {
        this._iAnimMoe = AnimModes.ANIM_ROT;
        this.stage.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            () => {
                this._iAnimMoe = (this._iAnimMoe + 1) % 3;
            },
            this
        );
        this._nScaleBase = 0;
        this.addEventListener(
            egret.Event.ENTER_FRAME,
            (evt: egret.Event) => {
                switch (this._iAnimMoe) {
                    case AnimModes.ANIM_ROT:
                        this._bird.rotation += DisplayObjects3.STEP_ROT;
                        break;
                    case AnimModes.ANIM_SCALE:
                        this._bird.scaleX = this._bird.scaleY =
                            0.5 +
                            0.5 *
                                Math.abs(
                                    Math.sin(
                                        (this._nScaleBase +=
                                            DisplayObjects3.STEP_SCALE)
                                    )
                                );
                        break;
                }
              this._txInfo.text =   "旋转角度:" +
              this._bird.rotation +
              "\n缩放比例:" +
              this._bird.scaleX.toFixed(2) +
              "\n\n轻触进入" +
              ["缩放", "静止", "旋转"][this._iAnimMoe] +
              "模式";
                return false;
            },
            this
        );
    }
}

class AnimModes {
    public static ANIM_ROT: number = 0;
    public static ANIM_SCALE: number = 1;
}
