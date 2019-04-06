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
var TouchS = (function (_super) {
    __extends(TouchS, _super);
    function TouchS() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    TouchS.prototype.onAddToStage = function (event) {
        this.drawSpr();
    };
    TouchS.prototype.drawSpr = function () {
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 100, 100);
        spr.graphics.endFill();
        spr.height = 100;
        spr.width = 100;
        spr.touchEnabled = true;
        this.addChild(spr);
        spr.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    TouchS.prototype.onTouch = function (evt) {
        this.drawText();
    };
    TouchS.prototype.drawText = function () {
        this.txt = new egret.TextField();
        this.txt.width = 250;
        this.txt.size = 50;
        this.txt.x = 50;
        this.addChild(this.txt);
        this.txt.text = "你点击了小方块";
    };
    return TouchS;
}(egret.DisplayObjectContainer));
__reflect(TouchS.prototype, "TouchS");
