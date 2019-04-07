class MC extends egret.DisplayObjectContainer{
    private _data:any;
    private _texture:egret.Texture;
    public constructor(){
        super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(){
            this.loadResource();
    }

    private async loadResource(){
         RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.initMovieClip,this);
        await RES.loadConfig("resource/default.res.json","resource/");
        await RES.loadGroup("cat")
    }
    private initMovieClip(){
        this._data = RES.getRes("stay_json");
        this._texture = RES.getRes("stay_png");
        let mcFactory :egret.MovieClipDataFactory = new egret.MovieClipDataFactory(this._data,this._texture);
        let mc:egret.MovieClip =new egret.MovieClip(mcFactory.generateMovieClipData("stay"));
        this.addChild(mc);
        // mc.gotoAndPlay(-1);
        mc.play(-1);
        mc.x = 200;
        mc.y = 400;
    }
}