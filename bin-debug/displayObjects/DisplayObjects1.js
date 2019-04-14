/*
 * @Author: zhanghongwei
 * @LastEditors: ZHW
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-09 12:54:45
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var DisplayObjects1 = (function (_super) {
    __extends(DisplayObjects1, _super);
    function DisplayObjects1() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    DisplayObjects1.prototype.onAddToStage = function (event) {
        //    let imgLoader:egret.ImageLoader = new egret.ImageLoader();
        //    imgLoader.once(egret.Event.COMPLETE,this.imgLoadHandler,this);
        //    imgLoader.load("resource/assets/egret/cartoon.png");
        var imgLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.load("resource/assets/egret/cartoon.png");
    };
    DisplayObjects1.prototype.imgLoadHandler = function (evt) {
        /// 展示用显示对象： 白鹭小鸟
        this._bird = new egret.Bitmap(evt.currentTarget.data);
        this.addChild(this._bird);
        this._bird.anchorOffsetX = this._bird.width / 2;
        this._bird.anchorOffsetY = this._bird.height / 2;
        this._bird.x = this.stage.stageWidth / 2;
        this._bird.y = this.stage.stageHeight * 0.618;
    };
    DisplayObjects1.prototype.imgLoaderHandle = function (evt) {
        console.log("+++---++");
        console.log(evt.currentTarget.data);
        //  return;
        /// 展示用显示对象： 白鹭小鸟
        this._bird = new egret.Bitmap(evt.currentTarget.data);
        this.addChild(this._bird);
        //    console.log("+++---++")
        //    console.log(evt.currentTarget.data);
        //    this._bird = new egret.Bitmap(evt.currentTarget.data);
        //    this.addChild(this._bird);
        //    this._bird.anchorOffsetX = this._bird.width/2;
        //    this._bird.anchorOffsetY = this._bird.height/2;
        //    this._bird.x = this.stage.stageWidth/2;
        //    this._bird.y = this.stage.stageHeight*.618;
    };
    DisplayObjects1.STEP_ROT = 3;
    DisplayObjects1.STEP_SCALE = .03;
    return DisplayObjects1;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjects1.prototype, "DisplayObjects1");
