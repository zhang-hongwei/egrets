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
var CardGame = (function (_super) {
    __extends(CardGame, _super);
    function CardGame() {
        var _this = _super.call(this) || this;
        _this.tw = "zhongjiang";
        _this.nw = "weizhongjiang";
        _this.wx = Math.floor(Math.random() * 3);
        _this.wy = Math.floor(Math.random() * 3);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    CardGame.prototype.onAddToStage = function (event) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.card = new Card();
                this.card.touchEnabled = true;
                this.card.x = i * 105;
                this.card.y = j * 105;
                if (i == this.wx && j == this.wy) {
                    this.addChild(this.card.drawCard(this.tw));
                }
                else {
                    this.addChild(this.card.drawCard(this.nw));
                }
                this.card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            }
        }
    };
    CardGame.prototype.onTouch = function (evt) {
        evt.target.showTxt();
    };
    return CardGame;
}(egret.DisplayObjectContainer));
__reflect(CardGame.prototype, "CardGame");
