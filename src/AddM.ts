class AddM extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }

    private async onAddToStage(Event: egret.Event) {
        console.log("jiazai")
        RES.addEventListener(
            RES.ResourceEvent.GROUP_COMPLETE,
            this.onResourceLoad,
            this
        );
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("mymusic");
    }

    private sound : egret.Sound;

    private onResourceLoad(event: RES.ResourceEvent): void {
        this.sound = new egret.Sound();
        this.sound = RES.getRes("my_music");
        this.sound.play();
        console.log("bofang")
    }

    private drawBtn (){
        let spr:egret.Sprite = new egret.Sprite();
        // spr.graphics.
    }
}
