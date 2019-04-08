/*
 * @Author: zhanghongwei
 * @LastEditors: zhanghongwei
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-08 22:54:54
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DisplayObjects = (function (_super) {
    __extends(DisplayObjects, _super);
    function DisplayObjects() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    DisplayObjects.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadComplete, this);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("my_r")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DisplayObjects.prototype.onLoadComplete = function (evt) {
        // console.log("---bitmap")
        // console.log(evt.currentTarget.data);
        this._cartoon = new egret.Bitmap();
        this._cartoon.texture = RES.getRes("cartoon");
        this._cartoon.x = 100;
        this._cartoon.y = 100;
        this.addChild(this._cartoon);
        // this._cartoon.anchorOffsetX = this._cartoon.width / 2;
        // this._cartoon.anchorOffsetY = this._cartoon.height / 2;
        // this._cartoon.x = this.stage.stageWidth * 0.5;
        // this._cartoon.y = this.stage.stageHeight * 0.5;
        // 文字
        this._textInfo = new egret.TextField();
        this.addChild(this._textInfo);
        this._textInfo.text = "轻触屏幕调整显示对象位置";
        this._textInfo.x = 50;
        this._textInfo.y = 50;
        this._textInfo.size = 28;
        this._textInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._textInfo.textColor = 0x000000;
        this._textInfo.type = egret.TextFieldType.DYNAMIC;
    };
    DisplayObjects.prototype.onAddToStage = function () {
        console.log("-----");
        console.log(this.once);
        this.spr = new egret.Sprite();
        this.spr.graphics.beginFill(0xff0000);
        this.spr.graphics.drawRect(0, 0, 200, 200);
        this.spr.graphics.endFill();
        // this.addChild(this.spr);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.loadResource();
    };
    DisplayObjects.prototype.onTouch = function (e) {
        this._cartoon.x = e.stageX - this._cartoon.width / 2;
        this._cartoon.y = e.stageY - this._cartoon.height / 2;
    };
    return DisplayObjects;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjects.prototype, "DisplayObjects");
