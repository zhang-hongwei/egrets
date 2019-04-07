/*
 * @Author: zhanghongwei
 * @LastEditors: zhanghongwei
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-06 23:43:37
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
var DisplayObjects = (function (_super) {
    __extends(DisplayObjects, _super);
    function DisplayObjects() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    DisplayObjects.prototype.onAddToStage = function () {
        this.spr = new egret.Sprite();
        this.spr.graphics.beginFill(0xff0000);
        this.spr.graphics.drawRect(0, 0, 200, 200);
        this.spr.graphics.endFill();
        this.addChild(this.spr);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    DisplayObjects.prototype.onTouch = function (e) {
        this.spr.x = e.stageX;
        this.spr.y = e.stageY;
    };
    return DisplayObjects;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjects.prototype, "DisplayObjects");
