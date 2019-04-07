class CatPage extends egret.Sprite {
    private _action1mc: egret.MovieClip;
    private _action2mc: egret.MovieClip;
    private _isAction1mc: boolean = true;
    public constructor() {
        super();
        let data = RES.getRes("stay_json");
        let texture = RES.getRes("stay_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(
            data,
            texture
        );
        this._action1mc = new egret.MovieClip(
            mcFactory.generateMovieClipData("stay")
        );
        // this.addChild(this._action1mc);
        this._action1mc.play(-1);

        data = RES.getRes("weizhu_json");
        texture = RES.getRes("weizhu_png");
        var mcFactory2: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(
            data,
            texture
        );
        this._action2mc = new egret.MovieClip(
            mcFactory2.generateMovieClipData("weizhu")
        );
        // this.addChild(this._action2mc);
        this._action2mc.play(-1);
        // this.
        this.anchorOffsetX = 0.5;
        this.anchorOffsetY = 1;
        this.playAction();
    }

    public init() {
        this._isAction1mc = true;
        this.playAction();
    }

    public playAction() {
        if (this.numChildren) {
            this.removeChildAt(0);
        }

        if (this._isAction1mc) {
            this.addChild(this._action1mc);
        } else {
            this.addChild(this._action2mc);
        }
    }

    public get isAction1(): boolean {
        return this._isAction1mc;
    }
    public set isAction1(val: boolean) {
        if (this._isAction1mc != val) {
            this._isAction1mc = val;
            this.playAction();
        }
    }
}
