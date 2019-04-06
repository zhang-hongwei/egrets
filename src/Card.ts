class Card extends egret.Sprite {
    public constructor() {
        super();
    }

    public txt: egret.TextField;
    public drawCard(n:string) {
        this.txt = new egret.TextField();
        this.txt.text = n;
        this.txt.width = 100;
        this.txt.height = 100;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);
        this.hideTxt();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();
        return this;
    }

    public showTxt() {
        this.txt.alpha = 1;
    }

    public hideTxt() {
        this.txt.alpha = 0;
    }
}
