/*
 * @Author: zhanghongwei
 * @LastEditors: zhanghongwei
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-06 23:34:59
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
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 200, 200);
        spr.graphics.endFill();
        this.addChild(spr);
    };
    return DisplayObjects;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjects.prototype, "DisplayObjects");
