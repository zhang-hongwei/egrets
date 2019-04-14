/*
 * @Author: zhanghongwei
 * @LastEditors: ZHW
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-09 13:15:47
 */

class DisplayObjects2 extends egret.DisplayObjectContainer {
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
        let bit: egret.Bitmap = new egret.Bitmap();
        console.log("======");
        console.log(bit);
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
        console.log("-______");
        console.log(reg);
    }
    private imgLoadHandler(evt: egret.Event): void {
        let loader: egret.ImageLoader = evt.currentTarget;
        let bmd: egret.BitmapData = loader.data;
        let texture = new egret.Texture();
        texture.bitmapData = bmd;
        let bmp: egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(bmp);
    }
}
