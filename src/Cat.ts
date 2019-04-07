class Cat extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }
    private onAddToStage() {
        this.loadReource();
    }
    private async loadReource() {
        RES.addEventListener(
            RES.ResourceEvent.GROUP_COMPLETE,
            this.onLoadGroupComplate,
            this
        );
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("cat");
    }
    private _viewManage: ViewManage;
    private onLoadGroupComplate() {
        this._viewManage = new ViewManage(this, RES.getRes("catbg_json"));
        let cat:CatPage = new CatPage();
        cat.x =100;
        cat.y=200;
        cat.isAction1=true;
        this.addChild(cat);
    }
}
