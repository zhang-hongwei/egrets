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
var ViewManage = (function (_super) {
    __extends(ViewManage, _super);
    function ViewManage(root, texture) {
        var _this = _super.call(this) || this;
        _this._rootView = root;
        _this._texture = texture;
        var bg = new egret.Bitmap();
        bg.texture = _this._texture.getTexture("again");
        _this._rootView.addChild(bg);
        return _this;
    }
    return ViewManage;
}(egret.EventDispatcher));
__reflect(ViewManage.prototype, "ViewManage");
