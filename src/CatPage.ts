class CatPage extends egret.Sprite {
    private _action1mc: egret.MovieClip;
    private _action2mc: egret.MovieClip;
    private _isAction1mc: boolean = true;
    public constructor() {
        super();
        let data = RES.getRes("stay_json");
        let texture = RES.getRes("stay_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, texture );
        this._action1mc = new egret.MovieClip(mcFactory.generateMovieClipData("stay"));
        this.addChild( this._action1mc );
        this._action1mc.gotoAndPlay(1);
        // this.
    }
}
