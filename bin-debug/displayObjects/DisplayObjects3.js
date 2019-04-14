/*
 * @Author: zhanghongwei
 * @LastEditors: ZHW
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-09 22:54:40
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
var DisplayObjects3 = (function (_super) {
    __extends(DisplayObjects3, _super);
    function DisplayObjects3() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    DisplayObjects3.prototype.onAddToStage = function (event) {
        var imgLoader = new egret.ImageLoader();
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.load("resource/assets/egret/cartoon.png");
        this.loadR();
    };
    DisplayObjects3.prototype.loadR = function () {
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
    DisplayObjects3.prototype.onLoadComplete = function (event) {
        var reg = RES.getRes("cartoon");
    };
    DisplayObjects3.prototype.imgLoadHandler = function (evt) {
        var loader = evt.currentTarget;
        var bmd = loader.data;
        var texture = new egret.Texture();
        texture.bitmapData = bmd;
        this._bird = new egret.Bitmap(texture);
        this.addChild(this._bird);
        this._bird.anchorOffsetX = this._bird.width / 2;
        this._bird.anchorOffsetY = this._bird.height / 2;
        this._bird.x = this.stage.stageWidth / 2;
        this._bird.y = this.stage.stageHeight * 0.618;
        this._txInfo = new egret.TextField();
        this.addChild(this._txInfo);
        this._txInfo.size = 28;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._txInfo.textColor = 0x0000ff;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        this.launchAnimaions();
    };
    DisplayObjects3.prototype.launchAnimaions = function () {
        var _this = this;
        this._iAnimMoe = AnimModes.ANIM_ROT;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this._iAnimMoe = (_this._iAnimMoe + 1) % 3;
        }, this);
        this._nScaleBase = 0;
        this.addEventListener(egret.Event.ENTER_FRAME, function (evt) {
            switch (_this._iAnimMoe) {
                case AnimModes.ANIM_ROT:
                    _this._bird.rotation += DisplayObjects3.STEP_ROT;
                    break;
                case AnimModes.ANIM_SCALE:
                    _this._bird.scaleX = _this._bird.scaleY =
                        0.5 +
                            0.5 *
                                Math.abs(Math.sin((_this._nScaleBase +=
                                    DisplayObjects3.STEP_SCALE)));
                    break;
            }
            _this._txInfo.text = "旋转角度:" +
                _this._bird.rotation +
                "\n缩放比例:" +
                _this._bird.scaleX.toFixed(2) +
                "\n\n轻触进入" +
                ["缩放", "静止", "旋转"][_this._iAnimMoe] +
                "模式";
            return false;
        }, this);
    };
    DisplayObjects3.STEP_ROT = 3;
    DisplayObjects3.STEP_SCALE = 0.03;
    return DisplayObjects3;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjects3.prototype, "DisplayObjects3");
var AnimModes = (function () {
    function AnimModes() {
    }
    AnimModes.ANIM_ROT = 0;
    AnimModes.ANIM_SCALE = 1;
    return AnimModes;
}());
__reflect(AnimModes.prototype, "AnimModes");
