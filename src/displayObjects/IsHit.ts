class IsHit extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }

    private onAddToStage() {
        this.loadResource();
        // setInterval(() => {
        //     console.log(1)
        // }, 1000);
        let Timer: egret.Timer = new egret.Timer(500, 5);
        Timer.addEventListener(
            egret.TimerEvent.TIMER_COMPLETE,
            () => {
                console.log("记时结束");
            },
            this
        );
        Timer.addEventListener(
            egret.TimerEvent.TIMER,
            () => {
                console.log("记时");
            },
            this
        );
    }

    private async loadResource() {
        RES.addEventListener(
            RES.ResourceEvent.GROUP_COMPLETE,
            this.loadComplete,
            this
        );
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("my_r");
    }


    private img:egret.Bitmap;                        //舞台中唯一显示对象
    private _touchStatus:boolean = false;              //当前触摸状态，按下时，值为true
    private _distance:egret.Point = new egret.Point(); //鼠标点击时，鼠标全局坐标与_bird的位置差

    private loadComplete() {
        this.img = new egret.Bitmap();
        this.img.texture = RES.getRes("cartoon");
        this.img.anchorOffsetX = this.img.width / 2;
        this.img.anchorOffsetY = this.img.height / 2;
        this.addChild(this.img);
        this.img.touchEnabled = true;
        this.img.addEventListener(
            egret.TouchEvent.TOUCH_BEGIN,
            this.onMove,
            this
        );
        this.img.addEventListener(
            egret.TouchEvent.TOUCH_END,
            this.onMouseUp,
            this
        );
    }
    private onMove(evt: egret.TouchEvent) {
        console.log("Mouse Down.");
        console.log(evt);
        // this.img.anchorOffsetX = evt.stageX;
        // this.img.anchorOffsetY = evt.stageY;
        this._touchStatus = true;
        this._distance.x  = evt.stageX - this.img.x;
        this._distance.y  = evt.stageY - this.img.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.osnmove,this);
    }

    private onMouseUp() {
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.osnmove,this);
    }
    private osnmove(evt:egret.TouchEvent){
        if(this._touchStatus){
            this.img.x = evt.stageX - this._distance.x;
            this.img.y = evt.stageY - this._distance.y;
        }
    }
}
