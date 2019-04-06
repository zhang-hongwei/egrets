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
var GameOverF = (function (_super) {
    __extends(GameOverF, _super);
    function GameOverF(texture) {
        var _this = _super.call(this) || this;
        var gameOverF = new egret.Bitmap();
        gameOverF.texture = texture.getTexture("failed");
        _this.addChild(gameOverF);
        _this.width = 400;
        _this.height = 361;
        _this.x = (egret.MainContext.instance.stage.stage.width - _this.width) / 2;
        _this.y = (egret.MainContext.instance.stage.stage.height - _this.height) / 2;
        return _this;
    }
    return GameOverF;
}(egret.Sprite));
__reflect(GameOverF.prototype, "GameOverF");
