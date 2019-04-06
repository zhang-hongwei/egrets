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
var CatPage = (function (_super) {
    __extends(CatPage, _super);
    function CatPage() {
        var _this = _super.call(this) || this;
        _this._isAction1mc = true;
        var data = RES.getRes("stay_json");
        var texture = RES.getRes("stay_png");
        var mcFactory = new egret.MovieClipDataFactory(data, texture);
        _this._action1mc = new egret.MovieClip(mcFactory.generateMovieClipData("stay"));
        _this.addChild(_this._action1mc);
        _this._action1mc.gotoAndPlay(1);
        return _this;
        // this.
    }
    return CatPage;
}(egret.Sprite));
__reflect(CatPage.prototype, "CatPage");
