class StartGame extends egret.Sprite{
    public constructor(texture:egret.SpriteSheet){
        super();
        let startGameBitMap:egret.Bitmap= new egret.Bitmap();
        startGameBitMap.texture = texture.getTexture("btn_start");
        // this.addChild(startGameBitMap);
        this.width = 400;
        this.height = 588;
        this.touchEnabled = true;
        this.x  = (egret.MainContext.instance.stage.stage.width-this.width)/2;
        this.y  = (egret.MainContext.instance.stage.stage.height-this.height)/2;

    }
}