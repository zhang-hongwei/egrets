class CardGame extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this
        );
    }

    private card: Card;
    private tw: string = "zhongjiang";
    private nw: string = "weizhongjiang";
    private wx: number = Math.floor(Math.random() * 3);
    private wy: number = Math.floor(Math.random() * 3);
    private onAddToStage(event: egret.Event) {
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                this.card = new Card();
                this.card.touchEnabled = true;
                this.card.x = i * 105;
                this.card.y = j * 105;
                if (i == this.wx && j == this.wy) {
                    this.addChild(this.card.drawCard(this.tw));
                } else {
                    this.addChild(this.card.drawCard(this.nw));
                }
                this.card.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this)
            }
        }
    }
    private onTouch (evt:egret.Event){
        evt.target.showTxt();
    }
}
