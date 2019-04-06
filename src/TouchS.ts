class TouchS extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }

    private onAddToStage(event: egret.Event) {
        this.drawSpr();
    }

    private drawSpr() {
        let spr: egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 100, 100);
        spr.graphics.endFill();
        spr.height = 100;
        spr.width = 100;
        spr.touchEnabled = true;
        this.addChild(spr);
        spr.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    }

    private onTouch(evt: egret.Event): void {
        this.drawText();
    }

    private txt: egret.TextField;
    private drawText(): void {
        this.txt = new egret.TextField();
        this.txt.width = 250;
        this.txt.size = 50;
        this.txt.x = 50;
        this.addChild(this.txt);
        this.txt.text = "你点击了小方块";
    }
}
