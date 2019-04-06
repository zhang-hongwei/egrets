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
var GameOverBtn = (function (_super) {
    __extends(GameOverBtn, _super);
    function GameOverBtn(texture) {
        var _this = _super.call(this) || this;
        _this._reStartBtn = new egret.Sprite();
        _this._reStartBtn.width = 200;
        _this._reStartBtn.height = 103;
        var bitMap = new egret.Bitmap();
        bitMap.texture = texture.getTexture("again");
        _this._reStartBtn.addChild(bitMap);
        _this._reStartBtn.touchEnabled = true;
        _this.addChild(_this._reStartBtn);
        _this.x =
            (egret.MainContext.instance.stage.stage.width - _this.width) / 2;
        _this.y =
            egret.MainContext.instance.stage.stage.height - 200;
        return _this;
    }
    return GameOverBtn;
}(egret.Sprite));
__reflect(GameOverBtn.prototype, "GameOverBtn");
