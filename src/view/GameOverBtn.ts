class GameOverBtn extends egret.Sprite {
    public _reStartBtn: egret.Sprite;
    public constructor(texture: egret.SpriteSheet) {
        super();
        this._reStartBtn = new egret.Sprite();
        this._reStartBtn.width = 200;
        this._reStartBtn.height = 103;
        let bitMap: egret.Bitmap = new egret.Bitmap();
        bitMap.texture = texture.getTexture("again");
        this._reStartBtn.addChild(bitMap);
        this._reStartBtn.touchEnabled = true;
        this.addChild(this._reStartBtn);
        this.x =
            (egret.MainContext.instance.stage.stage.width -  this.width) / 2;
        this.y =
            egret.MainContext.instance.stage.stage.height - 200;
    }
}
