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
var StartGame = (function (_super) {
    __extends(StartGame, _super);
    function StartGame(texture) {
        var _this = _super.call(this) || this;
        var startGameBitMap = new egret.Bitmap();
        startGameBitMap.texture = texture.getTexture("btn_start");
        // this.addChild(startGameBitMap);
        _this.width = 400;
        _this.height = 588;
        _this.touchEnabled = true;
        _this.x = (egret.MainContext.instance.stage.stage.width - _this.width) / 2;
        _this.y = (egret.MainContext.instance.stage.stage.height - _this.height) / 2;
        return _this;
    }
    return StartGame;
}(egret.Sprite));
__reflect(StartGame.prototype, "StartGame");
