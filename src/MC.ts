class MC extends egret.DisplayObjectContainer {
    private _mcData: any;
    private _mcTexture: egret.Texture;
    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }
    private onAddToStage(event: egret.Event): void {
        // this.load(this.initMovieClip);
        this.loadResource();
    }

    private async loadResource() {
        RES.addEventListener(
            RES.ResourceEvent.GROUP_COMPLETE,
            this.initMovieClip,
            this
        );
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("mc");
    }



    private initMovieClip(): void {
        this._mcData = RES.getRes("animation_json");
        this._mcTexture = RES.getRes("animation_png");
        let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(
            this._mcData,
            this._mcTexture
        );
        let mc1: egret.MovieClip = new egret.MovieClip(
            mcFactory.generateMovieClipData("attack")
        );
        this.addChild(mc1);
        mc1.gotoAndPlay(1, 3);
        mc1.x = 200;
        mc1.y = 500;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            console.log("dianjishijian");
            mc1.gotoAndPlay(1,3);
        },this);
        let count:number=0;
        
        mc1.addEventListener(egret.Event.LOOP_COMPLETE,()=>{
             console.log("执行第"+ ++count+"次");
        },this)
        mc1.addEventListener(egret.Event.COMPLETE,(e:egret.MovieClipEvent)=>{
            console.log("game over")
        },this)

        mc1.addEventListener(egret.MovieClipEvent.FRAME_LABEL,(e:egret.MovieClipEvent)=>{
            console.log("fram"+" "+ e.frameLabel);
        },this)
    }
}
