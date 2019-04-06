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
var GameOverS = (function (_super) {
    __extends(GameOverS, _super);
    function GameOverS(texture) {
        var _this = _super.call(this) || this;
        var gameOverS = new egret.Bitmap();
        gameOverS.texture = texture.getTexture("victory");
        _this.addChild(gameOverS);
        _this.width = 400;
        _this.height = 338;
        _this.x = (egret.MainContext.instance.stage.stage.width - _this.width) / 2;
        _this.y = (egret.MainContext.instance.stage.stage.height - _this.height) / 2;
        return _this;
    }
    return GameOverS;
}(egret.Sprite));
__reflect(GameOverS.prototype, "GameOverS");
