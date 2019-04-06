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
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super.call(this) || this;
    }
    Card.prototype.drawCard = function (n) {
        this.txt = new egret.TextField();
        this.txt.text = n;
        this.txt.width = 100;
        this.txt.height = 100;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);
        this.hideTxt();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();
        return this;
    };
    Card.prototype.showTxt = function () {
        this.txt.alpha = 1;
    };
    Card.prototype.hideTxt = function () {
        this.txt.alpha = 0;
    };
    return Card;
}(egret.Sprite));
__reflect(Card.prototype, "Card");
